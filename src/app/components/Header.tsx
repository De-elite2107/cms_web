import { SideBarNav } from './SideBarNav';
import React, { useState, useEffect, useContext } from 'react'
import { SideBarContext } from './context/SidebarContext'
import { menuIcon } from './SvgIcons/SvgIcons'
import { motion } from 'framer-motion'
// import logo from './assets/logo.png'

export default function Header() {

  const [scrollY, setScrollY] = useState(0)
  const { Open, setOpen } = useContext(SideBarContext)
  const toggleSideBar = () => setOpen(!Open)


  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])

  const backgroundColor = scrollY > 100 ? ' ' : 'transparent';

  return (
    <div
      style={{'background': scrollY > 100 ? 'var(--primary-color)' : ''}}
      className={` ${backgroundColor} transition h-20 transparent fixed w-full drop-shadow-lg z-20`}>
      <div className="container px-10 md:px-0 h-full mx-auto flex justify-between items-center">

        {/* logo here*/}
        <a className="" href="#">
          <img src='./assets/logo.png' height="100" width="100" />
        </a>

        {/* menu Links */}
        <SideBarNav toggleSideBar={toggleSideBar} style='hidden px-10 py-16 bg-gray-800 z-10
            md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:space-x-6' liStyle='md:text-xs' />

        <div className="flex items-center md:hidden">
          <button className="text-white text-4xl font-bold opacity-70 hover:opacity-100 duration-300"
            onClick={toggleSideBar}>
            {menuIcon}
          </button>
        </div>
      </div>
    </div>
  )
}
