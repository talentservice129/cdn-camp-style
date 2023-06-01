import Image from 'next/image';
import React from 'react';
import gameHostingMCFeatures from "../../../data/game_hosting_mc_features.json"
import GameHostingMCFeaturesTypes from '../../../interfaces/gameHostingMCFeatures';

const MCFeaturesSection = () => {
    return (
        <section className="bg-gradient-to-t from-white-100/[30%] to-transparent dark:bg-none py-12 md:py-28">
            <div className="container mx-auto px-4">
                <div className="heading text-center mb-16">
                    <p className="md:text-xl dark:text-blue-300 text-black mb-3 font-semibold text-center">Features</p>
                    <h2 className="h2 mb-4 text-4xl md:text-4xl font-extrabold dark:text-white-100 text-black tracking-tight text-center">We Provide</h2>
                </div>
                <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {
                        gameHostingMCFeatures.features.map((feature, index) => (
                            <MCFeatureCard key={index} heading={feature.heading} img={feature.img} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default MCFeaturesSection;

function MCFeatureCard ({key, heading, img}: GameHostingMCFeaturesTypes) {
    return (
        <div key={key} className="flex items-center justify-start gap-3 rounded-[32px] border-2 border-white-100 bg-white-100 p-6 drop-shadow-[5px_10px_60px_rgba(119,128,161,0.08)] transition hover:border-blue-200 hover:bg-blue-200/10 dark:border-dark-200 dark:bg-dark-200 dark:hover:border-blue-200 sm:justify-center md:p-10">
            <div>
                <Image
                    src={img}
                    alt="feature"
                    width={50}
                    height={50}
                />
            </div>
            <h6 className="text-xl font-bold text-black dark:text-white-100">{ heading }</h6>
        </div>
    )
}