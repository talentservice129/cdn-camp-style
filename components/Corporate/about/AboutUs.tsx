import React from 'react';
import Image from 'next/image';
import NextLink from 'next/link';

function AboutUs() {
	return (
		<section className="relative">
			<div className="relative container mx-auto">
				<div className="py-12 md:py-28">
					<div className="flex flex-row flex-wrap justify-center items-center space-x-10 space-y-10">
						<div className="md:basis-auto">
							<Image
								src="/assets/images/about-us.png"
								width={543}
								alt="Abouit us"
								height={642}
							/>
						</div>
						<div className="md:flex-1 flex flex-col items-center md:items-center">
							<h4
								className="inline-block font-semibold md:text-xl rounded-lg px-4 py-2.5 bg-gray-700 dark:bg-dark-600 mb-4"
							>
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-200">
									Corporate About
								</span>
							</h4>
							<h2 className="h2 mb-4 text-4xl md:text-6xl font-extrabold dark:text-white-100 text-black tracking-tight capitalize">About our business</h2>
							<p className="text-xl leading-loose my-8">
								In addition to our top-of-the-line technology, we also offer a range of customizable hosting plans to fit your specific needs. Whether you are a small business or a large enterprise, we have a solution that will meet your requirements and budget.
								Our team is dedicated to providing excellent customer support and assistance, so you can focus on running your business without worrying about your server hosting. We are available 24/7 to answer any questions or concerns you may have, and will work with you to ensure that your server hosting experience is seamless and stress-free.
								Choose OpticEngine for the best in server technology and top-of-the-range hosting. Contact us today to learn more and get started with our services.
							</p>
							<ul className="mb-16 space-y-4 md:text-xl text-left leading-loose text-dark-100 dark:text-white-100">
								<li className="flex items-center space-x-3">
									<svg className="flex-shrink-0 w-7 h-7 p-1 rounded-full text-dark-100 dark:text-white-100 dark:bg-dark-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
									<span>For Individuals</span>
								</li>
								<li className="flex items-center space-x-3">
									<svg className="flex-shrink-0 w-7 h-7 p-1 rounded-full text-dark-100 dark:text-white-100 dark:bg-dark-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
									<span>For Teams</span>
								</li>
								<li className="flex items-center space-x-3">
									<svg className="flex-shrink-0 w-7 h-7 p-1 rounded-full text-dark-100 dark:text-white-100 dark:bg-dark-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
									<span>For Startups</span>
								</li>
								<li className="flex items-center space-x-3">
									<svg className="flex-shrink-0 w-7 h-7 p-1 rounded-full text-dark-100 dark:text-white-100 dark:bg-dark-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
									<span>For Enterprises</span>
								</li>
							</ul>
							<NextLink
								className="md:text-xl text-white-100 bg-gradient-to-r from-purple-400 to-blue-200 hover:bg-gradient-to-br focus:outline-none font-medium rounded-lg px-7 py-4 text-center"
								href="#"
							>
								More About Us
							</NextLink>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutUs;