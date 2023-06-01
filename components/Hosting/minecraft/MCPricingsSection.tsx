import Image from 'next/image';
import React, { useState } from 'react';
import gameHostingMCPricings from "../../../data/game_hosting_mc_pricings.json"
import GameHostingMCPricingTypes from '../../../interfaces/gameHostingMCPricing';
import Link from 'next/link';
const MCPricingsSection = () => {
    const [pricing, setPricing] = useState<'standard' | 'premium' | 'extreme'>('standard');

    return (
        <section className="py-12 md:py-28">
            <div className="container xl:max-w-[1200px] mx-auto px-4">
                <div className="heading text-center mb-5">
                    <h2 className="h2 mb-4 text-4xl md:text-4xl font-extrabold dark:text-white-100 text-black tracking-tight text-center">MINECRAFT HOSTING</h2>
                    <p>Switch to premium features to enable all of our locations and take advantage of our premium hardware and other features.</p>
                </div>

                <ul className="items-center w-full mx-auto lg:w-[600px] text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white mb-16">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input id="horizontal-list-radio-license" checked={ pricing === 'standard' } onClick={ () => setPricing('standard') } type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label htmlFor="horizontal-list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Standard </label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input id="horizontal-list-radio-id" checked={ pricing === 'premium' } onClick={ () => setPricing('premium') } type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label htmlFor="horizontal-list-radio-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Premium</label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input id="horizontal-list-radio-millitary" checked={ pricing === 'extreme' } onClick={ () => setPricing('extreme') } type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label htmlFor="horizontal-list-radio-millitary" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Extreme</label>
                        </div>
                    </li>
                </ul>

                <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {
                        gameHostingMCPricings.pricings.map((item, index) => (
                            <Pricing key={index} {...item} pricing={ pricing } />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

const Pricing: React.FC<GameHostingMCPricingTypes & { pricing: 'standard' | 'premium' | 'extreme', key: number }> = ({pricing, ...item}) => {
    return (
        <div className="pb-7 mt-16 bg-[url('/assets/images/games/mc/topbg.png')] bg-[length:100%_44px] bg-no-repeat text-center bg-[#24253a] text-white-100">
            <Image src={item.img} alt="pricing" width={82} height={93} className="-mt-[46px] mx-auto mb-4" />
            <h4 className="font-bold uppercase text-2xl">{ item.name }</h4>
            <span>
                <strong>{ item.slots }</strong> Player Slots
                <span className="ml-2 group inline-block relative z-20">
                    <span className="bg-blue-200 p-1 border-dark-100 border w-6 h-6   leading-none inline-block rounded-full">?</span>
                    <span className="group-hover:opacity-100 transition-opacity w-[300px] top-5 bg-gray-800 p-2 text-sm text-gray-100 rounded-md absolute left-1/2
                    -translate-x-1/2 opacity-0 m-4 mx-auto before:content-[''] before:absolute before:border-[6px] before:border-transparent before:border-b-gray-800 before:bottom-full before:left-1/2 before:-translate-x-1/2">Set your own player slots for a $2.00 one-time fee, or for free on premium plans.</span>
                </span>
            </span>
            <div className="bg-[url('/assets/images/games/mc/mc-price.png')] bg-no-repeat bg-center overflow-y-hidden w-[calc(100%_+_21px)] -ml-3 h-[84px] -mb-3 mt-5 relative z-10">
                <h3 className="font-bold text-4xl pt-[20px]">{ item[pricing] }<sub className="bottom-0 text-4xl">.00</sub><small className="text-xl">/mo</small></h3>
            </div>
            <div className="mb-5">
                <Link href="#" className="inline-block w-4/5 h-12 leading-[52px] p-0 text-center text-white-100 -mt-[10px] mx-auto rotate-2 bg-[#ff2b35] hover:bg-black uppercase font-bold text-sm">
                    <span className="block -rotate-2">Select Location</span>
                </Link>
            </div>
            <div className="text-gray-200"><strong className="text-white-100 text-xl">{ item.ram }</strong> MB Ram</div>
        </div>
    )
}

const Pricing2: React.FC<GameHostingMCPricingTypes & { pricing: 'standard' | 'premium' | 'extreme', key: number }> = ({pricing, ...item}) => {
    return (
        <div>

        </div>
    )
}

export default MCPricingsSection;