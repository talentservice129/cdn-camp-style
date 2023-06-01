import React from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';


function Posts() {
	return (
		<section className="relative">
			<div className="relative max-w-6xl mx-auto px-4 sm:px-6">
				<div className="py-12 md:py-28 border-b">
					<h4 className="md:text-xl dark:text-blue-300 text-black font-semibold text-center">Recent Post</h4>
					<h2 className="h2 mb-4 text-4xl md:text-5xl font-extrabold dark:text-white-100 text-black tracking-tight text-center">Read our News &amp; Articles</h2>
					<p className="md:text-xl dark:text-white-200 w-full max-w-[840px] mx-auto text-black text-center mb-12">Assertively maximize cost effective methods of iterate team driven manufactured products through equity invested via customized benefits.</p>

					<Swiper
						spaceBetween={30}
						slidesPerView={1}
						breakpoints={{
							576: {
								slidesPerView: 2
							},
							1024: {
								slidesPerView: 3
							}
						}}
					>
						<SwiperSlide>
							<div className="p-4 rounded-lg border text-dark-100 dark:bg-dark-500 shadow-sm dark:border-dark-500 dark:text-white-100">
								<NextLink
									href="#"
								>
									<Image
										className="rounded-lg w-full"
										src="/assets/images/posts/post-1.jpg"
										alt="Post"
										width={330}
										height={250}
									/>
								</NextLink>
								<div>
									<div className="flex items-center flex-wrap py-4 text-white-400 ">
										<div className="inline-flex mr-4">
											<svg className='w-5 h-5 mr-2' version="1.1" fill="currentColor" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 258.75 258.75">
												<g>
													<circle cx="129.375" cy="60" r="60"/>
													<path d="M129.375,150c-60.061,0-108.75,48.689-108.75,108.75h217.5C238.125,198.689,189.436,150,129.375,150z"/>
												</g>
											</svg>
											Admin
										</div>
										<div className="inline-flex">
											<svg className='w-5 h-5 mr-2' fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 512 512">
												<g>
													<path d="m480,80h-80v-32c0-17.672-14.328-32-32-32-17.672,0-32,14.328-32,32v32h-160v-32c0-17.672-14.328-32-32-32-17.672,0-32,14.328-32,32v32h-80c-17.673,0-32,14.327-32,32v32h512v-32c0-17.673-14.327-32-32-32z"/>
													<path d="m0,464c0,17.673 14.327,32 32,32h448c17.673,0 32-14.327 32-32v-288h-512v288zm256-208h81.637c14.117,0 19.719,12.102 14.117,21.969l-66.789,125.727c-7.617,16.367-35.859,8.043-26-9.434l57.828-106.262h-60.793c-16,0-16-32 0-32zm-85.128,13.672l32.506-11.656c10.305-4.477 20.622-0.219 20.622,15.695v126.289c0,16-32,16-32,0v-108.359l-13.041,5.375c-17.93,5.828-28.485-20.618-8.087-27.344z"/>
												</g>
											</svg>
											December 8, 2022</div>
									</div>
									<h4 className='mb-2'>
										<NextLink
											href="#"
											className="text-xl font-bold"
										>
											The Steps to Gaining Privileged Access Security
										</NextLink>
									</h4>
									<NextLink
										href="#"
										className="inline-flex items-center text-white group mb-2"
									>
										Read More
										<svg aria-hidden="true" className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" fill="currentColor" strokeWidth="1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
									</NextLink>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="p-4 rounded-lg border text-dark-100 dark:bg-dark-500 shadow-sm dark:border-dark-500 dark:text-white-100">
								<NextLink
									href="#"
								>
									<Image
										className="rounded-lg w-full"
										src="/assets/images/posts/post-2.jpg"
										alt="Post"
										width={330}
										height={250}
									/>
								</NextLink>
								<div>
									<div className="flex items-center flex-wrap py-4 text-white-400 ">
										<div className="inline-flex mr-4">
											<svg className='w-5 h-5 mr-2' version="1.1" fill="currentColor" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 258.75 258.75">
												<g>
													<circle cx="129.375" cy="60" r="60"/>
													<path d="M129.375,150c-60.061,0-108.75,48.689-108.75,108.75h217.5C238.125,198.689,189.436,150,129.375,150z"/>
												</g>
											</svg>
											Admin
										</div>
										<div className="inline-flex">
											<svg className='w-5 h-5 mr-2' fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 512 512">
												<g>
													<path d="m480,80h-80v-32c0-17.672-14.328-32-32-32-17.672,0-32,14.328-32,32v32h-160v-32c0-17.672-14.328-32-32-32-17.672,0-32,14.328-32,32v32h-80c-17.673,0-32,14.327-32,32v32h512v-32c0-17.673-14.327-32-32-32z"/>
													<path d="m0,464c0,17.673 14.327,32 32,32h448c17.673,0 32-14.327 32-32v-288h-512v288zm256-208h81.637c14.117,0 19.719,12.102 14.117,21.969l-66.789,125.727c-7.617,16.367-35.859,8.043-26-9.434l57.828-106.262h-60.793c-16,0-16-32 0-32zm-85.128,13.672l32.506-11.656c10.305-4.477 20.622-0.219 20.622,15.695v126.289c0,16-32,16-32,0v-108.359l-13.041,5.375c-17.93,5.828-28.485-20.618-8.087-27.344z"/>
												</g>
											</svg>
											December 8, 2022</div>
									</div>
									<h4 className='mb-2'>
										<NextLink
											href="#"
											className="text-xl font-bold"
										>
											The Steps to Gaining Privileged Access Security
										</NextLink>
									</h4>
									<NextLink
										href="#"
										className="inline-flex items-center text-white group mb-2"
									>
										Read More
										<svg aria-hidden="true" className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" fill="currentColor" strokeWidth="1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
									</NextLink>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="p-4 rounded-lg border text-dark-100 dark:bg-dark-500 shadow-sm dark:border-dark-500 dark:text-white-100">
								<NextLink
									href="#"
								>
									<Image
										className="rounded-lg w-full"
										src="/assets/images/posts/post-3.jpg"
										alt="Post"
										width={330}
										height={250}
									/>
								</NextLink>
								<div>
									<div className="flex items-center flex-wrap py-4 text-white-400 ">
										<div className="inline-flex mr-4">
											<svg className='w-5 h-5 mr-2' version="1.1" fill="currentColor" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 258.75 258.75">
												<g>
													<circle cx="129.375" cy="60" r="60"/>
													<path d="M129.375,150c-60.061,0-108.75,48.689-108.75,108.75h217.5C238.125,198.689,189.436,150,129.375,150z"/>
												</g>
											</svg>
											Admin
										</div>
										<div className="inline-flex">
											<svg className='w-5 h-5 mr-2' fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 512 512">
												<g>
													<path d="m480,80h-80v-32c0-17.672-14.328-32-32-32-17.672,0-32,14.328-32,32v32h-160v-32c0-17.672-14.328-32-32-32-17.672,0-32,14.328-32,32v32h-80c-17.673,0-32,14.327-32,32v32h512v-32c0-17.673-14.327-32-32-32z"/>
													<path d="m0,464c0,17.673 14.327,32 32,32h448c17.673,0 32-14.327 32-32v-288h-512v288zm256-208h81.637c14.117,0 19.719,12.102 14.117,21.969l-66.789,125.727c-7.617,16.367-35.859,8.043-26-9.434l57.828-106.262h-60.793c-16,0-16-32 0-32zm-85.128,13.672l32.506-11.656c10.305-4.477 20.622-0.219 20.622,15.695v126.289c0,16-32,16-32,0v-108.359l-13.041,5.375c-17.93,5.828-28.485-20.618-8.087-27.344z"/>
												</g>
											</svg>
											December 8, 2022</div>
									</div>
									<h4 className='mb-2'>
										<NextLink
											href="#"
											className="text-xl font-bold"
										>
											The Steps to Gaining Privileged Access Security
										</NextLink>
									</h4>
									<NextLink
										href="#"
										className="inline-flex items-center text-white group mb-2"
									>
										Read More
										<svg aria-hidden="true" className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" fill="currentColor" strokeWidth="1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
									</NextLink>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="p-4 rounded-lg border text-dark-100 dark:bg-dark-500 shadow-sm dark:border-dark-500 dark:text-white-100">
								<NextLink
									href="#"
								>
									<Image
										className="rounded-lg w-full"
										src="/assets/images/posts/post-1.jpg"
										alt="Post"
										width={330}
										height={250}
									/>
								</NextLink>
								<div>
									<div className="flex items-center flex-wrap py-4 text-white-400 ">
										<div className="inline-flex mr-4">
											<svg className='w-5 h-5 mr-2' version="1.1" fill="currentColor" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 258.75 258.75">
												<g>
													<circle cx="129.375" cy="60" r="60"/>
													<path d="M129.375,150c-60.061,0-108.75,48.689-108.75,108.75h217.5C238.125,198.689,189.436,150,129.375,150z"/>
												</g>
											</svg>
											Admin
										</div>
										<div className="inline-flex">
											<svg className='w-5 h-5 mr-2' fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 512 512">
												<g>
													<path d="m480,80h-80v-32c0-17.672-14.328-32-32-32-17.672,0-32,14.328-32,32v32h-160v-32c0-17.672-14.328-32-32-32-17.672,0-32,14.328-32,32v32h-80c-17.673,0-32,14.327-32,32v32h512v-32c0-17.673-14.327-32-32-32z"/>
													<path d="m0,464c0,17.673 14.327,32 32,32h448c17.673,0 32-14.327 32-32v-288h-512v288zm256-208h81.637c14.117,0 19.719,12.102 14.117,21.969l-66.789,125.727c-7.617,16.367-35.859,8.043-26-9.434l57.828-106.262h-60.793c-16,0-16-32 0-32zm-85.128,13.672l32.506-11.656c10.305-4.477 20.622-0.219 20.622,15.695v126.289c0,16-32,16-32,0v-108.359l-13.041,5.375c-17.93,5.828-28.485-20.618-8.087-27.344z"/>
												</g>
											</svg>
											December 8, 2022</div>
									</div>
									<h4 className='mb-2'>
										<NextLink
											href="#"
											className="text-xl font-bold"
										>
											The Steps to Gaining Privileged Access Security
										</NextLink>
									</h4>
									<NextLink
										href="#"
										className="inline-flex items-center text-white group mb-2"
									>
										Read More
										<svg aria-hidden="true" className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" fill="currentColor" strokeWidth="1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
									</NextLink>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</section>
	)
}

export default Posts;