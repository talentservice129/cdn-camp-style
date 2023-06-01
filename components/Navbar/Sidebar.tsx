import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs';
import { IoLogoBuffer } from 'react-icons/io';
import {MdClose} from "react-icons/md"


function Sidebar({active, closeSidebar}: any) {

    const STYLE  = active ? "h-full sidebar-section px-5 py-10" : " h-0 sidebar-section px-0 py-0 " 

    const ClosedIconStyle = active ? "visible" : "hidden"

  return (
    <div className={`visible md:hidden w-full ${STYLE} fixed top-[-25px] left-0 bottom-0 flex flex-col items-center justify-start z-[20] overflow-hidden`}>
        <div id="sidebar-box" className="relative w-full h-full rounded-md dark:bg-dark-200 bg-white-100 shadow-md overflow-hidden">
            {/* close icon */}
            <button onClick={closeSidebar} className={`fixed top-[20px] right-[35px] flex items-center justify-center text-blue-400 cursor-pointer ${ClosedIconStyle} text-[30px] `}>
                <MdClose  />
            </button>

            {/* Product */}
            <div className="w-full flex flex-col items-start justify-start gap-3 px-4 py-4">
                <p className="dark:text-white-100 font-extrabold text-[13.5px] ">PRODUCTS</p>

                <div id="box" className="main-navbar-box w-full p-2 flex items-center justify-start hover:bg-white-500 dark:hover:bg-white-600 rounded-md ">
                    <div id="left" className="w-auto p-1">
                        <IoLogoBuffer className="text-[25px] text-white-400 dark:text-white-300 " />
                    </div>
                    <div id="right" className="w-auto p-1 flex flex-col items-start justify-start ">
                        <p className="dark:text-white-100 font-bold flex items-center justify-start">
                            CMS Engine
                            <BsArrowRightShort className='text-[20px] ml-2' id="info-box-icon" />
                        </p>
                        <span className="dark:text-white-300 text-white-400 font-light text-[13px]">Enterprise-Grade Scalable Content Management Software</span>
                    </div>
                </div>

                <div id="box" className="main-navbar-box w-full p-2 flex items-center justify-start hover:bg-white-500 dark:hover:bg-white-600 rounded-md ">
                    <div id="left" className="w-auto p-1">
                        <IoLogoBuffer className="text-[25px] text-white-400 dark:text-white-300 " />
                    </div>
                    <div id="right" className="w-auto p-1 flex flex-col items-start justify-start ">
                        <p className="dark:text-white-100 font-bold flex items-center justify-start">
                            Forums Engine
                            <BsArrowRightShort className='text-[20px] ml-2' id="info-box-icon" />
                        </p>
                        <span className="dark:text-white-300 text-white-400 font-light text-[13px]">Community Forum Software for your growing community.</span>
                    </div>
                </div>

                {/*<div id="box" className="main-navbar-box w-full p-2 flex items-center justify-start hover:bg-white-500 dark:hover:bg-white-600 rounded-md ">*/}
                {/*    <div id="left" className="w-auto p-1">*/}
                {/*        <IoLogoBuffer className="text-[25px] text-white-400 dark:text-white-300 " />*/}
                {/*    </div>*/}
                {/*    <div id="right" className="w-auto p-1 flex flex-col items-start justify-start ">*/}
                {/*        <p className="dark:text-white-100 font-bold flex items-center justify-start">*/}
                {/*            Enterprice Edition*/}
                {/*            <BsArrowRightShort className='text-[20px] ml-2' id="info-box-icon" />*/}
                {/*        </p>*/}
                {/*        <span className="dark:text-white-300 text-white-400 font-light text-[13px]">The leading headless Open-Source CMS</span>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div id="box" className="main-navbar-box w-full p-2 flex items-center justify-start hover:bg-white-500 dark:hover:bg-white-600 rounded-md ">*/}
                {/*    <div id="left" className="w-auto p-1">*/}
                {/*        <IoLogoBuffer className="text-[25px] text-white-400 dark:text-white-300 " />*/}
                {/*    </div>*/}
                {/*    <div id="right" className="w-auto p-1 flex flex-col items-start justify-start ">*/}
                {/*        <p className="dark:text-white-100 font-bold flex items-center justify-start">*/}
                {/*            Enterprice Edition*/}
                {/*            <BsArrowRightShort className='text-[20px] ml-2' id="info-box-icon" />*/}
                {/*        </p>*/}
                {/*        <span className="dark:text-white-300 text-white-400 font-light text-[13px]">The leading headless Open-Source CMS</span>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div id="box" className="main-navbar-box w-full p-2 flex items-center justify-start hover:bg-white-500 dark:hover:bg-white-600 rounded-md ">*/}
                {/*    <div id="left" className="w-auto p-1">*/}
                {/*        <IoLogoBuffer className="text-[25px] text-white-400 dark:text-white-300 " />*/}
                {/*    </div>*/}
                {/*    <div id="right" className="w-auto p-1 flex flex-col items-start justify-start ">*/}
                {/*        <p className="dark:text-white-100 font-bold flex items-center justify-start">*/}
                {/*            Enterprice Edition*/}
                {/*            <BsArrowRightShort className='text-[20px] ml-2' id="info-box-icon" />*/}
                {/*        </p>*/}
                {/*        <span className="dark:text-white-300 text-white-400 font-light text-[13px]">The leading headless Open-Source CMS</span>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>

            {/* Solutions */}
            <div className="w-full flex flex-col items-start justify-start gap-3 px-4 py-4">
                <p className="dark:text-white-100 font-extrabold text-[13.5px] ">Services</p>

                <div id="box" className="main-navbar-box w-full p-2 flex items-center justify-start hover:bg-white-500 dark:hover:bg-white-600 rounded-md ">
                    <div id="left" className="w-auto p-1">
                        <IoLogoBuffer className="text-[25px] text-white-400 dark:text-white-300 " />
                    </div>
                    <div id="right" className="w-auto p-1 flex flex-col items-start justify-start ">
                        <p className="dark:text-white-100 font-bold flex items-center justify-start">
                            Game Servers
                            <BsArrowRightShort className='text-[20px] ml-2' id="info-box-icon" />
                        </p>
                        <span className="dark:text-white-300 text-white-400 font-light text-[13px]">Powerful Game Hosting for your everyday needs.</span>
                    </div>
                </div>

                <div id="box" className="main-navbar-box w-full p-2 flex items-center justify-start hover:bg-white-500 dark:hover:bg-white-600 rounded-md ">
                    <div id="left" className="w-auto p-1">
                        <IoLogoBuffer className="text-[25px] text-white-400 dark:text-white-300 " />
                    </div>
                    <div id="right" className="w-auto p-1 flex flex-col items-start justify-start ">
                        <p className="dark:text-white-100 font-bold flex items-center justify-start">
                            VPS Servers
                            <BsArrowRightShort className='text-[20px] ml-2' id="info-box-icon" />
                        </p>
                        <span className="dark:text-white-300 text-white-400 font-light text-[13px]">Extremely Fast & Reliable Virtual Private Servers.</span>
                    </div>
                </div>

                <div id="box" className="main-navbar-box w-full p-2 flex items-center justify-start hover:bg-white-500 dark:hover:bg-white-600 rounded-md ">
                    <div id="left" className="w-auto p-1">
                        <IoLogoBuffer className="text-[25px] text-white-400 dark:text-white-300 " />
                    </div>
                    <div id="right" className="w-auto p-1 flex flex-col items-start justify-start ">
                        <p className="dark:text-white-100 font-bold flex items-center justify-start">
                            Dedicated Servers
                            <BsArrowRightShort className='text-[20px] ml-2' id="info-box-icon" />
                        </p>
                        <span className="dark:text-white-300 text-white-400 font-light text-[13px]">Powerful & Private Dedicated Machines at your disposal.</span>
                    </div>
                </div>

                <div id="box" className="main-navbar-box w-full p-2 flex items-center justify-start hover:bg-white-500 dark:hover:bg-white-600 rounded-md ">
                    <div id="left" className="w-auto p-1">
                        <IoLogoBuffer className="text-[25px] text-white-400 dark:text-white-300 " />
                    </div>
                    <div id="right" className="w-auto p-1 flex flex-col items-start justify-start ">
                        <p className="dark:text-white-100 font-bold flex items-center justify-start">
                            Frontend Development
                            <BsArrowRightShort className='text-[20px] ml-2' id="info-box-icon" />
                        </p>
                        <span className="dark:text-white-300 text-white-400 font-light text-[13px]">Powerful & Private Dedicated Machines at your disposal.</span>
                    </div>
                </div>
                <div id="box" className="main-navbar-box w-full p-2 flex items-center justify-start hover:bg-white-500 dark:hover:bg-white-600 rounded-md ">
                    <div id="left" className="w-auto p-1">
                        <IoLogoBuffer className="text-[25px] text-white-400 dark:text-white-300 " />
                    </div>
                    <div id="right" className="w-auto p-1 flex flex-col items-start justify-start ">
                        <p className="dark:text-white-100 font-bold flex items-center justify-start">
                            Backend Development
                            <BsArrowRightShort className='text-[20px] ml-2' id="info-box-icon" />
                        </p>
                        <span className="dark:text-white-300 text-white-400 font-light text-[13px]">Powerful & Private Dedicated Machines at your disposal.</span>
                    </div>
                </div>
                <div id="box" className="main-navbar-box w-full p-2 flex items-center justify-start hover:bg-white-500 dark:hover:bg-white-600 rounded-md ">
                    <div id="left" className="w-auto p-1">
                        <IoLogoBuffer className="text-[25px] text-white-400 dark:text-white-300 " />
                    </div>
                    <div id="right" className="w-auto p-1 flex flex-col items-start justify-start ">
                        <p className="dark:text-white-100 font-bold flex items-center justify-start">
                            Solutions Development
                            <BsArrowRightShort className='text-[20px] ml-2' id="info-box-icon" />
                        </p>
                        <span className="dark:text-white-300 text-white-400 font-light text-[13px]">Powerful & Private Dedicated Machines at your disposal.</span>
                    </div>
                </div>
            </div>

            {/*/!* Resources *!/*/}
            {/*<div className="w-full flex flex-col items-start justify-start gap-3 px-4 py-4">*/}
            {/*    <p className="dark:text-white-100 font-extrabold text-[13.5px] ">RESOURCES</p>*/}

            {/*    <div id="box" className="main-navbar-box w-full p-2 flex items-center justify-start hover:bg-white-500 dark:hover:bg-white-600 rounded-md ">*/}
            {/*        <div id="left" className="w-auto p-1">*/}
            {/*            <IoLogoBuffer className="text-[25px] text-white-400 dark:text-white-300 " />*/}
            {/*        </div>*/}
            {/*        <div id="right" className="w-auto p-1 flex flex-col items-start justify-start ">*/}
            {/*            <p className="dark:text-white-100 font-bold flex items-center justify-start">*/}
            {/*                Community Edition*/}
            {/*                <BsArrowRightShort className='text-[20px] ml-2' id="info-box-icon" />*/}
            {/*            </p>*/}
            {/*            <span className="dark:text-white-300 text-white-400 font-light text-[13px]">The leading headless Open-Source CMS</span>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <div id="box" className="main-navbar-box w-full p-2 flex items-center justify-start hover:bg-white-500 dark:hover:bg-white-600 rounded-md ">*/}
            {/*        <div id="left" className="w-auto p-1">*/}
            {/*            <IoLogoBuffer className="text-[25px] text-white-400 dark:text-white-300 " />*/}
            {/*        </div>*/}
            {/*        <div id="right" className="w-auto p-1 flex flex-col items-start justify-start ">*/}
            {/*            <p className="dark:text-white-100 font-bold flex items-center justify-start">*/}
            {/*                Market Place*/}
            {/*                <BsArrowRightShort className='text-[20px] ml-2' id="info-box-icon" />*/}
            {/*            </p>*/}
            {/*            <span className="dark:text-white-300 text-white-400 font-light text-[13px]">The leading headless Open-Source CMS</span>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <div id="box" className="main-navbar-box w-full p-2 flex items-center justify-start hover:bg-white-500 dark:hover:bg-white-600 rounded-md ">*/}
            {/*        <div id="left" className="w-auto p-1">*/}
            {/*            <IoLogoBuffer className="text-[25px] text-white-400 dark:text-white-300 " />*/}
            {/*        </div>*/}
            {/*        <div id="right" className="w-auto p-1 flex flex-col items-start justify-start ">*/}
            {/*            <p className="dark:text-white-100 font-bold flex items-center justify-start">*/}
            {/*                Enterprice Edition*/}
            {/*                <BsArrowRightShort className='text-[20px] ml-2' id="info-box-icon" />*/}
            {/*            </p>*/}
            {/*            <span className="dark:text-white-300 text-white-400 font-light text-[13px]">The leading headless Open-Source CMS</span>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <div id="box" className="main-navbar-box w-full p-2 flex items-center justify-start hover:bg-white-500 dark:hover:bg-white-600 rounded-md ">*/}
            {/*        <div id="left" className="w-auto p-1">*/}
            {/*            <IoLogoBuffer className="text-[25px] text-white-400 dark:text-white-300 " />*/}
            {/*        </div>*/}
            {/*        <div id="right" className="w-auto p-1 flex flex-col items-start justify-start ">*/}
            {/*            <p className="dark:text-white-100 font-bold flex items-center justify-start">*/}
            {/*                Enterprice Edition*/}
            {/*                <BsArrowRightShort className='text-[20px] ml-2' id="info-box-icon" />*/}
            {/*            </p>*/}
            {/*            <span className="dark:text-white-300 text-white-400 font-light text-[13px]">The leading headless Open-Source CMS</span>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <div id="box" className="main-navbar-box w-full p-2 flex items-center justify-start hover:bg-white-500 dark:hover:bg-white-600 rounded-md ">*/}
            {/*        <div id="left" className="w-auto p-1">*/}
            {/*            <IoLogoBuffer className="text-[25px] text-white-400 dark:text-white-300 " />*/}
            {/*        </div>*/}
            {/*        <div id="right" className="w-auto p-1 flex flex-col items-start justify-start ">*/}
            {/*            <p className="dark:text-white-100 font-bold flex items-center justify-start">*/}
            {/*                Enterprice Edition*/}
            {/*                <BsArrowRightShort className='text-[20px] ml-2' id="info-box-icon" />*/}
            {/*            </p>*/}
            {/*            <span className="dark:text-white-300 text-white-400 font-light text-[13px]">The leading headless Open-Source CMS</span>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/* Community */}
            <div className="w-full flex flex-col items-start justify-start gap-3 px-4 py-4">
                <p className="dark:text-white-100 font-extrabold text-[13.5px] ">COMMUNITY</p>

                <div id="box" className="main-navbar-box w-full p-2 flex items-center justify-start hover:bg-white-500 dark:hover:bg-white-600 rounded-md ">
                    <div id="left" className="w-auto p-1">
                        <IoLogoBuffer className="text-[25px] text-white-400 dark:text-white-300 " />
                    </div>
                    <div id="right" className="w-auto p-1 flex flex-col items-start justify-start ">
                        <p className="dark:text-white-100 font-bold flex items-center justify-start">
                            Our Discord Server
                            <BsArrowRightShort className='text-[20px] ml-2' id="info-box-icon" />
                        </p>
                        <span className="dark:text-white-300 text-white-400 font-light text-[13px]">Our Community Discord Server.</span>
                    </div>
                </div>

                <div id="box" className="main-navbar-box w-full p-2 flex items-center justify-start hover:bg-white-500 dark:hover:bg-white-600 rounded-md ">
                    <div id="left" className="w-auto p-1">
                        <IoLogoBuffer className="text-[25px] text-white-400 dark:text-white-300 " />
                    </div>
                    <div id="right" className="w-auto p-1 flex flex-col items-start justify-start ">
                        <p className="dark:text-white-100 font-bold flex items-center justify-start">
                            Market Place
                            <BsArrowRightShort className='text-[20px] ml-2' id="info-box-icon" />
                        </p>
                        <span className="dark:text-white-300 text-white-400 font-light text-[13px]">Community Marketplace for all OpticEngine Clients</span>
                    </div>
                </div>

                <div id="box" className="main-navbar-box w-full p-2 flex items-center justify-start hover:bg-white-500 dark:hover:bg-white-600 rounded-md ">
                    <div id="left" className="w-auto p-1">
                        <IoLogoBuffer className="text-[25px] text-white-400 dark:text-white-300 " />
                    </div>
                    <div id="right" className="w-auto p-1 flex flex-col items-start justify-start ">
                        <p className="dark:text-white-100 font-bold flex items-center justify-start">
                            Contact Us
                            <BsArrowRightShort className='text-[20px] ml-2' id="info-box-icon" />
                        </p>
                        <span className="dark:text-white-300 text-white-400 font-light text-[13px]">We’re here to help and answer any question you might have, We look forward to hearing from you 🙂</span>
                    </div>
                </div>

                <div id="box" className="main-navbar-box w-full p-2 flex items-center justify-start hover:bg-white-500 dark:hover:bg-white-600 rounded-md ">
                    <div id="left" className="w-auto p-1">
                        <IoLogoBuffer className="text-[25px] text-white-400 dark:text-white-300 " />
                    </div>
                    <div id="right" className="w-auto p-1 flex flex-col items-start justify-start ">
                        <p className="dark:text-white-100 font-bold flex items-center justify-start">
                            Events
                            <BsArrowRightShort className='text-[20px] ml-2' id="info-box-icon" />
                        </p>
                        <span className="dark:text-white-300 text-white-400 font-light text-[13px]">Upcoming and On-Demand Events</span>
                    </div>
                </div>

                <div id="box" className="main-navbar-box w-full p-2 flex items-center justify-start hover:bg-white-500 dark:hover:bg-white-600 rounded-md ">
                    <div id="left" className="w-auto p-1">
                        <IoLogoBuffer className="text-[25px] text-white-400 dark:text-white-300 " />
                    </div>
                    <div id="right" className="w-auto p-1 flex flex-col items-start justify-start ">
                        <p className="dark:text-white-100 font-bold flex items-center justify-start">
                            OpticConf
                            <BsArrowRightShort className='text-[20px] ml-2' id="info-box-icon" />
                        </p>
                        <span className="dark:text-white-300 text-white-400 font-light text-[13px]">Learn about our annual online conference.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar