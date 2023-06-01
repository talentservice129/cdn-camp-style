import NextLink from 'next/link';
import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/navigation';

function IntroSection() {

	return (
		<section className="relative">
			<Swiper
                className="swiper-custom"
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={true}
			>
				<SwiperSlide>
					<div className="w-full relative bg-gray-100 bg-center bg-[url('/assets/images/games/slider-1.jpg')] bg-cover h-screen before:absolute before:content-[''] before:left-0 before:top-0 before:z-[1] before:h-full before:w-full before:bg-[radial-gradient(farthest-corner_at_70%_30%,rgba(24,26,30,0),rgba(24,26,30,.5),rgba(24,26,30,.7),rgba(24,26,30,.9))] flex items-center">
						<div className="container xl:max-w-[83.3%] mx-auto relative z-[1] mt-[-20px] px-4">
							<div className="xl:max-w-[830px]">
								<h1 className="text-5xl lg:text-7xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-200">Build your gaming empire with OpticEngine</h1>
								<p className="mb-2 md:text-[25px] text-white-200 dark:text-white-100">
									Want to start your very own Gaming Empire? Then choose OpticEngine Hosting today. With our fast support and quality hardware, you will never have any troubles when hosting with us.
								</p>
								<p className="md:text-[25px] text-white-200 dark:text-white-100 flex flex-wrap items-center mb-10">
									<svg className="inline-block text-blue-200 mt-2 mr-1" xmlns="http://www.w3.org/2000/svg" width="19.452" height="18.41" viewBox="0 0 19.452 18.41">
										<path d="M24.126,30.239l4.226-1.071,1.766,5.442Zm9.726-7.034H26.413L24.126,16.2l-2.287,7.005H14.4l6.021,4.342-2.287,7.005,6.021-4.342,3.705-2.663,5.992-4.342Z" transform="translate(-14.4 -16.2)" fill="currentColor"/>
									</svg>
									<svg className="inline-block text-blue-200 mt-2 mr-1" xmlns="http://www.w3.org/2000/svg" width="19.452" height="18.41" viewBox="0 0 19.452 18.41">
										<path d="M24.126,30.239l4.226-1.071,1.766,5.442Zm9.726-7.034H26.413L24.126,16.2l-2.287,7.005H14.4l6.021,4.342-2.287,7.005,6.021-4.342,3.705-2.663,5.992-4.342Z" transform="translate(-14.4 -16.2)" fill="currentColor"/>
									</svg>
									<svg className="inline-block text-blue-200 mt-2 mr-1" xmlns="http://www.w3.org/2000/svg" width="19.452" height="18.41" viewBox="0 0 19.452 18.41">
										<path d="M24.126,30.239l4.226-1.071,1.766,5.442Zm9.726-7.034H26.413L24.126,16.2l-2.287,7.005H14.4l6.021,4.342-2.287,7.005,6.021-4.342,3.705-2.663,5.992-4.342Z" transform="translate(-14.4 -16.2)" fill="currentColor"/>
									</svg>
									<svg className="inline-block text-blue-200 mt-2 mr-1" xmlns="http://www.w3.org/2000/svg" width="19.452" height="18.41" viewBox="0 0 19.452 18.41">
										<path d="M24.126,30.239l4.226-1.071,1.766,5.442Zm9.726-7.034H26.413L24.126,16.2l-2.287,7.005H14.4l6.021,4.342-2.287,7.005,6.021-4.342,3.705-2.663,5.992-4.342Z" transform="translate(-14.4 -16.2)" fill="currentColor"/>
									</svg>
									<svg className="inline-block text-blue-200 mt-2 mr-8" xmlns="http://www.w3.org/2000/svg" width="19.452" height="18.41" viewBox="0 0 19.452 18.41">
										<path d="M24.126,30.239l4.226-1.071,1.766,5.442Zm9.726-7.034H26.413L24.126,16.2l-2.287,7.005H14.4l6.021,4.342-2.287,7.005,6.021-4.342,3.705-2.663,5.992-4.342Z" transform="translate(-14.4 -16.2)" fill="currentColor"/>
									</svg>
									<span className="mt-2">Trustpilot rates us as Excellent</span>
								</p>
								<button type="button" className="md:text-xl py-4 px-6 text-white-100 border-2 border-blue-200 transition-colors rounded-lg uppercase hover:bg-blue-200 font-bold">
									Start Shopping
								</button>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="w-full relative bg-gray-100 bg-center bg-[url('/assets/images/games/slider-2.jpg')] bg-cover h-screen before:absolute before:content-[''] before:left-0 before:top-0 before:z-[1] before:h-full before:w-full before:bg-[radial-gradient(farthest-corner_at_70%_30%,rgba(24,26,30,0),rgba(24,26,30,.5),rgba(24,26,30,.7),rgba(24,26,30,.9))] flex items-center">
						<div className="container xl:max-w-[83.3%] mx-auto relative z-[1] mt-[-20px] px-4">
							<div className="xl:max-w-[830px] mx-auto text-center">
								<h1 className="text-5xl lg:text-7xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-200">Build your gaming empire with OpticEngine</h1>
								<p className="mb-2 md:text-[25px] text-white-200 dark:text-white-100">
									Want to start your very own Gaming Empire? Then choose OpticEngine Hosting today. With our fast support and quality hardware, you will never have any troubles when hosting with us.
								</p>
								<p className="md:text-[25px] text-white-200 dark:text-white-100 flex flex-wrap justify-center items-center mb-10">
									<svg className="inline-block text-blue-200 mt-2 mr-1" xmlns="http://www.w3.org/2000/svg" width="19.452" height="18.41" viewBox="0 0 19.452 18.41">
										<path d="M24.126,30.239l4.226-1.071,1.766,5.442Zm9.726-7.034H26.413L24.126,16.2l-2.287,7.005H14.4l6.021,4.342-2.287,7.005,6.021-4.342,3.705-2.663,5.992-4.342Z" transform="translate(-14.4 -16.2)" fill="currentColor"/>
									</svg>
									<svg className="inline-block text-blue-200 mt-2 mr-1" xmlns="http://www.w3.org/2000/svg" width="19.452" height="18.41" viewBox="0 0 19.452 18.41">
										<path d="M24.126,30.239l4.226-1.071,1.766,5.442Zm9.726-7.034H26.413L24.126,16.2l-2.287,7.005H14.4l6.021,4.342-2.287,7.005,6.021-4.342,3.705-2.663,5.992-4.342Z" transform="translate(-14.4 -16.2)" fill="currentColor"/>
									</svg>
									<svg className="inline-block text-blue-200 mt-2 mr-1" xmlns="http://www.w3.org/2000/svg" width="19.452" height="18.41" viewBox="0 0 19.452 18.41">
										<path d="M24.126,30.239l4.226-1.071,1.766,5.442Zm9.726-7.034H26.413L24.126,16.2l-2.287,7.005H14.4l6.021,4.342-2.287,7.005,6.021-4.342,3.705-2.663,5.992-4.342Z" transform="translate(-14.4 -16.2)" fill="currentColor"/>
									</svg>
									<svg className="inline-block text-blue-200 mt-2 mr-1" xmlns="http://www.w3.org/2000/svg" width="19.452" height="18.41" viewBox="0 0 19.452 18.41">
										<path d="M24.126,30.239l4.226-1.071,1.766,5.442Zm9.726-7.034H26.413L24.126,16.2l-2.287,7.005H14.4l6.021,4.342-2.287,7.005,6.021-4.342,3.705-2.663,5.992-4.342Z" transform="translate(-14.4 -16.2)" fill="currentColor"/>
									</svg>
									<svg className="inline-block text-blue-200 mt-2 mr-8" xmlns="http://www.w3.org/2000/svg" width="19.452" height="18.41" viewBox="0 0 19.452 18.41">
										<path d="M24.126,30.239l4.226-1.071,1.766,5.442Zm9.726-7.034H26.413L24.126,16.2l-2.287,7.005H14.4l6.021,4.342-2.287,7.005,6.021-4.342,3.705-2.663,5.992-4.342Z" transform="translate(-14.4 -16.2)" fill="currentColor"/>
									</svg>
									<span className="mt-2">Trustpilot rates us as Excellent</span>
								</p>
								<button type="button" className="md:text-xl py-4 px-6 text-white-100 border-2 border-blue-200 transition-colors rounded-lg uppercase hover:bg-blue-200 font-bold">
									Start Shopping
								</button>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</section>
	)
}

export default IntroSection;