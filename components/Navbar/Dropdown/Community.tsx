import {BsDiscord, BsCalendar3 } from "react-icons/bs"
import { IoLogoBuffer, IoStorefront } from "react-icons/io5"
import { IoIosContact } from "react-icons/io"
import { HiOutlineUserGroup } from "react-icons/hi"
import {BsArrowRightShort} from "react-icons/bs"
import { useEffect } from "react"
import Link from "next/link"



function CommunitySection({activeState, closeDropdown}: any) {

    const STYLE  = activeState === "community" ? "h-[500px] dropdown-section" : " h-[0px] dropdown-section" 
    return (
        <div id="product-dropdown-section" onMouseLeave={closeDropdown} className={`w-full transition-all ${STYLE} absolute top-[6rem] z-50 mt-5 bg-white-100 dark:bg-dark-200 rounded-md shadow-md flex items-start justify-between overflow-hidden `}>
            <div className="w-[60%] h-auto ">
                <div className="w-full flex items-start px-8 py-10 justify-between">
                    {/* Main Left > Left | Right Boxes */}
                    <CommunityBoxSection />
                    <FeaturesBoxSection />
                </div>
                <div className="w-full flex flex-nowrap items-start px-8 py-4 justify-between">
                    <p className="dark:text-white-100 font-extrabold text-[13.5px] ">CONNECT WITH US</p>
                    {/* Generate a list of Social Icon Svgs including Discord, Facebook, Twitter, LinkedIn, Instagram, TikTok */}
                    <div className="flex items-center justify-center gap-3">

                    </div>
                </div>
            </div>
            <div className="w-[40%] h-full bg-white-500 flex flex-col items-start justify-start gap-2 py-10 px-10">
                <h1 className="dark:text-white-100 font-extrabold ">THE ANNUAL USER CONFERENCE FOR THE STRAPI COMMUNITY</h1>
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
                    Watch Now
                </button>
            </div>
        </div>
    )
}

export default CommunitySection

function CommunityBoxSection() {
    return (
        <div className="w-full z-50 flex flex-col items-start justify-start gap-3">
            <p className="dark:text-white-100 font-extrabold text-[13.5px] ">COMMUNITY</p>

            <Link href="https://discord.gg/opticengine" id="box" target="_blank" rel="noopener noreferrer" className="main-navbar-box w-[260px] p-2 flex items-center justify-center hover:bg-white-500 dark:hover:bg-white-600 rounded-md ">

                <div id="left" className="w-auto p-1">
                    <BsDiscord className="text-[25px] text-current" />
                </div>
                <div id="right" className="w-auto p-1 flex flex-col items-start justify-start ">
                    <p className="dark:text-white-100 font-bold flex items-center justify-start">
                        Our Discord Server
                        <BsArrowRightShort className='text-[20px] ml-2' id="info-box-icon" />
                    </p>
                    <span className="dark:text-white-300 text-white-400 font-light text-[13px]">Our Community Discord Server.</span>
                </div>
            </Link>

            <div id="box" className="main-navbar-box w-[260px] p-2 flex items-center justify-center hover:bg-white-500 dark:hover:bg-white-600 rounded-md ">
                <div id="left" className="w-auto p-1">
                    <IoStorefront className="text-[25px] text-white-400 dark:text-white-300 " />
                </div>
                <div id="right" className="w-auto p-1 flex flex-col items-start justify-start ">
                    <p className="dark:text-white-100 font-bold flex items-center justify-start">
                        Our Partners
                        <BsArrowRightShort className='text-[20px] ml-2' id="info-box-icon" />
                    </p>
                    <span className="dark:text-white-300 text-white-400 font-light text-[13px]">Our OpticEngine Partners who we work with closely. </span>
                </div>
            </div>

            <Link href="/contact" id="box" className="main-navbar-box w-[260px] p-2 flex items-center justify-center hover:bg-white-500 dark:hover:bg-white-600 rounded-md ">
                <div id="left" className="w-auto p-1">
                    <IoIosContact className="text-[25px] text-white-400 dark:text-white-300 " />
                </div>
                <div id="right" className="w-auto p-1 flex flex-col items-start justify-start ">
                    <p className="dark:text-white-100 font-bold flex items-center justify-start">
                        Contact Us
                        <BsArrowRightShort className='text-[20px] ml-2' id="info-box-icon" />
                    </p>
                    <span className="dark:text-white-300 text-white-400 font-light text-[13px]">We’re here to help and answer any question you might have, We look forward to hearing from you 🙂
</span>
                </div>
            </Link>
        </div>
    )
}

function FeaturesBoxSection() {
    return (
        <div className="w-full flex flex-col items-start justify-start gap-3">
            <p className="dark:text-white-100 font-extrabold text-[13.5px] ">EVENTS</p>

            <div id="box" className="main-navbar-box w-[260px] p-2 flex items-center justify-center hover:bg-white-500 dark:hover:bg-white-600 rounded-md ">
                <div id="left" className="w-auto p-1">
                    <BsCalendar3 className="text-[25px] text-white-400 dark:text-white-300 " />
                </div>
                <div id="right" className="w-auto p-1 flex flex-col items-start justify-start ">
                    <p className="dark:text-white-100 font-bold flex items-center justify-start">
                        Events
                        <BsArrowRightShort className='text-[20px] ml-2' id="info-box-icon" />
                    </p>
                    <span className="dark:text-white-300 text-white-400 font-light text-[13px]">Upcoming and On-Demand Events</span>
                </div>
            </div>

            <div id="box" className="main-navbar-box w-[260px] p-2 flex items-center justify-center hover:bg-white-500 dark:hover:bg-white-600 rounded-md ">
                <div id="left" className="w-auto p-1">
                    <HiOutlineUserGroup className="text-[25px] text-white-400 dark:text-white-300 " />
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
    )
}