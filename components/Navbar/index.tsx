import React,{useState, useEffect} from 'react'
import { useTheme } from 'next-themes';
import TopBar from './TopBar';
import {RxCaretDown} from "react-icons/rx"
import ProductSection from './Dropdown/Products';
import ResourcesSection from './Dropdown/Resources';
import CommunitySection from './Dropdown/Community';
import Sidebar from './Sidebar';
import {GiHamburgerMenu} from "react-icons/gi"
import { MdOutlineLightMode } from 'react-icons/md';
import ServicesSection from "./Dropdown/Services";
import Link from 'next/link';
import { useRouter } from 'next/router';
import BillingBar from "./BillingBar";
import { useUser } from '@auth0/nextjs-auth0/client';

function Navbar() {
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
  // useEffect(() => { setTheme("dark") }, [theme]);
  useEffect(() => {
    if(router.pathname.includes("hosting")) setNavbarType(navbarTypes.hosting)
    if(!router.pathname.includes("hosting")) setNavbarType(navbarTypes.corporate)
  }, [router.pathname])
  if (!mounted) return null;

  const toggleMode = () => {
    if (theme === "light") {
      return setTheme("dark")
    }
    setTheme("light")
  }

  const toggleSideBar = ()=>setSidebar(!sidebar)
  
  return (
    <>
      { /* create a switch statement that renders html based on the navbarTypes */}
        {navbarType === navbarTypes.corporate && (
            <div className="relatvie w-full h-auto flex flex-row items-center justify-center shadow-sm dark:bg-[rgba(0,0,0,0.05)] ">
              {/* Sidebar Section */}
              <div className="visible md:hidden w-auto flex items-center justify-start absolute top-[15px] right-5 gap-5 z-[2] ">
                <MdOutlineLightMode onClick={toggleMode} className="dark:bg-blue-400 cursor-pointer bg-dark-100 text-[25px] text-white-100 p-1 rounded-[50%] ml-3 " />
                <button onClick={toggleSideBar} id="harmbugger-menu" className="px-3 py-1 cursor-pointer bg-blue-300 text-[12px] text-white-100 hover:scale-[1.1] transition-all rounded-md flex items-center justify-center shadow-md ">
                  <GiHamburgerMenu className='text-[25px]' />
                </button>
              </div>
              <Sidebar active={sidebar} closeSidebar={toggleSideBar} />
              {/* Sidebar End Section */}
              <div className="relative h-auto  w-full md:w-[90%] lg:w-[83.3%]">
                <TopBar toggleMode={toggleMode} />
                <div className="w-full h-auto flex items-center justify-between mb-2 mt-3 px-4">
                  <LogoSection theme={theme} />
                  <div className="w-auto hidden lg:flex items-center justify-center ml-9">
                    <li onMouseOver={()=>openDropdown("product")} className="flex items-center justify-center hover:text-white-100 hover:bg-dark-600 hover:dark:text-white-600 px-2 py-1 mr-1 rounded-md">
                      <a href="" className="dark:text-white-100 flex items-center justify-center">
                        Products
                        <RxCaretDown className='ml-2' />
                      </a>
                    </li>
                    <li onMouseOver={()=>openDropdown("solution")} className="flex items-center justify-center hover:text-white-100 hover:bg-dark-600 hover:dark:text-white-600 px-2 py-1 mr-1 rounded-md">
                      <a href="" className="dark:text-white-100 hover:text-white-100 flex items-center justify-center">
                        Services
                        <RxCaretDown className='ml-2' />
                      </a>
                    </li>
                    {/*<li onMouseOver={()=>openDropdown("resources")} className="flex items-center justify-center hover:text-white-100 hover:bg-dark-600 hover:dark:text-white-600 px-2 py-1 mr-1 rounded-md">*/}
                    {/*  <a href="" className="dark:text-white-100 hover:text-white-100 flex items-center justify-center">*/}
                    {/*    Resources*/}
                    {/*    <RxCaretDown className='ml-2' />*/}
                    {/*  </a>*/}
                    {/*</li>*/}
                    <li onMouseOver={()=>openDropdown("community")} className="flex items-center justify-center hover:text-white-100 hover:bg-dark-600 hover:dark:text-white-600 px-2 py-1 mr-1 rounded-md">
                      <a href="" className="dark:text-white-100 hover:text-white-100 flex items-center justify-center">
                        Community
                        <RxCaretDown className='ml-2' />
                      </a>
                    </li>
                    {/*<li onMouseOver={closeDropdown} className="flex items-center justify-center hover:text-white-100 hover:bg-dark-600 hover:dark:text-white-600 px-2 py-1 mr-1 rounded-md">*/}
                    {/*  <a href="" className="dark:text-white-100 hover:text-white-100 flex items-center justify-center">*/}
                    {/*    Hosting*/}
                    {/*  </a>*/}
                    {/*</li>*/}
                    <li className="flex items-center justify-center hover:text-white-100 hover:bg-dark-600 hover:dark:text-white-600 px-2 py-1 mr-1 rounded-md">
                      <a href="" className="dark:text-white-100 hover:text-white-100 flex items-center justify-center">
                        About US
                      </a>
                    </li>
                  </div>
                </div>
                <ProductSection activeState={navbarName} closeDropdown={closeDropdown} />
                <ServicesSection activeState={navbarName} closeDropdown={closeDropdown} />
                <ResourcesSection activeState={navbarName} closeDropdown={closeDropdown} />
                <CommunitySection activeState={navbarName} closeDropdown={closeDropdown} />
              </div>
            </div>
        )}

        {navbarType === navbarTypes.hosting && (
            <div className="relatvie w-full h-auto flex flex-row items-center justify-center shadow-sm dark:bg-[rgba(0,0,0,0.05)] ">
              {/* Sidebar Section */}
              <div className="visible md:hidden w-auto flex items-center justify-start absolute top-[15px] right-5 gap-5 z-[2] ">
                <MdOutlineLightMode onClick={toggleMode} className="dark:bg-blue-400 cursor-pointer bg-dark-100 text-[25px] text-white-100 p-1 rounded-[50%] ml-3 " />
                <button onClick={toggleSideBar} id="harmbugger-menu" className="px-3 py-1 cursor-pointer bg-blue-300 text-[12px] text-white-100 hover:scale-[1.1] transition-all rounded-md flex items-center justify-center shadow-md ">
                  <GiHamburgerMenu className='text-[25px]' />
                </button>
              </div>
              <Sidebar active={sidebar} closeSidebar={toggleSideBar} />
              {/* Sidebar End Section */}
              <div className="relative h-auto w-full md:w-[90%] lg:w-[83.3%]">
                <BillingBar toggleMode={toggleMode} />
                <div className="w-full h-auto flex items-center justify-between mb-2 mt-3 px-4">
                  <LogoSection theme={theme} />
                  <div className="w-auto hidden lg:flex items-center justify-center ml-9">
                    <li className="flex items-center justify-center hover:text-white-100 hover:bg-dark-600 hover:dark:text-white-600 px-2 py-1 mr-1 rounded-md">
                      <a href="" className="dark:text-white-100 flex items-center justify-center">
                        Products
                        <RxCaretDown className='ml-2' />
                      </a>
                    </li>
                    <li className="flex items-center justify-center hover:text-white-100 hover:bg-dark-600 hover:dark:text-white-600 px-2 py-1 mr-1 rounded-md">
                      <a href="" className="dark:text-white-100 hover:text-white-100 flex items-center justify-center">
                        Services
                        <RxCaretDown className='ml-2' />
                      </a>
                    </li>
                    {/*<li onMouseOver={()=>openDropdown("resources")} className="flex items-center justify-center hover:text-white-100 hover:bg-dark-600 hover:dark:text-white-600 px-2 py-1 mr-1 rounded-md">*/}
                    {/*  <a href="" className="dark:text-white-100 hover:text-white-100 flex items-center justify-center">*/}
                    {/*    Resources*/}
                    {/*    <RxCaretDown className='ml-2' />*/}
                    {/*  </a>*/}
                    {/*</li>*/}
                    <li className="flex items-center justify-center hover:text-white-100 hover:bg-dark-600 hover:dark:text-white-600 px-2 py-1 mr-1 rounded-md">
                      <a href="" className="dark:text-white-100 hover:text-white-100 flex items-center justify-center">
                        Community
                        <RxCaretDown className='ml-2' />
                      </a>
                    </li>
                    {/*<li onMouseOver={closeDropdown} className="flex items-center justify-center hover:text-white-100 hover:bg-dark-600 hover:dark:text-white-600 px-2 py-1 mr-1 rounded-md">*/}
                    {/*  <a href="" className="dark:text-white-100 hover:text-white-100 flex items-center justify-center">*/}
                    {/*    Hosting*/}
                    {/*  </a>*/}
                    {/*</li>*/}
                    <li className="flex items-center justify-center hover:text-white-100 hover:bg-dark-600 hover:dark:text-white-600 px-2 py-1 mr-1 rounded-md">
                      <a href="" className="dark:text-white-100 hover:text-white-100 flex items-center justify-center">
                        Store
                      </a>
                    </li>
                    <li onMouseOver={closeDropdown} className="invisible md:visible ml-5 rounded-md list-none">
                      <Link href="/api/auth/login" className="w-[100px] px-3 py-2 bg-green-300 text-[12px] text-white-100 hover:scale-[1.1] transition-all rounded-md flex items-center justify-center">
                        Login
                      </Link>
                    </li>
                    <li onMouseOver={closeDropdown} className="invisible md:visible ml-2 rounded-md list-none">
                      <Link href="/api/auth/register" className="w-[100px] px-3 py-2 bg-blue-300 text-[12px] text-white-100 hover:scale-[1.1] transition-all rounded-md flex items-center justify-center">
                        Register
                      </Link>
                    </li>
                  </div>
                </div>
                <ProductSection activeState={navbarName} closeDropdown={closeDropdown} />
                <ServicesSection activeState={navbarName} closeDropdown={closeDropdown} />
                <ResourcesSection activeState={navbarName} closeDropdown={closeDropdown} />
                <CommunitySection activeState={navbarName} closeDropdown={closeDropdown} />
              </div>
            </div>
        )}

  </>
  )
}

export default Navbar


function LogoSection({theme}: any){
  return (
    <>
        <Link href={"/"} className="flex items-center justify-center">
            <img src={"/assets/images/logo.png"} className="w-10" />
            <h1 className="text-[20px] font-bold text-dark-100 dark:text-white-100 ml-2">Rivage&nbsp;</h1>
            <h1 className="text-[20px] font-bold text-blue-200">CDN</h1>
        </Link>
    </>
  )
}

