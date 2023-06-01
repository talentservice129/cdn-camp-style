import Image from 'next/image';
import React from 'react';

import gameHostingVPS from '../../../data/game_hosting_vps.json';

const VPSOptimizedCloudElement = () => {
    return (
        <div className="pt-12 pb-[120px] relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-12 before:h-[3px] before:bg-blue-200">
            <h2 className="text-4xl mb-10 tracking-tight">Optimized Cloud Compute</h2>
            <p className="font-light mb-4">
                These virtual machines run atop fully dedicated, new generation AMD EPYC vCPUs. Dedicated vCPUs ensure that these machines deliver the fast, consistent performance that many business applications require.
            </p>
            <p className="font-light mb-4">
                Choose High Performance or High Frequency plans for the newer generations of AMD or Intel CPUs, along with NVMe SSD.
            </p>

            <div className="mt-16">
                <div className="flex items-center mb-8">
                    <Image className="flex-shrink-0 mr-6" src="/assets/images/vps/general.svg" alt="General Purpose" width={34} height={35} />
                    <h3 className="text-2xl font-bold">General Purpose</h3>
                </div>
                <p className="font-light mb-2">
                    Often a good starting point, these VMs provide a typical balance of CPU, RAM, and NVMe SSD resources
                </p>
                <p className="font-light mb-10">
                    <strong className="dark:text-blue-200">Use cases:</strong> web and application servers, E-Commerce, game servers, video and audio streaming, API serving, relational databases
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
                    <Image className="flex-shrink-0 mr-6" src="/assets/images/vps/cpu.svg" alt="CPU Optimized" width={34} height={35} />
                    <h3 className="text-2xl font-bold">CPU Optimized</h3>
                </div>
                <p className="font-light mb-2">
                    For compute bound applications, these VMs provide proportionally more CPU than they do RAM and NVMe SSD.
                </p>
                <p className="font-light mb-10">
                    <strong className="dark:text-blue-200">Use cases:</strong> video encoding, batch processing, CI/CD, high performance computing (HPC), ad serving, analytics processing
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
                    <Image className="flex-shrink-0 mr-6" src="/assets/images/vps/memory.svg" alt="General Purpose" width={34} height={35} />
                    <h3 className="text-2xl font-bold">Memory Optimized</h3>
                </div>
                <p className="font-light mb-2">
                    For memory bound applications, these VMs provide proportionally more RAM than they do CPU and NVMe SSD.
                </p>
                <p className="font-light mb-10">
                    <strong className="dark:text-blue-200">Use cases:</strong> open source databases e.g. MySQL, in-memory databases and caches (e.g. Memcached), real-time analytics
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
                    <Image className="flex-shrink-0 mr-6" src="/assets/images/vps/storage.svg" alt="Storage Optimized" width={34} height={35} />
                    <h3 className="text-2xl font-bold">Storage Optimized</h3>
                </div>
                <p className="font-light mb-2">
                    These VMs provide especially generous amounts of NVMe SSD storage to accompany a typical balance of CPU and RAM.
                </p>
                <p className="font-light mb-10">
                    <strong className="dark:text-blue-200">Use cases:</strong> large nonrelational databases e.g. Cassandra and MongoDB, high frequency online transaction processing (OLTP)
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

export default VPSOptimizedCloudElement