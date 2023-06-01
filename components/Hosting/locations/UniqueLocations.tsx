import Image from 'next/image';
import React, { Suspense, useEffect } from 'react';

import { Canvas, useLoader }  from '@react-three/fiber';

import Planet from './Planet';
import { OrbitControls } from '@react-three/drei';

function UniqueLocations() {
	return (
		<section className="relative bg-dark-200 dark:bg-dark-500 overflow-hidden">
			<div className="relative container mx-auto px-4">
				<div className="flex flex-wrap items-center">
					<div className="w-full md:w-1/3 py-10">
						<h2 className="h2 mb-6 text-4xl md:text-[40px] font-extrabold text-white-100 dark:text-white-100 tracking-tight capitalize">4 Unique Locations</h2>
						<p className="mb-6 md:text-2xl text-white-100 dark:text-white-300 leading-relaxed">
							With multiple locations from London, Germany, Miami, Florida and Los Angles. We make sure to keep the US & EU Covered.
						</p>
						<div className="flex flex-wrap mb-10">
							<div className="w-full sm:w-1/2">
								<ul className="space-y-4 md:text-xl text-left text-white-100 leading-loose mb-4">
									<li className="flex items-center space-x-3">
										<Image
											className="w-auto h-5"
											src="/assets/images/games/icons/uk.svg"
											alt="UK"
											width={41}
											height={25}
										/>
										<span> United Kingdom</span>
									</li>
									<li className="flex items-center space-x-3">
										<Image
											className="w-auto h-5"
											src="/assets/images/games/icons/usa.svg"
											alt="UK"
											width={41}
											height={25}
										/>
										<span> New York</span>
									</li>
								</ul>
							</div>
							<div className="w-full sm:w-1/2">
								<ul className="space-y-4 md:text-xl text-white-100 text-left leading-loose mb-4">
									<li className="flex items-center space-x-3">
										<Image
											className="w-auto h-5"
											src="/assets/images/games/icons/usa.svg"
											alt="UK"
											width={41}
											height={25}
										/>
										<span> Florida</span>
									</li>
									<li className="flex items-center space-x-3">
										<Image
											className="w-auto h-5"
											src="/assets/images/games/icons/germany.svg"
											alt="UK"
											width={41}
											height={25}
										/>
										<span> Germany</span>
									</li>
								</ul>
							</div>
						</div>
						<button type="button" className="md:text-xl py-4 px-8 text-white-100 border-2 border-blue-200 transition-colors rounded-lg uppercase hover:bg-blue-200 font-semibold">
							Try one of our locations
						</button>
					</div>
					<div className="w-full md:w-2/3 flex-shrink-0 md:mx-auto">
						<Canvas
							className="relative planet"
							camera={{ position: [0, 5, 4], fov: 90 }}
							style={{
								width: '100%',
								height: '600px',
								background: 'transparent',
							}}
						>
							<ambientLight intensity={0.5} />
							<directionalLight position={[-1, 3, 4]} />
							<Suspense fallback={null}>
								<Planet />
							</Suspense>
						</Canvas>
					</div>
				</div>
			</div>
		</section>
	)
}

export default UniqueLocations;