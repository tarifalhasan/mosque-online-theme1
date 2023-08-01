"use client"
import { NavLinks } from "@/constant/data"
import Link from "next/link"
import { useState } from "react"
import { HiMenuAlt1 } from "react-icons/hi"
import { IoCloseSharp } from "react-icons/io5"
import Container from "../container"
import Logo from "../ui/Logo"
const HeaderMain = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {
        setMenuOpen(prev => !prev)
    }
    return (
        <Container>
            <header className="flex items-center justify-between gap-4">
                <Logo />
                <div className="hamber-menu mt-5 lg:hidden">
                    <button onClick={toggleMenu}><HiMenuAlt1 size={25} /></button>
                </div>
                <div className={`fixed px-5 mx-0 ${menuOpen ? "left-0" : "left-full"} right-0 top-0 bottom-0 w-full h-full bg-[#D6EAF8] z-50 `}>
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center">
                            <Logo />
                        </div>
                        <div className="flex items-center">
                            <button onClick={toggleMenu}><IoCloseSharp size={25} /></button>
                        </div>
                    </div>
                    <ul className=" space-y-5 ">
                        {
                            NavLinks.map((link, index) => (
                                <li key={index} className="  flex justify-center">
                                    <Link href={link.href} className="text-gray-700 text-lg  text-left hover:text-gray-900">{link.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <ul className=" hidden pt-10 lg:flex items-center gap-6 ">
                    {
                        NavLinks.map((link, index) => (
                            <li key={index} className="  flex justify-center">
                                <Link href={link.href} className=" font-normal text-lg  text-left hover:text-primary">{link.name}</Link>
                            </li>
                        ))
                    }
                </ul>
                <div className=" hidden pt-10  lg:flex items-center gap-4">
                    <button className="btn hover:bg-opacity-75 bg-[#1DBBB4]">Login</button>
                    <button className="btn hover:bg-opacity-75 bg-[#1DBBB4]">Register</button>
                </div>
            </header>
        </Container>
    )
}

export default HeaderMain