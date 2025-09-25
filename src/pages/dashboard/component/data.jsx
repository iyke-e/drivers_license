import profilebg from "../../../assets/dashboard/profile.png"
import newappbg from "../../../assets/dashboard/newappl.png"
import renewalbg from "../../../assets/dashboard/renewal.png"
import reissuebg from "../../../assets/dashboard/reissue.png"
import verificationbg from "../../../assets/dashboard/verification.png"
import applicationslipbg from "../../../assets/dashboard/appslip.png"
import capturecenterbg from "../../../assets/dashboard/capturecentre.png"
import drivingschoolbg from "../../../assets/dashboard/drivingschool.png"

export const dashboardLinks = [
    {
        image: profilebg,
        name: "Profile",
        link: '/profile'
    },
    {
        image: newappbg,
        name: "New Application",
        link: '/applications/new'
    },
    {
        image: renewalbg,
        name: "Renewal",
        link: '/applications/renewal'
    },
    {
        image: reissuebg,
        name: "Reissue",
        link: '/applications/reissue'
    },
    {
        image: verificationbg,
        name: "License Verification",
        link: '/verify-license'
    },
    {
        image: applicationslipbg,
        name: "Application Slip",
        link: '/get-appointment-slip'
    },
    {
        image: capturecenterbg,
        name: "Capture Centre",
        link: '/capture-centers'
    },
    {
        image: drivingschoolbg,
        name: "Driving Schools",
        link: '/driving-schools'
    },
]