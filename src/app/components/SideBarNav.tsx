import React from "react";
import {
    Home,
    Contact,
    Watch,
    Care,
    Give,
    Blog
} from './SvgIcons/SvgIcons'
import Link from "next/link";

type SideBarNavProps = {
    toggleSideBar: () => {}
    style?: string
    liStyle?: string
}

export function SideBarNav({ liStyle, style, toggleSideBar }: SideBarNavProps) {
    return <div className="">
        <ul className={` ${style} `}>
            <li>
                <Link href='/About' className={`${liStyle} flex items-center  text-white opacity-70 hover:opacity-100 duration-300`} >
                    <span className="font-light mr-2  ">
                        <Home height={30} width={30}/>
                    </span>
                    ABOUT</Link>
            </li>
            <li>
                <a className={`${liStyle} flex items-center  text-white opacity-70 hover:opacity-100 duration-300`} href="#">
                    <span className="font-light mr-2  ">
                        <Contact height={30} width={30}/>
                    </span>
                    CONTACT</a>
            </li>
            <li>
                <a className={`${liStyle} flex items-center  text-white opacity-70 hover:opacity-100 duration-300`} href="#">
                    <span className="font-light mr-2  ">
                        <Watch height={30} width={30}/>
                    </span>
                    WATCH</a>
            </li>

            <li>
                <a className={`${liStyle} flex items-center  text-white opacity-70 hover:opacity-100 duration-300`} href="#">
                    <span className="font-light mr-2  ">
                        <Care height={30} width={30}/>
                    </span>
                    CARE</a>
            </li>

            <li>
                <a className={`${liStyle} flex items-center  text-white opacity-70 hover:opacity-100 duration-300`} href="#">
                    <span className="font-light mr-2  ">
                        <Give height={30} width={30}/>
                    </span>
                    GIVE</a>
            </li>
            <li>
                <a className={`${liStyle} flex items-center  text-white opacity-70 hover:opacity-100 duration-300`} href="#">
                    <span className="font-light mr-2  ">
                        <Blog height={30} width={30}/>
                    </span>
                    BLOG</a>
            </li>

        </ul>
    </div>
}
