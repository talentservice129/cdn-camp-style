import Image from 'next/image';
import React from 'react';

import gameHostingVPS from '../../../data/game_hosting_vps.json';

const VPSCloudElement = () => {
    return (
        <div className="pt-12 pb-[120px] relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-12 before:h-[3px] before:bg-blue-200">
            <h2 className="text-4xl mb-10 tracking-tight">Cloud Compute</h2>
            <p className="font-light mb-4">
                These virtual machines run atop shared vCPUs, and are suitable for many business and personal applications: low traffic websites, blogs, CMS, dev/test environments, small databases, and much more.
            </p>
            <p className="font-light mb-4">
                Choose High Performance or High Frequency plans for the newer generations of AMD or Intel CPUs, along with NVMe SSD.
            </p>

            <div className="mt-16">
                <div className="flex items-center mb-8">
                    <Image className="flex-shrink-0 mr-6" src="/assets/images/vps/regular.svg" alt="Regular Performance" width={34} height={35} />
                    <h3 className="text-2xl font-bold">Regular Performance</h3>
                </div>
                <p className="font-light mb-10">
                    Powered by previous generation Intel CPUs and regular SSD.
                </p>
                <div className="relative overflow-x-auto shadow-lg sm:rounded-lg py-4 px-6 bg-white-100 dark:bg-dark-200">
                    <table className="w-full text-left leading-loose tracking-tighter">
                        <thead className="text-sm text-gray-700 dark:text-gray-400 border-b">
                            <tr>
                                <th scope="col" className="pr-6 py-4">
                                    vCPUs
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Memory
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Bandwidth
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Storage
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Monthly Price
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Hourly Price
                                </th>
                            </tr>
                        </thead>
                        <tbody className="font-normal">
                            {gameHostingVPS.vps.map((vps, index) => (
                                <tr key={index} className="border-b last:border-0">
                                    <th scope="row" className="pr-6 py-4">
                                        <strong>{ vps.cpu }</strong>&nbsp;vCPU
                                    </th>
                                    <td className="px-6 py-4">
                                        <strong>{ vps.memory }</strong>&nbsp;GB
                                    </td>
                                    <td className="px-6 py-4">
                                        <strong>{ vps.bandwidth.toFixed(2) }</strong>&nbsp;TB 
                                    </td>
                                    <td className="px-6 py-4">
                                        <strong>{ vps.storage }</strong>&nbsp;GB
                                    </td>
                                    <td className="px-6 py-4 text-blue-200">
                                        <strong>${ (vps.moPrice % 1 > 0 ? vps.moPrice.toFixed(2) : vps.moPrice ) }</strong>&nbsp;/mo
                                    </td>
                                    <td className="px-6 py-4 text-blue-200">
                                        <strong>${ vps.hrPrice.toFixed(3) }</strong>&nbsp;/hr
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="mt-16">
                <div className="flex items-center mb-8">
                    <Image className="flex-shrink-0 mr-6" src="/assets/images/vps/highperf.svg" alt="High Performance" width={34} height={35} />
                    <h3 className="text-2xl font-bold">High Performance</h3>
                </div>
                <p className="font-light mb-10">
                    Powered by new generations of AMD EPYC or Intel Xeon CPUs and NVMe SSD.
                </p>
                <h4 className="text-xl font-medium mb-6">AMD Pricing</h4>
                <div className="relative overflow-x-auto shadow-lg sm:rounded-lg py-4 px-6 bg-white-100 dark:bg-dark-200">
                    <table className="w-full text-left leading-loose tracking-tighter">
                        <thead className="text-sm text-gray-700 dark:text-gray-400 border-b">
                            <tr>
                                <th scope="col" className="pr-6 py-4">
                                    vCPUs
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Memory
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Bandwidth
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Storage
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Monthly Price
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Hourly Price
                                </th>
                            </tr>
                        </thead>
                        <tbody className="font-normal">
                            {gameHostingVPS.vps.map((vps, index) => (
                                <tr key={index} className="border-b last:border-0">
                                    <th scope="row" className="pr-6 py-4">
                                        <strong>{ vps.cpu }</strong>&nbsp;vCPU
                                    </th>
                                    <td className="px-6 py-4">
                                        <strong>{ vps.memory }</strong>&nbsp;GB
                                    </td>
                                    <td className="px-6 py-4">
                                        <strong>{ vps.bandwidth.toFixed(2) }</strong>&nbsp;TB 
                                    </td>
                                    <td className="px-6 py-4">
                                        <strong>{ vps.storage }</strong>&nbsp;GB
                                    </td>
                                    <td className="px-6 py-4 text-blue-200">
                                        <strong>${ (vps.moPrice % 1 > 0 ? vps.moPrice.toFixed(2) : vps.moPrice ) }</strong>&nbsp;/mo
                                    </td>
                                    <td className="px-6 py-4 text-blue-200">
                                        <strong>${ vps.hrPrice.toFixed(3) }</strong>&nbsp;/hr
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <h4 className="text-xl font-medium my-6">Intel Pricing</h4>
                <div className="relative overflow-x-auto shadow-lg sm:rounded-lg py-4 px-6 bg-white-100 dark:bg-dark-200">
                    <table className="w-full text-left leading-loose tracking-tighter">
                        <thead className="text-sm text-gray-700 dark:text-gray-400 border-b">
                            <tr>
                                <th scope="col" className="pr-6 py-4">
                                    vCPUs
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Memory
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Bandwidth
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Storage
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Monthly Price
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Hourly Price
                                </th>
                            </tr>
                        </thead>
                        <tbody className="font-normal">
                            {gameHostingVPS.vps.map((vps, index) => (
                                <tr key={index} className="border-b last:border-0">
                                    <th scope="row" className="pr-6 py-4">
                                        <strong>{ vps.cpu }</strong>&nbsp;vCPU
                                    </th>
                                    <td className="px-6 py-4">
                                        <strong>{ vps.memory }</strong>&nbsp;GB
                                    </td>
                                    <td className="px-6 py-4">
                                        <strong>{ vps.bandwidth.toFixed(2) }</strong>&nbsp;TB 
                                    </td>
                                    <td className="px-6 py-4">
                                        <strong>{ vps.storage }</strong>&nbsp;GB
                                    </td>
                                    <td className="px-6 py-4 text-blue-200">
                                        <strong>${ (vps.moPrice % 1 > 0 ? vps.moPrice.toFixed(2) : vps.moPrice ) }</strong>&nbsp;/mo
                                    </td>
                                    <td className="px-6 py-4 text-blue-200">
                                        <strong>${ vps.hrPrice.toFixed(3) }</strong>&nbsp;/hr
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="mt-16">
                <div className="flex items-center mb-8">
                    <Image className="flex-shrink-0 mr-6" src="/assets/images/vps/highfreq.svg" alt="High Frequency" width={34} height={35} />
                    <h3 className="text-2xl font-bold">High Frequency</h3>
                </div>
                <p className="font-light mb-10">
                Powered by 3GHz+ Intel Xeon CPUs and NVMe SSD.
                </p>
                <div className="relative overflow-x-auto shadow-lg sm:rounded-lg py-4 px-6 bg-white-100 dark:bg-dark-200">
                    <table className="w-full text-left leading-loose tracking-tighter">
                        <thead className="text-sm text-gray-700 dark:text-gray-400 border-b">
                            <tr>
                                <th scope="col" className="pr-6 py-4">
                                    vCPUs
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Memory
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Bandwidth
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Storage
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Monthly Price
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Hourly Price
                                </th>
                            </tr>
                        </thead>
                        <tbody className="font-normal">
                            {gameHostingVPS.vps.map((vps, index) => (
                                <tr key={index} className="border-b last:border-0">
                                    <th scope="row" className="pr-6 py-4">
                                        <strong>{ vps.cpu }</strong>&nbsp;vCPU
                                    </th>
                                    <td className="px-6 py-4">
                                        <strong>{ vps.memory }</strong>&nbsp;GB
                                    </td>
                                    <td className="px-6 py-4">
                                        <strong>{ vps.bandwidth.toFixed(2) }</strong>&nbsp;TB 
                                    </td>
                                    <td className="px-6 py-4">
                                        <strong>{ vps.storage }</strong>&nbsp;GB
                                    </td>
                                    <td className="px-6 py-4 text-blue-200">
                                        <strong>${ (vps.moPrice % 1 > 0 ? vps.moPrice.toFixed(2) : vps.moPrice ) }</strong>&nbsp;/mo
                                    </td>
                                    <td className="px-6 py-4 text-blue-200">
                                        <strong>${ vps.hrPrice.toFixed(3) }</strong>&nbsp;/hr
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default VPSCloudElement