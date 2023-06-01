import React from 'react';
import { AiFillTool, AiOutlineMacCommand } from 'react-icons/ai';
import { BiCommand, BiMicrochip } from 'react-icons/bi';
import { BsWordpress, BsShieldShaded } from 'react-icons/bs';
import { FaGlobeEurope, FaMemory, FaSitemap, FaUser } from 'react-icons/fa';
import { FiHardDrive } from 'react-icons/fi';
import { MdOutlineCloudUpload, MdStorage } from 'react-icons/md';
import { RxReload } from 'react-icons/rx';

const MCLineUpsSection = () => {
    return (
        <section className="py-12 md:py-28">
            <div className="container mx-auto px-4">
                <div className="heading text-center mb-16">
                    <h2 className="h2 mb-4 text-4xl md:text-4xl font-extrabold dark:text-white-100 text-black tracking-tight text-center">Three tiers of Minecraft Hosting Performance</h2>
                </div>

                <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-[30px] dark:bg-dark-200 dark:text-white-100 bg-white-200 text-dark-100 py-10 px-6 leading-relaxed flex flex-col">
                        <div className="flex items-center mb-5">
                            <div className="bg-dark-300 rounded-full w-[80px] h-[80px] mr-5 p-[20px]">
                                <BsWordpress size={40} color={"#4898f0"} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-1">Wordpress Hosting</h4>
                                <p className="">Starting at $2.99/mo</p>
                            </div>
                        </div>
                        <p className="mb-5">
                            Whether hosting community forums, an online store, or even a blog, this platform is built to meet and surpass your every regard.
                        </p>
                        <ul className="list-none leading-snug mb-10">
                            <li className="mb-4 last:mb-0">
                                <div className="flex items-center">
                                    <BiMicrochip className="mr-5 w-7 flex-shrink-0 flex-grow-0" size={28} />
                                    <p className="">Intel Xeon E5-1630v3 @ 3.7Ghz / Intel i7-7700k @ 4.5GHz</p>
                                </div>
                            </li>
                            <li className="mb-4 last:mb-0">
                                <div className="flex items-center">
                                    <FaMemory className="mr-5 w-7 flex-shrink-0 flex-grow-0" size={28} />
                                    <p className="">DDR4 2133MHz ECC Memory</p>
                                </div>
                            </li>
                            <li className="mb-4 last:mb-0">
                                <div className="flex items-center">
                                    <FiHardDrive className="mr-5 w-7 flex-shrink-0 flex-grow-0" size={28} />
                                    <p className="">Unmetered Enterprise Grade SSDs</p>
                                </div>
                            </li>
                            <li className="mb-4 last:mb-0">
                                <div className="flex items-center">
                                    <BsShieldShaded className="mr-5 w-7 flex-shrink-0 flex-grow-0" size={28} />
                                    <p className="">160Gbps DDos Protection</p>
                                </div>
                            </li>
                            <li className="mb-4 last:mb-0">
                                <div className="flex items-center">
                                    <FaUser className="mr-5 w-7 flex-shrink-0 flex-grow-0" size={28} />
                                    <p className="">Unlimited Slots</p>
                                </div>
                            </li>
                            <li className="mb-4 last:mb-0">
                                <div className="flex items-center">
                                    <FaGlobeEurope className="mr-5 w-7 flex-shrink-0 flex-grow-0" size={28} />
                                    <p className="">North America & Europe</p>
                                </div>
                            </li>
                        </ul>
                        {/*<a href="#" className="block text-center mt-auto px-4 py-4 w-full border border-white-100 rounded-full bg-transparent text-[15px] text-white-100 transition-all hover:bg-white-100 hover:text-dark-100 ">Check More Plans</a>*/}
                    </div>
                    <div className="rounded-[30px] dark:bg-dark-200 dark:text-white-100 bg-white-200 text-dark-100 py-10 px-6 leading-relaxed flex flex-col">
                        <div className="flex items-center mb-5">
                            <div className="bg-dark-300 rounded-full w-[80px] h-[80px] mr-5 p-[20px]">
                                <MdOutlineCloudUpload size={40} color={"#4898f0"} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-1">Shared Hosting</h4>
                                <p className="">Starting at $2.99/mo</p>
                            </div>
                        </div>
                        <p className="mb-5">
                            Whether hosting community forums, an online store, or even a blog, this platform is built to meet and surpass your every regard.
                        </p>
                        <ul className="list-none leading-snug mb-10">
                            <li className="mb-4 last:mb-0">
                                <div className="flex items-center">
                                    <BiMicrochip className="mr-5 w-7 flex-shrink-0 flex-grow-0" size={28} />
                                    <p className="">Intel Xeon E5-1630v3 @ 3.7Ghz / Intel i7-7700k @ 4.5GHz</p>
                                </div>
                            </li>
                            <li className="mb-4 last:mb-0">
                                <div className="flex items-center">
                                    <FaMemory className="mr-5 w-7 flex-shrink-0 flex-grow-0" size={28} />
                                    <p className="">DDR4 2133MHz ECC Memory</p>
                                </div>
                            </li>
                            <li className="mb-4 last:mb-0">
                                <div className="flex items-center">
                                    <FiHardDrive className="mr-5 w-7 flex-shrink-0 flex-grow-0" size={28} />
                                    <p className="">Unmetered Enterprise Grade SSDs</p>
                                </div>
                            </li>
                            <li className="mb-4 last:mb-0">
                                <div className="flex items-center">
                                    <BsShieldShaded className="mr-5 w-7 flex-shrink-0 flex-grow-0" size={28} />
                                    <p className="">160Gbps DDos Protection</p>
                                </div>
                            </li>
                            <li className="mb-4 last:mb-0">
                                <div className="flex items-center">
                                    <FaUser className="mr-5 w-7 flex-shrink-0 flex-grow-0" size={28} />
                                    <p className="">Unlimited Slots</p>
                                </div>
                            </li>
                            <li className="mb-4 last:mb-0">
                                <div className="flex items-center">
                                    <FaGlobeEurope className="mr-5 w-7 flex-shrink-0 flex-grow-0" size={28} />
                                    <p className="">North America & Europe</p>
                                </div>
                            </li>
                            <li className="mb-4 last:mb-0">
                                <div className="flex items-center">
                                    <RxReload className="mr-5 w-7 flex-shrink-0 flex-grow-0" size={28} />
                                    <p className="">Free Automatic Backups</p>
                                </div>
                            </li>
                            <li className="mb-4 last:mb-0">
                                <div className="flex items-center">
                                    <AiFillTool className="mr-5 w-7 flex-shrink-0 flex-grow-0" size={28} />
                                    <p className="">One-click Modpack Installer</p>
                                </div>
                            </li>
                            <li className="mb-4 last:mb-0">
                                <div className="flex items-center">
                                    <BiCommand className="mr-5 w-7 flex-shrink-0 flex-grow-0" size={28} />
                                    <p className="">Support for Custom Startup flags</p>
                                </div>
                            </li>
                        </ul>
                        {/*<a href="#" className="block text-center mt-auto px-4 py-4 w-full border border-white-100 rounded-full bg-transparent text-[15px] text-white-100 transition-all hover:bg-white-100 hover:text-dark-100 ">Check More Plans</a>*/}
                    </div>
                    <div className="rounded-[30px] dark:bg-dark-200 dark:text-white-100 bg-white-200 text-dark-100 py-10 px-6 leading-relaxed flex flex-col">
                        <div className="flex items-center mb-5">
                            <div className="bg-dark-300 rounded-full w-[80px] h-[80px] mr-5 p-[20px]">
                                <FaSitemap size={40} color={"#4898f0"} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-1">VPS Hosting</h4>
                                <p className="">Starting at $2.99/mo</p>
                            </div>
                        </div>
                        <p className="mb-5">
                            Whether hosting community forums, an online store, or even a blog, this platform is built to meet and surpass your every regard.
                        </p>
                        <ul className="list-none leading-snug mb-10">
                            <li className="mb-4 last:mb-0">
                                <div className="flex items-center">
                                    <BiMicrochip className="mr-5 w-7 flex-shrink-0 flex-grow-0" size={28} />
                                    <p className="">Intel Xeon E5-1630v3 @ 3.7Ghz / Intel i7-7700k @ 4.5GHz</p>
                                </div>
                            </li>
                            <li className="mb-4 last:mb-0">
                                <div className="flex items-center">
                                    <FaMemory className="mr-5 w-7 flex-shrink-0 flex-grow-0" size={28} />
                                    <p className="">DDR4 2133MHz ECC Memory</p>
                                </div>
                            </li>
                            <li className="mb-4 last:mb-0">
                                <div className="flex items-center">
                                    <FiHardDrive className="mr-5 w-7 flex-shrink-0 flex-grow-0" size={28} />
                                    <p className="">Unmetered Enterprise Grade SSDs</p>
                                </div>
                            </li>
                            <li className="mb-4 last:mb-0">
                                <div className="flex items-center">
                                    <BsShieldShaded className="mr-5 w-7 flex-shrink-0 flex-grow-0" size={28} />
                                    <p className="">160Gbps DDos Protection</p>
                                </div>
                            </li>
                            <li className="mb-4 last:mb-0">
                                <div className="flex items-center">
                                    <FaUser className="mr-5 w-7 flex-shrink-0 flex-grow-0" size={28} />
                                    <p className="">Unlimited Slots</p>
                                </div>
                            </li>
                            <li className="mb-4 last:mb-0">
                                <div className="flex items-center">
                                    <FaGlobeEurope className="mr-5 w-7 flex-shrink-0 flex-grow-0" size={28} />
                                    <p className="">North America & Europe</p>
                                </div>
                            </li>
                            <li className="mb-4 last:mb-0">
                                <div className="flex items-center">
                                    <RxReload className="mr-5 w-7 flex-shrink-0 flex-grow-0" size={28} />
                                    <p className="">Free Automatic Backups</p>
                                </div>
                            </li>
                            <li className="mb-4 last:mb-0">
                                <div className="flex items-center">
                                    <AiFillTool className="mr-5 w-7 flex-shrink-0 flex-grow-0" size={28} />
                                    <p className="">One-click Modpack Installer</p>
                                </div>
                            </li>
                            <li className="mb-4 last:mb-0">
                                <div className="flex items-center">
                                    <BiCommand className="mr-5 w-7 flex-shrink-0 flex-grow-0" size={28} />
                                    <p className="">Support for Custom Startup flags</p>
                                </div>
                            </li>
                            <li className="mb-4 last:mb-0">
                                <div className="flex items-center">
                                    <MdStorage className="mr-5 w-7 flex-shrink-0 flex-grow-0" size={28} />
                                    <p className="">Dedicated CPU Threads</p>
                                </div>
                            </li>
                        </ul>
                        {/*<a href="#" className="block text-center mt-auto px-4 py-4 w-full border border-white-100 rounded-full bg-transparent text-[15px] text-white-100 transition-all hover:bg-white-100 hover:text-dark-100 ">Check More Plans</a>*/}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MCLineUpsSection;