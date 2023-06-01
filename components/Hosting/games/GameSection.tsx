import Image from 'next/image';
import NextLink from 'next/link';
import React from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/autoplay';
import { AiOutlineSolution } from 'react-icons/ai';
import { MdOutlineSettingsSuggest } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';
import { GiServerRack } from 'react-icons/gi';
import { FiServer } from 'react-icons/fi';
import { BiServer } from 'react-icons/bi';

function GameSection() {
	return (
		<>
		{/*<section className="relative my-[100px] px-5">*/}
		{/*	<Swiper*/}
		{/*		grabCursor={true}*/}
		{/*		modules={[Autoplay]}*/}
		{/*		className="swiper-equal-height"*/}
		{/*		autoHeight={true}*/}
		{/*		spaceBetween={20}*/}
		{/*		slidesPerView={1}*/}
		{/*		loop={true}*/}
		{/*		autoplay={{*/}
		{/*			delay: 1500*/}
		{/*		}}*/}
		{/*		breakpoints={{*/}
		{/*			576: {*/}
		{/*				slidesPerView: 2*/}
		{/*			},*/}
		{/*			768: {*/}
		{/*				slidesPerView: 3*/}
		{/*			},*/}
		{/*			1200: {*/}
		{/*				slidesPerView: 4*/}
		{/*			},*/}
		{/*			1600: {*/}
		{/*				slidesPerView: 5*/}
		{/*			}*/}
		{/*		}}*/}
		{/*	>*/}
		{/*		<SwiperSlide>*/}
		{/*			<div className="px-6 py-5 h-full rounded-lg overflow-hidden shadow-md flex flex-col items-center justify-between relative z-[1] bg-cover bg-no-repeat bg-right bg-[url('/assets/images/games/products/gta-wallpaper.jpg')] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:content-[''] after:bg-[linear-gradient(0deg,rgba(33,37,40,0.75),rgba(33,37,40,1))] after:z-[-1] group">*/}
		{/*				<Image*/}
		{/*					className="w-full"*/}
		{/*					src="/assets/images/games/products/gta-logo.png"*/}
		{/*					alt="Fivem server hosting"*/}
		{/*					width={256}*/}
		{/*					height={144}*/}
		{/*				/>*/}
		{/*				<div className="md:mt-[90px] md:mb-[-90px] text-white-100 transition-[margin] group-hover:mb-0 group-hover:mt-[0px]">*/}
		{/*					<div className="flex items-end mb-2"><h4 className="text-2xl md:text-4xl font-bold">$10,00</h4><span className="text-2xl">/mo</span></div>*/}
		{/*					<p className="md:text-2xl text-white-200 mb-8">Want to create your own Roleplay Server? Then choose us</p>*/}
		{/*					<NextLink className="inline-block mb-5 py-2.5 px-5 text-white-100 border border-blue-200 transition-colors rounded-lg uppercase hover:bg-blue-200 font-semibold" href="#">*/}
		{/*						Start Shopping*/}
		{/*					</NextLink>*/}
		{/*				</div>*/}
		{/*			</div>*/}
		{/*		</SwiperSlide>*/}
		{/*		<SwiperSlide>*/}
		{/*			<div className="px-6 py-5 h-full rounded-lg overflow-hidden shadow-md flex flex-col items-center justify-between relative z-[1] bg-cover bg-no-repeat bg-right bg-[url('/assets/images/games/products/ark-background.jpg')] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:content-[''] after:bg-[linear-gradient(0deg,rgba(33,37,40,0.75),rgba(33,37,40,1))] after:z-[-1] group">*/}
		{/*				<Image*/}
		{/*					className="w-1/2"*/}
		{/*					src="/assets/images/games/products/ark-logo.png"*/}
		{/*					alt="Ark server hosting"*/}
		{/*					width={256}*/}
		{/*					height={256}*/}
		{/*				/>*/}
		{/*				<div className="md:mt-[90px] md:mb-[-90px] text-white-100 transition-[margin] group-hover:mb-0 group-hover:mt-[0px]">*/}
		{/*					<div className="flex items-end mb-2"><h4 className="text-2xl md:text-4xl font-bold">$15,00</h4><span className="text-2xl">/mo</span></div>*/}
		{/*					<p className="md:text-2xl text-white-200 mb-8">Want to live in the jungle fighting dinosaurs? We gotcha covered</p>*/}
		{/*					<NextLink className="inline-block mb-5 py-2.5 px-5 text-white-100 border border-blue-200 transition-colors rounded-lg uppercase hover:bg-blue-200 font-semibold" href="#">*/}
		{/*						Start Shopping*/}
		{/*					</NextLink>*/}
		{/*				</div>*/}
		{/*			</div>*/}
		{/*		</SwiperSlide>*/}
		{/*		<SwiperSlide>*/}
		{/*			<div className="px-6 py-5 h-full rounded-lg overflow-hidden shadow-md flex flex-col items-center justify-between relative z-[1] bg-cover bg-no-repeat bg-right bg-[url('/assets/images/games/products/gmod-wallpaper.jpg')] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:content-[''] after:bg-[linear-gradient(0deg,rgba(33,37,40,0.75),rgba(33,37,40,1))] after:z-[-1] group">*/}
		{/*				<Image*/}
		{/*					className="w-1/2"*/}
		{/*					src="/assets/images/games/products/gmod-logo.png"*/}
		{/*					alt="Gmod server hosting"*/}
		{/*					width={256}*/}
		{/*					height={256}*/}
		{/*				/>*/}
		{/*				<div className="md:mt-[90px] md:mb-[-90px] text-white-100 transition-[margin] group-hover:mb-0 group-hover:mt-[0px]">*/}
		{/*					<div className="flex items-end mb-2"><h4 className="text-2xl md:text-4xl font-bold">$5,00</h4><span className="text-2xl">/mo</span></div>*/}
		{/*					<p className="md:text-2xl text-white-200 mb-8">Want a sandbox server to have fun with friends? Gmod is for you.</p>*/}
		{/*					<NextLink className="inline-block mb-5 py-2.5 px-5 text-white-100 border border-blue-200 transition-colors rounded-lg uppercase hover:bg-blue-200 font-semibold" href="#">*/}
		{/*						Start Shopping*/}
		{/*					</NextLink>*/}
		{/*				</div>*/}
		{/*			</div>*/}
		{/*		</SwiperSlide>*/}
		{/*		<SwiperSlide>*/}
		{/*			<div className="px-6 py-5 h-full rounded-lg overflow-hidden shadow-md flex flex-col items-center justify-between relative z-[1] bg-cover bg-no-repeat bg-right bg-[url('/assets/images/games/products/rust-wallpaper.jpg')] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:content-[''] after:bg-[linear-gradient(0deg,rgba(33,37,40,0.75),rgba(33,37,40,1))] after:z-[-1] group">*/}
		{/*				<Image*/}
		{/*					className="w-1/2"*/}
		{/*					src="/assets/images/games/products/rust-logo.png"*/}
		{/*					alt="Rust server hosting"*/}
		{/*					width={256}*/}
		{/*					height={256}*/}
		{/*				/>*/}
		{/*				<div className="md:mt-[90px] md:mb-[-90px] text-white-100 transition-[margin] group-hover:mb-0 group-hover:mt-[0px]">*/}
		{/*					<div className="flex items-end mb-2"><h4 className="text-2xl md:text-4xl font-bold">$15,00</h4><span className="text-2xl">/mo</span></div>*/}
		{/*					<p className="md:text-2xl text-white-200 mb-8">Want to be naked and own a gun? Then rust is the way to go</p>*/}
		{/*					<NextLink className="inline-block mb-5 py-2.5 px-5 text-white-100 border border-blue-200 transition-colors rounded-lg uppercase hover:bg-blue-200 font-semibold" href="#">*/}
		{/*						Start Shopping*/}
		{/*					</NextLink>*/}
		{/*				</div>*/}
		{/*			</div>*/}
		{/*		</SwiperSlide>*/}
		{/*		<SwiperSlide>*/}
		{/*			<div className="px-6 py-5 h-full rounded-lg overflow-hidden shadow-md flex flex-col items-center justify-between relative z-[1] bg-cover bg-no-repeat bg-right bg-[url('/assets/images/games/products/minecraft-background.jpg')] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:content-[''] after:bg-[linear-gradient(0deg,rgba(33,37,40,0.75),rgba(33,37,40,1))] after:z-[-1] group">*/}
		{/*				<Image*/}
		{/*					className="w-1/2"*/}
		{/*					src="/assets/images/games/products/minecraft-logo.png"*/}
		{/*					alt="Minecraft server hosting"*/}
		{/*					width={256}*/}
		{/*					height={256}*/}
		{/*				/>*/}
		{/*				<div className="md:mt-[90px] mb-[-90px] text-white-100 transition-[margin] group-hover:mb-0 group-hover:mt-[0px]">*/}
		{/*					<div className="flex items-end mb-2"><h4 className="text-2xl md:text-4xl font-bold">$2,00</h4><span className="text-2xl">/mo</span></div>*/}
		{/*					<p className="md:text-2xl text-white-200 mb-8">You like Endless Journeys? Hours of fun? Choose Minecraft</p>*/}
		{/*					<NextLink className="inline-block mb-5 py-2.5 px-5 text-white-100 border border-blue-200 transition-colors rounded-lg uppercase hover:bg-blue-200 font-semibold" href="#">*/}
		{/*						Start Shopping*/}
		{/*					</NextLink>*/}
		{/*				</div>*/}
		{/*			</div>*/}
		{/*		</SwiperSlide>*/}
		{/*	</Swiper>*/}

		{/*</section>*/}
	<section className="relative">

		{/* Section background (needs .relative class on parent and next sibling elements) */}
		{/* <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div> */}

		<div className="relative max-w-6xl mx-auto px-4 sm:px-6">
			<div className="py-12 md:py-28 border-b ">

				{/* Section header */}
				<div className="max-w-sm flex flex-row flex-wrap items-center mb-8 md:max-w-2xl lg:max-w-none mx-auto">
					<div className="md:w-2/3">
						<p className="md:text-xl dark:text-blue-300 text-black mb-3 font-semibold">Game Hosting</p>
						<h2 className="h2 mb-4 text-4xl md:text-6xl font-extrabold dark:text-white-100 text-black tracking-tight">Starting At</h2>
					</div>
				</div>

				{/* Items */}
				<div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

					{/* 1st item */}
					<div className="px-6 py-5 h-full rounded-lg overflow-hidden shadow-md flex flex-col items-center justify-between relative z-[1] bg-cover bg-no-repeat bg-right bg-[url('/assets/images/games/products/minecraft-background.jpg')] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:content-[''] after:bg-[linear-gradient(0deg,rgba(33,37,40,0.5),rgba(33,37,40,0))] after:z-[-1] group">
						<Image
							className="w-1/2"
							src="/assets/images/games/products/minecraft-logo.png"
							alt="Minecraft server hosting"
							width={256}
							height={256}
						/>
						<div className="md:mt-[90px] md:mb-[-90px] text-white-100 transition-[margin] group-hover:mb-0 group-hover:mt-[0px]">
							<div className="flex items-end mb-2  bg-black bg-opacity-75 p-0.5 rounded"><h4 className="text-2xl md:text-4xl font-bold text-green-100">$4.99</h4><span className="text-2xl"> /mo</span></div>
							<p className="md:text-2xl text-white-200 mb-8">Want a sandbox server to have fun with friends? Minecraft is for you.</p>
							<NextLink className="inline-block mb-5 py-2.5 px-5 text-white-100 border border-blue-200 transition-colors rounded-lg uppercase hover:bg-blue-200 font-semibold" href="#">
								Start Shopping
							</NextLink>
						</div>
					</div>

					{/* 2nd item */}
					<div className="px-6 py-5 h-full rounded-lg overflow-hidden shadow-md flex flex-col items-center justify-between relative z-[1] bg-cover bg-no-repeat bg-right bg-[url('/assets/images/games/products/gmod-wallpaper.jpg')] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:content-[''] after:bg-[linear-gradient(0deg,rgba(33,37,40,0.5),rgba(33,37,40,0.2))] after:z-[-1] group">
						<Image
							className="w-1/2"
							src="/assets/images/games/products/gmod-logo.png"
							alt="Gmod server hosting"
							width={256}
							height={256}
						/>
						<div className="md:mt-[90px] md:mb-[-90px] text-white-100 transition-[margin] group-hover:mb-0 group-hover:mt-[0px]">
							<div className="flex items-end mb-2  bg-black bg-opacity-75 p-0.5 rounded"><h4 className="text-2xl md:text-4xl font-bold text-green-100">$4.99</h4><span className="text-2xl">/mo</span></div>
							<p className="md:text-2xl text-white-200 mb-8">Want a sandbox server to have fun with friends? Gmod is for you.</p>
							<NextLink className="inline-block mb-5 py-2.5 px-5 text-white-100 border border-blue-200 transition-colors rounded-lg uppercase hover:bg-blue-200 font-semibold" href="#">
								Start Shopping
							</NextLink>
						</div>
					</div>

					{/* 3rd item */}
					<div className="px-6 py-5 h-full rounded-lg overflow-hidden shadow-md flex flex-col items-center justify-between relative z-[1] bg-cover bg-no-repeat bg-right bg-[url('/assets/images/games/products/rust-wallpaper.jpg')] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:content-[''] after:bg-[linear-gradient(0deg,rgba(33,37,40,0.5),rgba(33,37,40,0.2))] after:z-[-1] group">
						<Image
							className="w-1/2"
							src="/assets/images/games/products/rust-logo.png"
							alt="Rust server hosting"
							width={144}
							height={144}
						/>
						<div className="md:mt-[90px] md:mb-[-90px] text-white-100 transition-[margin] group-hover:mb-0 group-hover:mt-[0px]">
							<div className="flex items-end mb-2 w-auto bg-black bg-opacity-75 p-0.5 rounded"><h4 className="text-2xl md:text-4xl font-bold text-green-100">$14.99</h4><span className="text-2xl">/mo</span></div>
							<p className="md:text-2xl text-white-200 mb-8">Want to be naked and own a gun? Then rust is the way to go</p>
							<NextLink className="inline-block mb-5 py-2.5 px-5 text-white-100 border border-blue-200 transition-colors rounded-lg uppercase hover:bg-blue-200 font-semibold" href="#">
								Start Shopping
							</NextLink>
						</div>
					</div>

					{/* 4th item */}
					<div className="px-6 py-5 h-full rounded-lg overflow-hidden shadow-md flex flex-col items-center justify-between relative z-[1] bg-cover bg-no-repeat bg-right bg-[url('/assets/images/games/products/gta-wallpaper.jpg')] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:content-[''] after:bg-[linear-gradient(0deg,rgba(33,37,40,0.5),rgba(33,37,40,0.2))] after:z-[-1] group">
						<Image
							// className="w-1/3"
							src="/assets/images/games/products/gta-logo.png"
							alt="Fivem server hosting"
							width={144}
							height={144}
						/>
						<div className="md:mt-[90px] md:mb-[-90px] text-white-100 transition-[margin] group-hover:mb-0 group-hover:mt-[0px]">
							<div className="flex items-end mb-2  bg-black bg-opacity-75 p-0.5 rounded"><h4 className="text-2xl md:text-4xl font-bold text-green-100">$4.99</h4><span className="text-2xl">/mo</span></div>
							<p className="md:text-2xl text-white-200 mb-8">Want to create your own Roleplay Server? Then choose us</p>
							<NextLink className="inline-block mb-5 py-2.5 px-5 text-white-100 border border-blue-200 transition-colors rounded-lg uppercase hover:bg-blue-200 font-semibold" href="#">
								Start Shopping
							</NextLink>
						</div>
					</div>

					{/* 5th item */}
					<div className="px-6 py-5 h-full rounded-lg overflow-hidden shadow-md flex flex-col items-center justify-between relative z-[1] bg-cover bg-no-repeat bg-right bg-[url('/assets/images/games/squad/banner1.jpg')] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:content-[''] after:bg-[linear-gradient(0deg,rgba(33,37,40,0.5),rgba(33,37,40,0.2))] after:z-[-1] group">
						<Image
							// className="w-1/3"
							src="/assets/images/games/squad/logo-two.png"
							alt="Fivem server hosting"
							width={144}
							height={144}
						/>
						<div className="md:mt-[90px] md:mb-[-90px] text-white-100 transition-[margin] group-hover:mb-0 group-hover:mt-[0px]">
							<div className="flex items-end mb-2  bg-black bg-opacity-75 p-0.5 rounded"><h4 className="text-2xl md:text-4xl font-bold text-green-100">$9.99</h4><span className="text-2xl">/mo</span></div>
							<p className="md:text-2xl text-white-200 mb-8">Want to create your own Roleplay Server? Then choose us</p>
							<NextLink className="inline-block mb-5 py-2.5 px-5 text-white-100 border border-blue-200 transition-colors rounded-lg uppercase hover:bg-blue-200 font-semibold" href="#">
								Start Shopping
							</NextLink>
						</div>
					</div>

					{/* 6th item */}
					<div className="px-6 py-5 h-full rounded-lg overflow-hidden shadow-md flex flex-col items-center justify-between relative z-[1] bg-cover bg-no-repeat bg-right bg-[url('/assets/images/games/redm/redm-wallpaper.jpg')] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:content-[''] after:bg-[linear-gradient(0deg,rgba(33,37,40,0.5),rgba(33,37,40,0.2))] after:z-[-1] group">
						<Image
							// className="w-1/3"
							src="/assets/images/games/redm/redm-logo.png"
							alt="Fivem server hosting"
							width={144}
							height={144}
						/>
						<div className="md:mt-[90px] md:mb-[-90px] text-white-100 transition-[margin] group-hover:mb-0 group-hover:mt-[0px]">
							<div className="flex items-end mb-2  bg-black bg-opacity-75 p-0.5 rounded"><h4 className="text-2xl md:text-4xl font-bold text-green-100">$9.99</h4><span className="text-2xl">/mo</span></div>
							<p className="md:text-2xl text-white-200 mb-8">Want to create your own Roleplay Server? Then choose us</p>
							<NextLink className="inline-block mb-5 py-2.5 px-5 text-white-100 border border-blue-200 transition-colors rounded-lg uppercase hover:bg-blue-200 font-semibold" href="#">
								Start Shopping
							</NextLink>
						</div>
					</div>

					<div className="px-6 py-5 h-full rounded-lg overflow-hidden shadow-md flex flex-col items-center justify-between relative z-[1] bg-cover bg-no-repeat bg-right bg-[url('/assets/images/games/redm/redm-wallpaper.jpg')] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:content-[''] after:bg-[linear-gradient(0deg,rgba(33,37,40,0.5),rgba(33,37,40,0.2))] after:z-[-1] group">
						<Image
							// className="w-1/3"
							src="/assets/images/games/redm/redm-logo.png"
							alt="Fivem server hosting"
							width={144}
							height={144}
						/>
						<div className="md:mt-[90px] md:mb-[-90px] text-white-100 transition-[margin] group-hover:mb-0 group-hover:mt-[0px]">
							<div className="flex items-end mb-2  bg-black bg-opacity-75 p-0.5 rounded"><h4 className="text-2xl md:text-4xl font-bold text-green-100">$9.99</h4><span className="text-2xl">/mo</span></div>
							<p className="md:text-2xl text-white-200 mb-8">Want to create your own Roleplay Server? Then choose us</p>
							<NextLink className="inline-block mb-5 py-2.5 px-5 text-white-100 border border-blue-200 transition-colors rounded-lg uppercase hover:bg-blue-200 font-semibold" href="#">
								Start Shopping
							</NextLink>
						</div>
					</div>

					<div className="px-6 py-5 h-full rounded-lg overflow-hidden shadow-md flex flex-col items-center justify-between relative z-[1] bg-cover bg-no-repeat bg-right bg-[url('/assets/images/games/arma3/banner1.jpg')] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:content-[''] after:bg-[linear-gradient(0deg,rgba(33,37,40,0.5),rgba(33,37,40,0.2))] after:z-[-1] group">
						<Image
							// className="w-1/3"
							src="/assets/images/games/arma3/logo-white.png"
							alt="Fivem server hosting"
							width={144}
							height={144}
						/>
						<div className="md:mt-[90px] md:mb-[-90px] text-white-100 transition-[margin] group-hover:mb-0 group-hover:mt-[0px]">
							<div className="flex items-end mb-2  bg-black bg-opacity-75 p-0.5 rounded"><h4 className="text-2xl md:text-4xl font-bold text-green-100">$9.99</h4><span className="text-2xl">/mo</span></div>
							<p className="md:text-2xl text-white-200 mb-8">Create an Arma 3 Server today!</p>
							<NextLink className="inline-block mb-5 py-2.5 px-5 text-white-100 border border-blue-200 transition-colors rounded-lg uppercase hover:bg-blue-200 font-semibold" href="#">
								Start Shopping
							</NextLink>
						</div>
					</div>
				</div>

			</div>
		</div>
	</section>
		</>
	)
}

export default GameSection;