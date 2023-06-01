import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function HeroDedicatedSlide() {


  return (
      <>
        { /* Create a Slider using swiper that has 3 slides */ }
        
        <div className="flex flex-col justify-center items-center bg-[#09132c] relative">
          <Image className="min-h-[500px] object-cover" alt="Eco Servers" src="/assets/images/games/dedicated/slide1.jpg" width={1920} height={750} />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
            <div className="container xl:max-w-[1200px] mx-auto">
              <div className="text-center">
                <h3 className="text-6xl text-white-100 mb-0">Protect your</h3>
                <h3 className="text-7xl font-bold mb-4 text-blue-300">online presence</h3>
                <p className="text-xl text-white-100 mb-8">Really fast. Immensely secure. Bespoke customer accommodation. This is RivageCDN!</p>
                <div>
                  <button className="inline-block px-4 py-2 rounded-md scale-[1] hover:scale-[1.1] transition-all bg-blue-300 text-white-100 mr-3 mb-3">
                    Join Now
                  </button>
                </div>
                {/* <div className="xl:w-5/12 md:w-1/3 w-full px-4 hidden md:block">
                  <Image
                      src="/assets/images/games/dedicated/icon1.png"
                      alt="Icon"
                      width={599}
                      height={558}
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* <Swiper
            className="swiper-custom"
            pagination={true}
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={true}
        >
          <SwiperSlide>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col justify-center items-center bg-[#013a58]">
              <Image className="min-h-[500px] object-cover" alt="Eco Servers" src="/assets/images/games/dedicated/slide2.jpg" width={1920} height={750} />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                <div className="container xl:max-w-[1200px] mx-auto">
                  <div className="flex flex-wrap items-center">
                    <div className="xl:w-7/12 md:w-2/3 w-full px-4 text-white-100">
                      <h3 className="text-3xl mb-0 uppercase">Simple, Scalable, Safe</h3>
                      <h3 className="text-3xl font-bold mb-0 uppercase">Get on the same page with</h3>
                      <h3 className="text-3xl uppercase mb-2">Storage Share</h3>
                      <p className="text-xl mb-5">Collaborate with others and share and secure all your documents, images, and more - all in one place.</p>
                      <div>
                        <button className="inline-block px-2 py-1 rounded-md uppercase scale-[1] hover:scale-[1.1] transition-all bg-blue-300 text-white-100 mr-3 mb-3">
                          Storage Share
                        </button>
                      </div>
                    </div>
                    <div className="xl:w-5/12 md:w-1/3 w-full px-4 hidden md:block">
                      <Image
                          src="/assets/images/games/dedicated/icon2.png"
                          alt="Icon"
                          width={1224}
                          height={1070}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col justify-center items-center bg-[#013a58]">
              <Image className="min-h-[500px] object-cover" alt="Eco Servers" src="/assets/images/games/dedicated/slide3.webp" width={1920} height={750} />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                <div className="container xl:max-w-[1200px] mx-auto">
                  <div className="flex flex-wrap items-center">
                    <div className="xl:w-7/12 md:w-2/3 w-full px-4 text-white-100">
                      <h3 className="text-3xl mb-0 uppercase">RX-LINE SERVERS</h3>
                      <h3 className="text-3xl font-bold mb-0 uppercase"> DEDICATED SERVERS WITH</h3>
                      <h3 className="text-3xl uppercase mb-2">Arm64-Based PROCESSORS</h3>
                      <p className="text-xl mb-5">Level up your performance with 80 cores. High-quality Arm-based servers at unparalleled low prices.</p>
                      <div>
                        <button className="inline-block px-2 py-1 rounded-md uppercase scale-[1] hover:scale-[1.1] transition-all bg-blue-300 text-white-100 mr-3 mb-3">
                          RX-Line
                        </button>
                        <button className="inline-block px-2 py-1 rounded-md uppercase scale-[1] hover:scale-[1.1] transition-all bg-dark-200 text-white-100 mr-3 mb-3">
                          RX170
                        </button>
                        <button className="inline-block px-2 py-1 rounded-md uppercase scale-[1] hover:scale-[1.1] transition-all bg-dark-200 text-white-100 mr-3 mb-3">
                          RX220
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper> */}
      </>
  )
}

export default HeroDedicatedSlide;