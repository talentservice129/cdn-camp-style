import {IoLogoBuffer} from "react-icons/io"
import {BsArrowRightShort} from "react-icons/bs"
import {IoLogoGameControllerB} from "react-icons/io"
import {FaServer} from "react-icons/fa"
import Link from "next/link"

function ServicesSection({activeState, closeDropdown}: any) {

    const STYLE  = activeState === "solution" ? "h-[500px] dropdown-section" : " h-[0px] dropdown-section" 

    return (
        <div id="product-dropdown-section" onMouseLeave={closeDropdown} className={`w-full transition-all ${STYLE} absolute top-[6rem] mt-5 bg-white-100 dark:bg-dark-200 rounded-md shadow-md flex items-start justify-between z-50 overflow-hidden `}>
            <div className="w-[60%] h-full ">
                <div className="w-full flex items-start px-8 py-10 justify-between">
                    {/* Main Left > Left | Right Boxes */}
                    <SolutionBoxSection />
                    <FeaturesBoxSection />
                </div>
            </div>
            <div className="w-[40%] h-full bg-white-500 flex flex-col items-start justify-start gap-2 py-10 px-10">
                <h1 className="dark:text-white-100 font-extrabold ">HOW 1MINUS1 DELIVERED A CREATIVE WEBSITE FOR TURN10 STUDIOS 25% FASTER WITH STRAPI</h1>
                <br />
                <div className="w-[300px] h-[200px] rounded-md dropdown-box-image ">
                <style>{`
                .dropdown-box-image{
                    background-image:url("/assets/images/banner/banner.jpg");
                    background-size: cover;
                    background-position:center;
                }
                `}</style>
                </div>
                <br />
                <button className="w-[300px] px-4 py-3 rounded-md scale-[1] hover:scale-[1.1] transition-all bg-blue-300 text-white-100">
                    Discover Their Story
                </button>
            </div>
        </div>
    )
}


export default ServicesSection

function SolutionBoxSection() {
    return (
        <div className="w-full z-50 flex flex-col items-start justify-start gap-3">
            <p className="dark:text-white-100 font-extrabold text-[13.5px] ">Hosting</p>

            <Link href="/hosting/games" id="box" className="main-navbar-box w-[260px] p-2 flex items-center justify-center hover:bg-white-500 dark:hover:bg-white-600 rounded-md ">
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
            </Link>

            <Link href="/hosting/vps" id="box" className="main-navbar-box w-[260px] p-2 flex items-center justify-center hover:bg-white-500 dark:hover:bg-white-600 rounded-md ">
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
            </Link>

            <Link href="/hosting/dedicated" id="box" className="main-navbar-box w-[260px] p-2 flex items-center justify-center hover:bg-white-500 dark:hover:bg-white-600 rounded-md ">
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
            </Link>
        </div>
    )
}

function FeaturesBoxSection() {
    return (
        <div className="w-full flex flex-col items-start justify-start gap-3">
            <p className="dark:text-white-100 font-extrabold text-[13.5px] ">Web Development</p>

            <div id="box" className="main-navbar-box w-[260px] p-2 flex items-center justify-center hover:bg-white-500 dark:hover:bg-white-600 rounded-md ">
                <div id="left" className="w-auto p-1">
                    <IoLogoBuffer className="text-[25px] text-white-400 dark:text-white-300 " />
                </div>
                <div id="right" className="w-auto p-1 flex flex-col items-start justify-start ">
                    <p className="dark:text-white-100 font-bold flex items-center justify-start">
                        Frontend Development
                        <BsArrowRightShort className='text-[20px] ml-2' id="info-box-icon" />
                    </p>
                    <span className="dark:text-white-300 text-white-400 font-light text-[13px]">The leading headless Open-Source CMS</span>
                </div>
            </div>

            <div id="box" className="main-navbar-box w-[260px] p-2 flex items-center justify-center hover:bg-white-500 dark:hover:bg-white-600 rounded-md ">
                <div id="left" className="w-auto p-1">
                    <IoLogoBuffer className="text-[25px] text-white-400 dark:text-white-300 " />
                </div>
                <div id="right" className="w-auto p-1 flex flex-col items-start justify-start ">
                    <p className="dark:text-white-100 font-bold flex items-center justify-start">
                        Backend Development
                        <BsArrowRightShort className='text-[20px] ml-2' id="info-box-icon" />
                    </p>
                    <span className="dark:text-white-300 text-white-400 font-light text-[13px]">The leading headless Open-Source CMS</span>
                </div>
            </div>

            <div id="box" className="main-navbar-box w-[260px] p-2 flex items-center justify-center hover:bg-white-500 dark:hover:bg-white-600 rounded-md ">
                <div id="left" className="w-auto p-1">
                    <IoLogoBuffer className="text-[25px] text-white-400 dark:text-white-300 " />
                </div>
                <div id="right" className="w-auto p-1 flex flex-col items-start justify-start ">
                    <p className="dark:text-white-100 font-bold flex items-center justify-start">
                        Solutions Development
                        <BsArrowRightShort className='text-[20px] ml-2' id="info-box-icon" />
                    </p>
                    <span className="dark:text-white-300 text-white-400 font-light text-[13px]">The leading headless Open-Source CMS</span>
                </div>
            </div>
        </div>
    )
}