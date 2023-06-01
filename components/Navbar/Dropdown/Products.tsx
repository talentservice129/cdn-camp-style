import {IoLogoBuffer} from "react-icons/io"
import {BsArrowRightShort} from "react-icons/bs"
import { MdForum } from "react-icons/md"
import { BiBookContent } from "react-icons/bi"
import { useEffect } from "react"
import Link from "next/link"



function ProductSection({activeState, closeDropdown}: any) {

    const STYLE  = activeState === "product" ? "h-[500px] dropdown-section" : " h-[0px] dropdown-section" 

    return (
        <div id="product-dropdown-section" onMouseLeave={closeDropdown} className={`w-full transition-all ${STYLE} absolute top-[6rem] mt-5 bg-white-100 dark:bg-dark-200 rounded-md shadow-md flex items-start z-50 justify-between overflow-hidden `}>
            <div className="w-[60%] h-full ">
                <div className="w-full flex items-start px-8 py-10 justify-between">
                    {/* Main Left > Left | Right Boxes */}
                    <ProductBoxSection />
                    <FeaturesBoxSection />
                </div>
            </div>
            <div className="w-[40%] h-full bg-white-500 flex flex-col items-start justify-start gap-2 py-10 px-10">
                <h1 className="dark:text-white-100 font-extrabold ">ENTERPRISE EDITION</h1>
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
                    Try the Enterprise Edition
                </button>
            </div>
        </div>
    )
}

export default ProductSection

function ProductBoxSection() {
    return (
        <div className="w-full z-50 flex flex-col items-start justify-start gap-3">
            <p className="dark:text-white-100 font-extrabold text-[13.5px] ">Products</p>

            <Link href="" id="box" target="_blank" rel="noopener noreferrer" className="main-navbar-box w-[260px] p-2 flex items-center justify-center hover:bg-white-500 dark:hover:bg-white-600 rounded-md ">

                <div id="left" className="w-auto p-1">
                    <BiBookContent className="text-[25px] text-current" />
                </div>
                <div id="right" className="w-auto p-1 flex flex-col items-start justify-start ">
                    <p className="dark:text-white-100 font-bold flex items-center justify-start">
                        CMS Engine
                        <BsArrowRightShort className='text-[20px] ml-2' id="info-box-icon" />
                    </p>
                    <span className="dark:text-white-300 text-white-400 font-light text-[13px]">Enterprise-Grade Scalable Content Management Software</span>
                </div>
            </Link>

            <div id="box" className="main-navbar-box w-[260px] p-2 flex items-center justify-center hover:bg-white-500 dark:hover:bg-white-600 rounded-md ">
                <div id="left" className="w-auto p-1">
                    <MdForum className="text-[25px] text-white-400 dark:text-white-300 " />
                </div>
                <div id="right" className="w-auto p-1 flex flex-col items-start justify-start ">
                    <p className="dark:text-white-100 font-bold flex items-center justify-start">
                        Forums Engine
                        <BsArrowRightShort className='text-[20px] ml-2' id="info-box-icon" />
                    </p>
                    <span className="dark:text-white-300 text-white-400 font-light text-[13px]">Community Forum Software for your growing community.</span>
                </div>
            </div>
        </div>
    )
}

function FeaturesBoxSection() {
    return (
        <div className="w-full flex flex-col items-start justify-start gap-3">
            <p className="dark:text-white-100 font-extrabold text-[13.5px] "></p>

            {/*<div id="box" className="main-navbar-box w-[260px] p-2 flex items-center justify-center hover:bg-white-500 dark:hover:bg-white-600 rounded-md ">*/}
            {/*    <div id="left" className="w-auto p-1">*/}
            {/*        <IoLogoBuffer className="text-[25px] text-white-400 dark:text-white-300 " />*/}
            {/*    </div>*/}
            {/*    <div id="right" className="w-auto p-1 flex flex-col items-start justify-start ">*/}
            {/*        <p className="dark:text-white-100 font-bold flex items-center justify-start">*/}
            {/*            Community Edition*/}
            {/*            <BsArrowRightShort className='text-[20px] ml-2' id="info-box-icon" />*/}
            {/*        </p>*/}
            {/*        <span className="dark:text-white-300 text-white-400 font-light text-[13px]">The leading headless Open-Source CMS</span>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div id="box" className="main-navbar-box w-[260px] p-2 flex items-center justify-center hover:bg-white-500 dark:hover:bg-white-600 rounded-md ">*/}
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
    )
}