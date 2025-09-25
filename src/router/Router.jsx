import DrivingSchool from "../pages/drivingschool/DrivingSchool";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import PageNotFound from "../components/PageNotFound";
import Root from "../components/Root";
import AdminAuthLayout from "../components/layouts/admin/AdminAuthLayout";
import AdminLayout from "../components/layouts/admin/AdminLayout";
import ApplicationForm, {
    applicationFormLoader,
} from "../pages/applications/ApplicationForm";
import ApplicationHome from "../pages/applications/ApplicationHome";
import Appointment, {
    loader as appointmentLoader,
} from "../pages/appointment/Appointment";
import {
    AppointmentDashboard,
    appointmentDashboardLoader,
} from "../pages/appointment/AppointmentDashboard";
import LoginPage from "../pages/auth/login/LoginPage";
import SignupPage from "../pages/auth/signup/SignupPage";
import CaptureCenter from "../pages/capture_center/CaptureCenter";
import Dashboard from "../pages/dashboard/Dashboard";
import Faq from "../pages/faq/Faq";
import HomePage from "../pages/home/HomePage";
import Profile, { profileLoader } from "../pages/profile/Profile";
import Support from "../pages/support/Support";
import Verify from "../pages/verification/Verify";
import BookAppointment from "../pages/schedule_appointment/BookAppointment";
import {
    AdminDashboard,
    Dlc,
    Dssp,
    Frsc,
    Login,
    NewApplicants,
    Payments,
    Reissue,
    Renewal,
    Settings,
    SignUp,
    Vio,
} from "../pages/admin";
import { AdminProfile } from "../pages/admin/settings/components/AdminProfile";
import AdminSettings from "../pages/admin/settings/components/AdminSettings";
import About from "../pages/about/About";

const router = createBrowserRouter([
    {
        path: "/",

        element: (
            <div className="min-h-screen w-[dwv] overflow-x-hidden relative">
                <Outlet />
            </div>
        ),
        children: [
            {
                path: "/",

                element: <Root />,
                children: [
                    {
                        index: true,
                        element: <HomePage />,
                    },
                    {
                        path: "faq",
                        element: <Faq />,
                    },
                    {
                        path: "support",
                        element: <Support />,
                    },
                    {
                        path: "about",
                        element: <About />,
                    },
                    {
                        path: "login",
                        element: <LoginPage />,
                    },
                    {
                        path: "signup",
                        element: <SignupPage />,
                    },
                    {
                        path: "verify-license",
                        element: <Verify />,
                    },
                    {
                        path: "capture-centers",
                        element: <CaptureCenter />,
                    },
                    {
                        path: "driving-schools",
                        element: <DrivingSchool />,
                    },
                    {
                        element: <AuthLayout />,
                        children: [
                            {
                                path: "dashboard",
                                element: <Dashboard />,
                            },
                            {
                                path: "profile",
                                element: <Profile />,
                                loader: profileLoader,
                            },
                            {
                                path: "applications/:type",
                                element: <ApplicationHome />,
                            },
                            {
                                path: "applications/:type/form",
                                element: <ApplicationForm />,
                                loader: applicationFormLoader,
                            },
                            {
                                path: "get-appointment-slip",
                                element: <AppointmentDashboard />,
                                loader: appointmentDashboardLoader,
                            },
                            {
                                path: "appointment",
                                element: <Appointment />,
                                loader: appointmentLoader,
                            },
                            {
                                path: "schedule-appointment",
                                element: <BookAppointment />,
                            },
                        ],
                    },
                ],
            },
            {
                path: "/admin",

                element: <AdminLayout />,
                children: [
                    {
                        index: true,
                        element: <Login />,
                    },
                    {
                        path: "signup",
                        element: <SignUp />,
                    },
                    {
                        element: <AdminAuthLayout />,
                        children: [
                            {
                                path: "dashboard",
                                element: <AdminDashboard />,
                            },
                            {
                                path: "payments",
                                element: <Payments />,
                            },
                            {
                                path: "new-applicants",
                                element: <NewApplicants />,
                            },
                            {
                                path: "renewal",
                                element: <Renewal />,
                            },
                            {
                                path: "reissue",
                                element: <Reissue />,
                            },
                            {
                                path: "dssp",
                                element: <Dssp />,
                            },
                            {
                                path: "vio",
                                element: <Vio />,
                            },
                            {
                                path: "dlc",
                                element: <Dlc />,
                            },
                            {
                                path: "frsc",
                                element: <Frsc />,
                            },
                            {
                                path: "settings",
                                element: <Settings />,
                                children:[
                                    {
                                        index: true,
                                        element: <AdminProfile />
                                    },
                                    {
                                        path:"/admin/settings/settingPage",
                                        element: <AdminSettings />
                                    }
                                ]
                            },                          
                        ],
                    },
                ],
            },
        ],
    },
    {
        path: "*",
        element: <PageNotFound />,
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;
