import React, { useState, useEffect } from 'react'
import { HiOutlineLocationMarker } from "react-icons/hi"
import { IoMdCall } from "react-icons/io"
import { ImFacebook, ImLinkedin2 } from "react-icons/im"
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai"
import { MdOutlineLightMode } from "react-icons/md"
import { BsDiscord } from "react-icons/bs"
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { FiShoppingCart } from 'react-icons/fi'


function BillingBar({toggleMode}: any) {

    return (
        <div>

            <div className="hidden w-full h-[25px] mt-4 items-center lg:flex justify-end">
                <ul className="flex justify-end">

                    <li className="hidden md:flex py-0 items-center justify-center px-[10px] ">
                        <HiOutlineLocationMarker className="dark:text-white-200 text-[17px] mr-2 " />
                        <p className="dark:text-white-100 px-3 border-r border-solid border-1 dark:marker:border-white-400 text-[12px]">Delaware, USA</p>
                    </li>

                    <li className="hidden md:flex py-0 items-center justify-center px-[10px]">
                        <IoMdCall className="dark:text-white-200 text-[15px] mr-2 " />
                        <p className="dark:text-white-100 px-3 border-r border-solid border-1 dark:marker:border-white-400 text-[12px]">+09 662 347 773</p>
                    </li>
                    <SocialsIcon toggleMode={toggleMode} />
                </ul>
            </div>
        </div>
    )
}

export default BillingBar




function SocialsIcon({ toggleMode }: any) {
    return (
        <>
            <li className="flex items-center justify-center ml-3">
                <Link href="https://discord.gg/opticengine" target="_blank" rel="noopener noreferrer">
                    <BsDiscord className="dark:text-white-200 text-[14px] m-3 " />
                </Link>
                <Link href="https://www.facebook.com/opticengine" target="_blank" rel="noopener noreferrer">
                    <ImFacebook className="dark:text-white-200 text-[14px] m-3 " />
                </Link>
                <Link href="" target="_blank" rel="noopener noreferrer">
                    <AiOutlineTwitter className="dark:text-white-200 text-[14px] m-3 " />
                </Link>
                <Link href="https://www.linkedin.com/company/opticengine" target="_blank" rel="noopener noreferrer">
                    <ImLinkedin2 className="dark:text-white-200 text-[14px] m-3 " />
                </Link>
            </li>
        </>
    )
}