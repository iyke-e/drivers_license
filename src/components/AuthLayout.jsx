import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const AuthLayout = () => {
  const { pathname } = useLocation();
  const { isUserAuthenticated } = useAuth();

  if (!isUserAuthenticated) {
    return (
      <Navigate
        to="/login"
        state={{ requestedUrl: pathname, message: 'Please login to continue!' }}
        replace={true}
      />
    );
  }

  return <Outlet />;
};

export default AuthLayout;
