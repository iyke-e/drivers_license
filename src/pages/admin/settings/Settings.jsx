import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Settings = () => {
  const listArray = [
    {
      to: "/admin/settings",
      title: "Profile"
    },
    {
      to:"/admin/settings/settingPage",
      title:"Settings"
    }
  ]
  return (
    <div className='bg-white rounded-3xl px-7 py-9'>
      <nav className="grid grid-cols-2 bg-white md:flex gap-8 place-items-center lg:place-items-start w-full lg:w-fit pt-3  list-none mb-8">
        {
            listArray.map((item, index) =>(
                <NavLink to={item.to} key={`account-nav-${index}`}className="w-full lg:w-fit text-center" {...(index == "0" ? { end: true } : {})}>{({ isActive}) => (
                    <span className={` w-full text-center lg:text-left text-base font-medium text-[#718EBF] no-underline relative  py-2 before:content-[" "] ${ isActive? "before:w-full text-[#15803D]" : null} before:h-0.5  before:bg-[#15803D] before:absolute before:top-full`}>{item.title}</span>
                    )}
                </NavLink>
            ))
        }
      </nav>
      <Outlet />
    </div>
  )
}

export default Settings