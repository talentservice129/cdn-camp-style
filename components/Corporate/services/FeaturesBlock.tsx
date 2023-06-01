import React from 'react';
import NextLink from 'next/link';
import { BiServer } from 'react-icons/bi';
import { FiServer } from 'react-icons/fi';
import { GiServerRack } from 'react-icons/gi';
import { CgWebsite } from 'react-icons/cg';
import { MdOutlineSettingsSuggest } from 'react-icons/md';
import { AiOutlineSolution } from 'react-icons/ai';
function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      {/* <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div> */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-28 border-b">

          {/* Section header */}
          <div className="max-w-sm flex flex-row flex-wrap items-center mb-8 md:max-w-2xl lg:max-w-none mx-auto">
            <div className="md:w-2/3">
              <p className="md:text-xl dark:text-blue-300 text-black mb-3 font-semibold">Service</p>
              <h2 className="h2 mb-4 text-4xl md:text-6xl font-extrabold dark:text-white-100 text-black tracking-tight">What do we here</h2>
            </div>
            <div className="md:w-1/3 text-right">
              <button type="button" className="relative inline-flex items-center justify-center p-0.5 overflow-hidden md:text-lg uppercase font-bold rounded-lg tracking-tight group bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-600 focus:ring-1">
                <span className="relative transition-all py-4 pl-4 pr-20 text-dark-100 dark:text-white-100 ease-in duration-75 bg-white-100 dark:bg-dark-100 group-hover:text-white-100 rounded-md group-hover:bg-opacity-0">
                    Services
                </span>
                <svg aria-hidden="true" className="absolute w-10 h-10 right-4 text-white-100 bg-blue-200 font-medium rounded-lg p-2.5 text-center inline-flex items-center " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
            </div>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative p-6 bg-gradient-to-br hover:from-cyan-500 hover:to-blue-300 dark:bg-dark-500 dark:border-dark-500 rounded-lg shadow-[0_5px_50px_0_rgb(0,0,0,0.1)] dark:hover:bg-dark-200 dark:hover:border-dark-bg-dark-200 transition-all hover:text-white-100">
              <NextLink className="flex flex-col items-center text-center" href="#">
                <BiServer className="w-16 h-16 p-1 mt-1 mb-2 text-green-400"  />
                <h4 className="text-2xl font-bold leading-snug tracking-tight mb-4">Game Servers</h4>
                <p className="mb-6">Performance and Reliable Game Servers for your everyday needs.</p>
              </NextLink>
            </div>

            {/* 2nd item */}
            <div className="relative p-6 bg-gradient-to-br hover:from-cyan-500 hover:to-blue-300 dark:bg-dark-500 dark:border-dark-500 rounded-lg shadow-[0_5px_50px_0_rgb(0,0,0,0.1)] dark:hover:bg-dark-200 dark:hover:border-dark-bg-dark-200 transition-all hover:text-white-100">
              <NextLink className="flex flex-col items-center text-center" href="#">
                <FiServer className="w-16 h-16 p-1 mt-1 mb-2 text-blue-200"  />
                <h4 className="text-2xl font-bold leading-snug tracking-tight mb-4">VPS Servers</h4>
                <p className="mb-6">Fast, High Performing SSD-powered VPS servers at your disposal.</p>
              </NextLink>
            </div>

            {/* 3rd item */}
            <div className="relative p-6 bg-gradient-to-br hover:from-cyan-500 hover:to-blue-300 dark:bg-dark-500 dark:border-dark-500 rounded-lg shadow-[0_5px_50px_0_rgb(0,0,0,0.1)] dark:hover:bg-dark-200 dark:hover:border-dark-bg-dark-200 transition-all hover:text-white-100">
              <NextLink className="flex flex-col items-center text-center" href="#">
                <GiServerRack className="w-16 h-16 p-1 mt-1 mb-2 text-yellow-200"  />

                <h4 className="text-2xl font-bold leading-snug tracking-tight mb-4">Dedicated Servers</h4>
                <p className="mb-6">Powerful Full Machines with Cutting Edge Hardware at your disposal.</p>
              </NextLink>
            </div>

            {/* 4th item */}
            <div className="relative p-6 bg-gradient-to-br hover:from-cyan-500 hover:to-blue-300 dark:bg-dark-500 dark:border-dark-500 rounded-lg shadow-[0_5px_50px_0_rgb(0,0,0,0.1)] dark:hover:bg-dark-200 dark:hover:border-dark-bg-dark-200 transition-all hover:text-white-100">
              <NextLink className="flex flex-col items-center text-center" href="#">
                <CgWebsite className="w-16 h-16 p-1 mt-1 mb-2 text-blue-200"  />

                <h4 className="text-2xl font-bold leading-snug tracking-tight mb-4">Frontend Development</h4>
                <p className="mb-6">Our Frontend Engineers are at your disposal for any client project</p>
              </NextLink>
            </div>

            {/* 5th item */}
            <div className="relative p-6 bg-gradient-to-br hover:from-cyan-500 hover:to-blue-300 dark:bg-dark-500 dark:border-dark-500 rounded-lg shadow-[0_5px_50px_0_rgb(0,0,0,0.1)] dark:hover:bg-dark-200 dark:hover:border-dark-bg-dark-200 transition-all hover:text-white-100">
              <NextLink className="flex flex-col items-center text-center" href="#">
                <MdOutlineSettingsSuggest className="w-16 h-16 p-1 mt-1 mb-2 text-blue-200"  />

                <h4 className="text-2xl font-bold leading-snug tracking-tight mb-4">Backend Development</h4>
                <p className="mb-6">Our Backend Engineers are at your disposal for any client project.</p>
              </NextLink>
            </div>

            {/* 6th item */}
            <div className="relative p-6 bg-gradient-to-br hover:from-cyan-500 hover:to-blue-300 dark:bg-dark-500 dark:border-dark-500 rounded-lg shadow-[0_5px_50px_0_rgb(0,0,0,0.1)] dark:hover:bg-dark-200 dark:hover:border-dark-bg-dark-200 transition-all hover:text-white-100">
              <NextLink className="flex flex-col items-center text-center" href="#">
                <AiOutlineSolution className="w-16 h-16 p-1 mt-1 mb-2 text-blue-200"  />

                <h4 className="text-2xl font-bold leading-snug tracking-tight mb-4">Solutions Development</h4>
                <p className="mb-6">Build your solutions with our assistance and resources.</p>
              </NextLink>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
