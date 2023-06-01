import React, { ChangeEvent, useMemo, useState } from "react";
import { 
    Collapse,
    useDisclosure
} from '@chakra-ui/react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { TfiAngleDown } from 'react-icons/tfi';
import { BsClock } from "react-icons/bs";
import { intersection } from 'lodash';

import gameHostingDedicatedServers from "../../../data/game_hosting_dedicated_servers.json";

export default function DedicatedServerLineUps() {
    const [cores, setCores] = useState(gameHostingDedicatedServers.filters.cores);

    const { isOpen: advanced, onToggle: toggleAdvanced } = useDisclosure();
    const [cpuFilters, setCPUFilters] = useState([gameHostingDedicatedServers.filters.cpu.min, gameHostingDedicatedServers.filters.cpu.max]);
    const [ramFilters, setRAMFilters] = useState([gameHostingDedicatedServers.filters.ram.min, gameHostingDedicatedServers.filters.ram.max]);
    const [priceFilters, setPriceFilters] = useState([gameHostingDedicatedServers.filters.price.min, gameHostingDedicatedServers.filters.price.max]);
    const [hardFilters, setHardFilters] = useState(gameHostingDedicatedServers.filters.hard);
    const [typeFilters, setTypeFilters] = useState(gameHostingDedicatedServers.filters.type);

    const filteredServers = useMemo(() => {
        return gameHostingDedicatedServers.servers.map(server => {
            let types = server.types.filter(type => {
               let match = false;

               match = cores.findIndex((core: string) => core === type.cpuCore.toString() ) > 0;
               match && ( match = (!type.cpuSpec || (type.cpuSpec >= cpuFilters[0] && type.cpuSpec <= cpuFilters[1] )) );
               match && ( match = (!type.ramModel || (type.ramCap >= ramFilters[0] && type.ramCap <= ramFilters[1] )) );
               match && ( match = (type.price >= priceFilters[0] && type.price <= priceFilters[1] ) );
               match && ( match = (type.hardDesc === "Configurable" || intersection(type.hardType, hardFilters).length > 0) );
               match && ( match = (typeFilters.findIndex((item) => item === type.type) > -1) );

               return match;
            });

            return {
                ...server,
                types: types
            };
        });
    }, [ cores, cpuFilters, ramFilters, priceFilters, hardFilters, typeFilters ]);

    const coreItemChecked = (key: string): boolean => {
        return cores.findIndex((core: string) => key === core ) > -1;
    }

    const toggleCoreItem = (e: ChangeEvent) => {
        let target = e.target as HTMLInputElement;
    
        if ( !target.checked ) {
            setCores(cores.filter((core: string) => core !== target.value));
        } else {
            setCores([
                ...cores,
                target.value
            ]);
        }
    }

    const hardItemChecked = (key: string): boolean => {
        return hardFilters.findIndex((hard: string) => key === hard ) > -1;
    }

    const toggleHardItem = (e: ChangeEvent) => {
        let target = e.target as HTMLInputElement;
    
        if ( !target.checked ) {
            setHardFilters(hardFilters.filter((hard: string) => hard !== target.value));
        } else {
            setHardFilters([
                ...hardFilters,
                target.value
            ]);
        }
    }

    const typeItemChecked = (key: string): boolean => {
        return typeFilters.findIndex((type: string) => key === type ) > -1;
    }

    const toggleTypeItem = (e: ChangeEvent) => {
        let target = e.target as HTMLInputElement;
    
        if ( !target.checked ) {
            setTypeFilters(typeFilters.filter((type: string) => type !== target.value));
        } else {
            setTypeFilters([
                ...typeFilters,
                target.value
            ]);
        }
    }

    return (
        <>
            <div>
            <section className={"bg-white-100 dark:bg-dark-200 shadow-[2px_0_30px_rgba(0,1,1,.15)] sticky top-0"}>
                <div className="container px-4 mx-auto">
                    <div className="mb-4 pt-5">
                        <label className="block text-sm uppercase font-bold mb-5">Dedicated Servers</label>
                        <div className="flex flex-wrap justify-between gap-4">
                            {
                                gameHostingDedicatedServers.filters.cores.map((core: string, index: number) => (
                                    <label key={index} className="inline-flex items-center text-sm font-semibold tracking-tight text-gray-900 dark:text-gray-300 mb-4">
                                        <input onChange={toggleCoreItem} checked={ coreItemChecked(core) } type="checkbox" name="core" value={core} className="form-check-input peer w-[22px] h-[22px] appearance-none ring-0 outline-none rounded-sm bg-white-100 border border-gray-300 checked:border-blue-200 checked:bg-blue-200 mr-2" />
                                        <span className="peer-checked:text-blue-200">{gameHostingDedicatedServers.filters.coreTitles[core]}</span>
                                    </label>
                                ))
                            }
                        </div>
                    </div>
                    <Collapse in={ advanced }>
                        <div className="pt-7 relative border-t-2 border-dotted border-t-white-300 dark:border-t-dark2-300 flex flex-wrap">
                            <div className="mb-4 w-full lg:w-[31.1%] lg:mb-8 lg:mr-[3.3%] xl:w-1/6 xl:mr-[2.5%] xl:mb-0">
                                <label className="block text-sm uppercase font-bold mb-5">CPU Speed</label>
                                <RangeSlider
                                    className="my-4 scale-75 origin-left !w-[133.33%]"
                                    step={0.1}
                                    min={gameHostingDedicatedServers.filters.cpu.min}
                                    max={gameHostingDedicatedServers.filters.cpu.max}
                                    defaultValue={[gameHostingDedicatedServers.filters.cpu.min, gameHostingDedicatedServers.filters.cpu.max]}
                                    onInput={setCPUFilters}
                                />
                                <div className="flex justify-between">
                                    <span>{ cpuFilters[0] }Ghz</span>
                                    <span>{ cpuFilters[1] }Ghz</span>
                                </div>
                            </div>
                            <div className="mb-4 w-full lg:w-[31.1%] lg:mb-8 lg:mr-[3.3%] xl:w-1/6 xl:mr-[2.5%] xl:mb-0">
                                <label className="block text-sm uppercase font-bold mb-5">RAM</label>
                                <RangeSlider
                                    className="my-4 scale-75 origin-left !w-[133.33%]"
                                    step={1}
                                    min={gameHostingDedicatedServers.filters.ram.min}
                                    max={gameHostingDedicatedServers.filters.ram.max}
                                    defaultValue={[gameHostingDedicatedServers.filters.ram.min, gameHostingDedicatedServers.filters.ram.max]}
                                    onInput={setRAMFilters}
                                />
                                <div className="flex justify-between">
                                    <span>{ ramFilters[0] }GB</span>
                                    <span>{ ramFilters[1] }GB</span>
                                </div>
                            </div>
                            <div className="mb-4 w-full lg:w-[31.1%] lg:mb-8 xl:w-1/6 xl:mr-[2.5%] xl:mb-0">
                                <label className="block text-sm uppercase font-bold mb-5">Price / Month</label>
                                <RangeSlider
                                    className="my-4 scale-75 origin-left !w-[133.33%]"
                                    step={1}
                                    min={gameHostingDedicatedServers.filters.price.min}
                                    max={gameHostingDedicatedServers.filters.price.max}
                                    defaultValue={[gameHostingDedicatedServers.filters.price.min, gameHostingDedicatedServers.filters.price.max]}
                                    onInput={setPriceFilters}
                                />
                                <div className="flex justify-between">
                                    <span>${ priceFilters[0] }</span>
                                    <span>${ priceFilters[1] }</span>
                                </div>
                            </div>
                            <div className="mb-4 w-full sm:w-[185px] sm:mr-4 xl:mr-[1.6%] xl:pl-[2.3%] xl:border-l-2 xl:border-dotted xl:border-l-white-300">
                                <label className="block text-sm uppercase font-bold mb-5">Hard Drvie Type</label>
                                {
                                    gameHostingDedicatedServers.filters.hard.map((hard: string, index: number) => (
                                        <label key={index} className="inline-flex items-center text-sm font-semibold tracking-tight text-gray-900 dark:text-gray-300 mb-4 mr-4">
                                            <input onChange={toggleHardItem} checked={ hardItemChecked(hard) } type="checkbox" name="hard" value={hard} className="form-check-input peer w-[22px] h-[22px] appearance-none ring-0 outline-none rounded-sm bg-white-100 border border-gray-300 checked:border-blue-200 checked:bg-blue-200 mr-2" />
                                            <span className="peer-checked:text-blue-200 uppercase">{hard}</span>
                                        </label>
                                    ))
                                }
                            </div>
                            <div className="mb-4 w-full sm:w-auto sm:flex-grow sm:pl-[2.3%] sm:border-l-2 sm:border-dotted sm:border-l-white-300">
                                <label className="block text-sm uppercase font-bold mb-5">Server Type</label>
                                {
                                    gameHostingDedicatedServers.filters.type.map((type: string, index: number) => (
                                        <label key={index} className="inline-flex items-center text-sm font-semibold tracking-tight text-gray-900 dark:text-gray-300 mb-4 mr-4">
                                            <input onChange={toggleTypeItem} checked={ typeItemChecked(type) } type="checkbox" name="type" value={type} className="form-check-input peer w-[22px] h-[22px] appearance-none ring-0 outline-none rounded-sm bg-white-100 border border-gray-300 checked:border-blue-200 checked:bg-blue-200 mr-2" />
                                            <span className="peer-checked:text-blue-200 uppercase">{ gameHostingDedicatedServers.filters.typeTitles[type] }</span>
                                        </label>
                                    ))
                                }
                            </div>
                        </div>
                    </Collapse>
                    <button
                        onClick={toggleAdvanced}
                        className="p-4 uppercase w-full text-center text-blue-200"
                    >{ advanced ? "Hide" : "Show" } Advanced Filters</button>
                </div>
            </section>

            <section className="py-12 md:py-18">
                <div className="container px-4 mx-auto">
                    <div className="">
                        <table className="w-full">
                            <thead className="text-xs text-gray-800 dark:text-gray-300 font-bold uppercase text-left">
                                <tr>
                                    <th className="py-6 pl-[20px] pr-[10px]">Server</th>
                                    <th className="py-6 pl-[20px] pr-[10px]">Server Type</th>
                                    <th className="py-6 pl-[20px] pr-[10px]">CPU</th>
                                    <th className="py-6 pl-[20px] pr-[10px]">Memory</th>
                                    <th className="py-6 pl-[20px] pr-[10px]">Hard Drive</th>
                                    <th className="py-6 pl-[20px] pr-[10px]">Setup Time</th>
                                    <th className="py-6 pl-[20px] pr-[10px]">Price</th>
                                    <th className="py-6 pl-[20px] pr-[10px]"></th>
                                </tr>
                            </thead>
                            {
                                filteredServers.map(( server, index: number ) => (
                                    (server.types.length > 0) && (
                                        <tbody key={index} className="border-b-[20px] border-b-dark-100">
                                            {
                                                server.types.map((type, typeKey: number) => (
                                                    <tr key={typeKey}>
                                                        { typeKey === 0 && <td className="py-[15px] pl-5 pr-[10px] bg-dark-200 border-b-2 border-b-dark-100 border-r-dark-100 border-r-2" rowSpan={server.types.length}>{ server.name }</td> }
                                                        <td className="py-[15px] pl-5 pr-[10px] bg-dark-200 border-b-2 border-b-dark-100">{ type.type === 'custom' ? "Custom Config" : "Rapid Deploy" }</td>
                                                        <td className="py-[15px] pl-5 pr-[10px] bg-dark-200 border-b-2 border-b-dark-100">{ type.cpuCore } x { type.cpuSpec ? type.cpuSpec + "GHz" : "Varies" }</td>
                                                        <td className="py-[15px] pl-5 pr-[10px] bg-dark-200 border-b-2 border-b-dark-100">{ type.ramModel ? `${type.ramCap}GB ${type.ramModel}` : "Configurable" }</td>
                                                        <td className="py-[15px] pl-5 pr-[10px] bg-dark-200 border-b-2 border-b-dark-100">{ type.hardDesc }</td>
                                                        <td className={"py-[15px] pl-5 pr-[10px] bg-dark-200 border-b-2 border-b-dark-100 align-middle " + ( type.setupTime > 10 ? '' : 'text-blue-200' )}><BsClock size={16} className="mr-1 inline-block align-middle" /><span className="align-middle">{ type.setupTime + ( type.setupTime > 10 ? 'h' : 'm') }</span></td>
                                                        <td className="py-[15px] pl-5 pr-[10px] bg-dark-200 border-b-2 border-b-dark-100">${ type.price }/mo</td>
                                                        <td className="py-[15px] pl-5 pr-[10px] bg-dark-200 border-b-2 border-b-dark-100">
                                                            <a href="#" className="uppercase mr-5 font-bold text-sm text-blue-200">Details</a>
                                                            <a href="#" className="uppercase font-bold text-sm text-blue-200">Order Now <TfiAngleDown className="inline-block ml-0.5" /></a>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    )
                                ))
                            }
                        </table>
                    </div>
                </div>
            </section>
            </div>
        </>
    )
}