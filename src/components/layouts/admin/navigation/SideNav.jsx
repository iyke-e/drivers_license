import { Link, NavLink } from "react-router-dom"
import { HomeSvg, PaymentSvg, NewApplicantSvg, RenewalSvg, ReissueSvg, DsspSvg, DlcSvg, VioSvg, FrscSvg, SettingsSvg, LogoutSvg } from "./Svg"
import { isAxiosError } from "axios"
import { useState } from "react"
const links = [
    {
        name: 'Dashboard',
        icon: (color) => <HomeSvg color={color} />,
        path: '/admin/dashboard'
    },
    {
        name: 'Payment',
        icon: (color) => <PaymentSvg color={color} />,
        path: '/admin/payments'
    },
    {
        name: 'New Applicant',
        icon: (color) => <NewApplicantSvg color={color} />,
        path: '/admin/new-applicants'

    },
    {
        name: 'Renewal',
        icon: (color) => <RenewalSvg color={color} />,
        path: '/admin/renewal'

    },
    {
        name: 'Reissue',
        icon: (color) => <ReissueSvg color={color} />,
        path: '/admin/reissue'

    },
    {
        name: 'DSSP Request',
        icon: (color) => <DsspSvg color={color} />,
        path: '/admin/dssp'

    },
    {
        name: 'VIO Screen',
        icon: (color) => <VioSvg color={color} />,
        path: '/admin/vio'

    },
    {
        name: 'DLC Record',
        icon: (color) => <DlcSvg color={color} />,
        path: '/admin/dlc'

    },
    {
        name: 'FRSC',
        icon: (color) => <FrscSvg color={color} />,
        path: '/admin/frsc'

    },
    {
        name: 'Setting',
        icon: (color) => <SettingsSvg color={color} />,
        path: '/admin/settings'

    },
    {
        name: 'Logout',
        icon: (color) => <LogoutSvg color={color} />,
        path: '/admin/logout'

    },
]
const SideNav = ({ closeNav }) => {

    const [hoverIndex, setHoverIndex] = useState(null)

    const handleMouseEnter = (index) => {
        setHoverIndex(index)
    }
    const handleMouseLeave = (index) => {
        setHoverIndex(null)
    }

    const navStyle = "flex hover:text-green-700 relative text-[#B1B1B1] items-center gap-4 py-3 md:py-[18px] font-semibold pl-[35px]"
    const activeNav = "flex relative text-[#B1B1B1] items-center gap-4 py-[18px] font-semibold pl-[35px]"



    return (
        <>



            <nav className="grid gap-2">
                {
                    links.map((link, index) => {
                        const setColor = (color) => {
                            return color || '#b1b1b1'
                        }

                        return (
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    [
                                        isActive ? `${navStyle} text-green-700 before:absolute before:h-full before:w-2 before:bg-green-700 before:left-0 before:rounded-r-lg ` : navStyle
                                    ].join("")
                                } key={index}

                                onClick={closeNav}

                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}

                            >
                                {({ isActive }) => (
                                    <>
                                        <span className="text-3xl">
                                            {link.icon(setColor(isActive && '#15803D'))}
                                        </span>
                                        <span className={isActive && 'text-[#15803d]'}>
                                            {link.name}
                                        </span>
                                    </>

                                )}


                            </NavLink>
                        )
                    })
                }
            </nav >

        </>
    )
}

export default SideNav