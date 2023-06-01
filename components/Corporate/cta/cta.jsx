import React from 'react';
import Image from 'next/image';
import NextLink from 'next/link';

function CTA() {
	return (
		<section className="py-12 md:py-28 bg-white-200 dark:bg-dark-600">
			<div className="container mx-auto">
				<div className="rounded-2xl bg-gradient-to-r dark:from-blue-400 dark:via-blue-300 dark:to-blue-200 from-cyan-400 via-cyan-300 to-blue-200 relative">
					<div className="flex flex-row flex-wrap">
						<div className="lg:w-7/12 p-10">
							<h2 className="h2 mb-6 text-4xl md:text-6xl font-extrabold text-white-100 tracking-tight">Are you Ready to Start your project</h2>

							<div className="flex flex-row flex-wrap mb-8">
								<ul className="w-full sm:w-1/2 space-y-4 md:text-xl text-left leading-loose text-white-100 mb-4">
									<li className="flex items-center space-x-3">
										<svg className="flex-shrink-0 w-7 h-7 p-1 rounded-full text-white-100 dark:bg-dark-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>50+ beautiful templates</span>
									</li>
									<li className="flex items-center space-x-3">
										<svg className="flex-shrink-0 w-7 h-7 p-1 rounded-full text-white-100 dark:bg-dark-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>Styleguide included</span>
									</li>
									<li className="flex items-center space-x-3">
										<svg className="flex-shrink-0 w-7 h-7 p-1 rounded-full text-white-100 dark:bg-dark-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>Library of UI elements</span>
									</li>
								</ul>
								<ul className="w-full sm:w-1/2 space-y-4 md:text-xl text-left leading-loose text-white-100 mb-4">
									<li className="flex items-center space-x-3">
										<svg className="flex-shrink-0 w-7 h-7 p-1 rounded-full text-white-100 dark:bg-dark-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>380 UI components</span>
									</li>
									<li className="flex items-center space-x-3">
										<svg className="flex-shrink-0 w-7 h-7 p-1 rounded-full text-white-100 dark:bg-dark-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>Free Font included</span>
									</li>
									<li className="flex items-center space-x-3">
										<svg className="flex-shrink-0 w-7 h-7 p-1 rounded-full text-white-100 dark:bg-dark-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>Bootstrap Latest Version</span>
									</li>
								</ul>
							</div>
							<div className="flex flex-wrap">
								<NextLink
									className="md:text-xl text-white-100 bg-gradient-to-r from-purple-400 to-blue-200 hover:bg-gradient-to-br focus:outline-none font-medium rounded-lg px-7 py-4 text-center mr-4 mt-4"
									href="#"
								>
									Request for Demos
								</NextLink>
								<NextLink
									className="md:text-xl transition-colors text-white-100 border border-white-100  hover:text-dark-100 hover:bg-white-100 focus:outline-none font-medium rounded-lg px-7 py-4 text-center mt-4"
									href="#"
								>
									Contact Us
								</NextLink>
							</div>
						</div>
						<div className="lg:w-5/12 flex-shrink-0 hidden lg:block">
							<div className="absolute z-[1] pt-10">
								<Image
									src="/assets/images/cta/dot-shape-color.svg"
									alt="Dot Shape"
									width={200}
									height={200}
								/>
							</div>
							<div className="absolute hidden lg:block top-[-40px] right-[-40px]">
								<Image
									src="/assets/images/cta/paper-plane.png"
									alt="Plane"
									width={196}
									height={118}
								/>
							</div>
							<div className="h-full rounded-br-2xl overflow-hidden relative z-[2] bg-[url('/assets/images/cta/dashboard-img.png')] bg-[left_50px_top_100px] bg-no-repeat">
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CTA;