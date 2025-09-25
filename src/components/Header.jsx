import logo from '../assets/Logo.svg';
import coatofarm from '../assets/coatOfArm.png';
// import arrowRight from '../assets/arrowRight.svg';
// import search from '../assets/search.svg';
// import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Button, { Button2 } from './utils/Button';
import SideMenu from './SideMenu';
import { useState } from 'react';

import { FaUserAlt } from 'react-icons/fa';

const Header = () => {
  const [popup, setPopup] = useState(false);

  const { auth } = useAuth();

  return (
    <header className="px-4 py-3 hidden md:px-10 xl:px-20 md:flex  md:flex-row justify-between Md:pt-6 md:pb-4 border-b">
      <div className="flex items-center">
        <div className="pr-3">
          <img className="h-20" src={coatofarm} alt="" />
        </div>

        <div className="border-l pl-3 grid place-content-center border-green-700">
          <img className="h-14" src={logo} alt="" />
        </div>
      </div>

      <div className="flex gap-6">
        <div className="flex gap-4 justify-center items-center">
          {!auth?.user ? (
            <>
              <Button btnLink={'/signin'}>Login</Button>

              <Button2 btnLink={'/signup'}>Sign up</Button2>
            </>
          ) : (
            <>
              <div
                onClick={() => {
                  setPopup(!popup);
                }}
                className=""
              >
                {!auth.user?.image ? (
                  <FaUserAlt className="text-6xl p-1  cursor-pointer border rounded-full" />
                ) : (
                  <img
                    className="h-14 rounded-full"
                    src={auth.user?.image}
                    alt=""
                  />
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {auth?.user && popup && (
        <SideMenu
          closeFunc={() => {
            setPopup(false);
          }}
        />
      )}
    </header>
  );
};

export default Header;
