import React,{useState, useEffect} from 'react'
import { useTheme } from 'next-themes';
import {RxCaretDown} from "react-icons/rx"
// import Sidebar from './Sidebar';
import {GiHamburgerMenu} from "react-icons/gi"
import { MdOutlineLightMode } from 'react-icons/md';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0/client';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BiCog, BiEnvelope, BiLogOut } from 'react-icons/bi';

function ClientNavbar() {
    const { user, error, isLoading } = useUser();

    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [navbarName, setNavbarName] = useState("")
    const [sidebar, setSidebar] = useState(false)
    const [navbarType, setNavbarType] = useState("corporate")
    const navbarTypes = {
        corporate: "corporate",
        hosting: "hosting"
    }
    const openDropdown = (name: string)=>setNavbarName(name)
    const closeDropdown = ()=>setNavbarName("")
    const router = useRouter()

    useEffect(() => setMounted(true), []);

    const toggleMode = () => {
        if (theme === "light") {
            return setTheme("dark")
        }
        setTheme("light")
    }

    const toggleSideBar = ()=>setSidebar(!sidebar)

    return (
        <>
                <div className="relative w-full h-auto flex flex-row items-center justify-center shadow-sm dark:bg-[rgba(0,0,0,0.05)] ">
                    {/* Sidebar Section */}
                    <div className="visible md:hidden w-auto flex items-center justify-start absolute top-[15px] right-5 gap-5 z-[2] ">
                        <MdOutlineLightMode onClick={toggleMode} className="dark:bg-blue-400 cursor-pointer bg-dark-100 text-[25px] text-white-100 p-1 rounded-[50%] ml-3 " />
                        <button onClick={toggleSideBar} id="harmbugger-menu" className="px-3 py-1 cursor-pointer bg-blue-300 text-[12px] text-white-100 hover:scale-[1.1] transition-all rounded-md flex items-center justify-center shadow-md ">
                            <GiHamburgerMenu className='text-[25px]' />
                        </button>
                    </div>
                    {/*<Sidebar active={sidebar} closeSidebar={toggleSideBar} />*/}
                    {/* Sidebar End Section */}
                    <div className="relative h-auto w-full md:w-[90%] lg:w-[83.3%]">
                        <div className="w-full h-auto flex items-center justify-between mb-2 mt-3 px-4">
                            <LogoSection theme={theme} />
                            <div className="w-auto hidden lg:flex items-center justify-center ml-9">
                                <li onMouseOver={()=>openDropdown("solution")} className="flex items-center justify-center hover:text-white-100 hover:bg-dark-600 hover:dark:text-white-600 px-2 py-1 mr-1 rounded-md">
                                    <Link href="/client/projects" className="dark:text-white-100 hover:text-white-100 flex items-center justify-center">
                                        My Projects
                                    </Link>
                                </li>
                                <li onMouseOver={()=>openDropdown("solution")} className="flex items-center justify-center hover:text-white-100 hover:bg-dark-600 hover:dark:text-white-600 px-2 py-1 mr-1 rounded-md">
                                    <Link href="" className="dark:text-white-100 hover:text-white-100 flex items-center justify-center">
                                        Support
                                    </Link>
                                </li>
                                {/*<li onMouseOver={()=>openDropdown("solution")} className="flex items-center justify-center hover:text-white-100 hover:bg-dark-600 hover:dark:text-white-600 px-2 py-1 mr-1 rounded-md">*/}
                                {/*    <a href="" className="dark:text-white-100 hover:text-white-100 flex items-center justify-center">*/}
                                {/*        Services*/}
                                {/*        <RxCaretDown className='ml-2' />*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                                {/*<li onMouseOver={()=>openDropdown("resources")} className="flex items-center justify-center hover:text-white-100 hover:bg-dark-600 hover:dark:text-white-600 px-2 py-1 mr-1 rounded-md">*/}
                                {/*  <a href="" className="dark:text-white-100 hover:text-white-100 flex items-center justify-center">*/}
                                {/*    Resources*/}
                                {/*    <RxCaretDown className='ml-2' />*/}
                                {/*  </a>*/}
                                {/*</li>*/}
                                {/*<li onMouseOver={closeDropdown} className="flex items-center justify-center hover:text-white-100 hover:bg-dark-600 hover:dark:text-white-600 px-2 py-1 mr-1 rounded-md">*/}
                                {/*  <a href="" className="dark:text-white-100 hover:text-white-100 flex items-center justify-center">*/}
                                {/*    Hosting*/}
                                {/*  </a>*/}
                                {/*</li>*/}
                                {/*<li onMouseOver={closeDropdown} className="flex items-center justify-center hover:text-white-100 hover:bg-dark-600 hover:dark:text-white-600 px-2 py-1 mr-1 rounded-md">*/}
                                {/*    <a href="" className="dark:text-white-100 hover:text-white-100 flex items-center justify-center">*/}
                                {/*        Store*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                                {user && (
                                    <>
                                    <li className="invisible md:visible mr-1 ml-5 rounded-md list-none">
                                        <Menu>
                                            <MenuButton  className="px-3 py-2 dark:bg-dark-200 bg-gray-100 text-[12px] text-white-100 rounded-md flex items-center justify-center">
                                                <div
                                                    className="flex items-center rounded-full text-sm focus:bg-none focus:ring-0 dark:focus:ring-0 md:mr-0"
                                                    id="user-profile"
                                                    aria-expanded="false"
                                                    data-dropdown-toggle="navUserdata"
                                                >
                                                    <img
                                                        className="h-8 w-8 rounded-full"
                                                        src={user.picture || "/images/avatars/logo.png"}
                                                        alt="user photo"
                                                    />
                                                    <span className="ml-2 hidden text-left xl:block">
                                                        <span className="block dark:text-white text-sm text-black font-bold">{user.nickname}</span>
                                                        <span className="-mt-1 block text-sm font-medium dark:text-white text-gray-500"
                                                        >Balance: $0</span
                                                        >
                                                    </span>
                                                </div>
                                            </MenuButton>
                                            <MenuList __css={{zIndex: 10}} className="bg-white-100 dark:bg-dark-200 rounded-md text-center" minW={"160px"}>
                                                <MenuItem icon={<BiCog size={20} />} className="py-2 px-4 border-b dark:border-b-white-600" as={Link} href="/user/account/settings">Settings</MenuItem>
                                                <MenuItem icon={<BiEnvelope size={20} /> } className="py-2 px-4 border-b dark:border-b-white-600" as={Link} href="#">Invoices</MenuItem>
                                                <MenuItem icon={<BiLogOut size={20} />} className="py-2 px-4 text-red-500 dark:text-red-200" as={Link} href="#">Logout</MenuItem>
                                            </MenuList>
                                    </Menu>
                                  </li>
                                    {/* <li onMouseOver={closeDropdown}>
                                        <Link href="/user/account/settings" className="px-3 py-2 dark:bg-dark-200 bg-gray-100 text-[12px] text-white-100 rounded-md flex items-center justify-center">
                                            <div
                                                className="flex items-center rounded-full text-sm focus:bg-none focus:ring-0 dark:focus:ring-0 md:mr-0"
                                                id="user-profile"
                                                aria-expanded="false"
                                                data-dropdown-toggle="navUserdata"
                                            >
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src={user.picture || "/images/avatars/logo.png"}
                                                    alt="user photo"
                                                />
                                                <span className="ml-2 hidden text-left xl:block">
                                                    <span className="block font-medium dark:text-white text-xl text-black font-bold">{user.nickname}</span>
                                                    <span className="-mt-1 block text-sm font-medium dark:text-white text-gray-500"
                                                    >Balance: $0</span
                                                    >
                                                </span>
                                            </div>
                                        </Link>
                                    </li> */}
                                  </>
                                )}
                                {!user && (
                                    <li onMouseOver={closeDropdown} className="invisible md:visible  mr-1 ml-5 rounded-md list-none">
                                        <a href="" className="w-[100px] px-3 py-2 bg-blue-300 text-[12px] text-white-100 hover:scale-[1.1] transition-all rounded-md flex items-center justify-center">
                                            Get Started
                                        </a>
                                    </li>
                                )}
                                <MdOutlineLightMode onClick={toggleMode} className="dark:bg-blue-400 cursor-pointer bg-dark-100 text-[25px] text-white-100 p-1 rounded-[50%] ml-3 " />
                            </div>
                        </div>
                        {/*<ProductSection activeState={navbarName} closeDropdown={closeDropdown} />*/}
                        {/*<ServicesSection activeState={navbarName} closeDropdown={closeDropdown} />*/}
                        {/*<ResourcesSection activeState={navbarName} closeDropdown={closeDropdown} />*/}
                        {/*<CommunitySection activeState={navbarName} closeDropdown={closeDropdown} />*/}
                    </div>
                </div>

        </>
    )
}

export default ClientNavbar


function LogoSection({theme}: any){
    return (
        <>
            <Link href={"/"} className="flex items-center justify-center">
                <img src={"/assets/images/logo.png"} className="w-10" />
                <h1 className="text-[20px] font-bold text-dark-100 dark:text-white-100 ml-2">OpticEngine&nbsp;</h1>
                <h1 className="text-[20px] font-bold text-blue-200">LLC</h1>
            </Link>
        </>
    )
}

