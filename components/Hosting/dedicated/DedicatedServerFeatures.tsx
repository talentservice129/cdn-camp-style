import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';
import { TfiAngleRight } from 'react-icons/tfi';

const DedicateServerFeatures = () => {
    return (
        <section className="relative border-t py-10 dark:border-t-dark-300">
            <div className="container xl:max-w-6xl px-4 mx-auto">
                <Accordion defaultIndex={[0]} allowToggle className="mb-10">
                    <AccordionItem className="pt-[35px] pb-[25px] px-5 rounded-sm bg-gray-200 dark:bg-dark-200 mb-5">
                        { ({isExpanded}) => (
                            <>
                                <h2 className="mb-2.5">
                                    <AccordionButton className={"font-bold text-xl " + (isExpanded ? 'text-blue-200' : '')}>
                                        { !isExpanded ? <AiOutlinePlusSquare size={24} className="inline-block text-blue-200 mr-5" /> : <AiOutlineMinusSquare size={24} className="inline-block text-blue-200 mr-5" /> }
                                        DDos Protection Included
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pl={44}>
                                    <p className="mb-5 leading-relaxed">We know the catastrophic effects and loss of revenue that can be caused by a DDoS attack and treat server security and uptime very seriously. Each of our dedicated servers include <a href="#" className="text-blue-200">free DDoS protection</a> to maximize availability and prevent unexpected downtimes from disrupting your business and revenue stream. Our DDoS protection works seemlessly to filter out malicious traffic while passing through legitimate traffic directly through your server. We offer advanced settings to customize the protection specific to your applications needs.</p>
                                    <a href="#" className="uppercase group text-blue-200">Learn more about DDos Protection <TfiAngleRight size={15} className="inline-block invisible group-hover:visible opacity-0 group-hover:opacity-100 ml-2 transition-opacity" /></a>
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                    <AccordionItem className="pt-[35px] pb-[25px] px-5 rounded-sm bg-gray-200 dark:bg-dark-200 mb-5">
                        { ({isExpanded}) => (
                            <>
                                <h2 className="mb-2.5">
                                    <AccordionButton className={"font-bold text-xl " + (isExpanded ? 'text-blue-200' : '')}>
                                        { !isExpanded ? <AiOutlinePlusSquare size={24} className="inline-block text-blue-200 mr-5" /> : <AiOutlineMinusSquare size={24} className="inline-block text-blue-200 mr-5" /> }
                                        Support That Never Sleeps
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pl={44}>
                                    <p className="mb-5 leading-relaxed">The internet doesn&apos;t have regular business hours, neither should the company that powers your servers. You can rely on us to react quickly if there&apos;s ever an issue with your dedicated server. All of our data centers are staffed with engineers on-site 24/7, 365 days a year, including holidays and weekends. Spare parts are always available and kept directly on-site for a quick replacement anytime day or night. We pride ourserlves with quality support and average a 15 minute or less initial reponse time to support tickets.</p>
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                    <AccordionItem className="pt-[35px] pb-[25px] px-5 rounded-sm bg-gray-200 dark:bg-dark-200 mb-5">
                        { ({isExpanded}) => (
                            <>
                                <h2 className="mb-2.5">
                                    <AccordionButton className={"font-bold text-xl " + (isExpanded ? 'text-blue-200' : '')}>
                                        { !isExpanded ? <AiOutlinePlusSquare size={24} className="inline-block text-blue-200 mr-5" /> : <AiOutlineMinusSquare size={24} className="inline-block text-blue-200 mr-5" /> }
                                        System Administrations by Your Side
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pl={44}>
                                    <p className="mb-5 leading-relaxed">Don&apos;t let setting up and maintaining your dedicated server get in the way of running your business. We offer a <a href="#" className="text-blue-200">managed dedicated server</a> support option with any of our dedicated servers. Our team of Linux and Microsoft certified system administrators is available anytime day or night and can assist you with setting up, securing, and managing your server. All of this and more, for a fraction of what it would cost to hire even a part time system administrator..</p>
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                    <AccordionItem className="pt-[35px] pb-[25px] px-5 rounded-sm bg-gray-200 dark:bg-dark-200 mb-5">
                        { ({isExpanded}) => (
                            <>
                                <h2 className="mb-2.5">
                                    <AccordionButton className={"font-bold text-xl " + (isExpanded ? 'text-blue-200' : '')}>
                                        { !isExpanded ? <AiOutlinePlusSquare size={24} className="inline-block text-blue-200 mr-5" /> : <AiOutlineMinusSquare size={24} className="inline-block text-blue-200 mr-5" /> }
                                        Data Centers That Never Quit
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pl={44}>
                                    <p className="mb-5 leading-relaxed">Reliability and redundancy are our number one priority, which is why we offer a 100% uptime SLA on our power, cooling, and network. Each and every dedicated server hosted with us is housed in a top tier <a href="#" className="text-blue-200">data center</a> offering redundant power, network, and cooling. Our data centers are purpose built to withstand severe weather, such as blizzards, category 5 hurricane winds, and other natural disasters. Data centers are staffed 24/7/365 with server engineers and security guards to provide support and security for your data.</p>
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                    <AccordionItem className="pt-[35px] pb-[25px] px-5 rounded-sm bg-gray-200 dark:bg-dark-200 mb-5">
                        { ({isExpanded}) => (
                            <>
                                <h2 className="mb-2.5">
                                    <AccordionButton className={"font-bold text-xl " + (isExpanded ? 'text-blue-200' : '')}>
                                        { !isExpanded ? <AiOutlinePlusSquare size={24} className="inline-block text-blue-200 mr-5" /> : <AiOutlineMinusSquare size={24} className="inline-block text-blue-200 mr-5" /> }
                                        More Power to the Customer
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pl={44}>
                                    <p className="mb-5 leading-relaxed">Managing a dedicated server remotely shouldn&apos;t limit your options for performing basic and advanced tasks. Every server that we offer includes KVM over IP functionality and empowers customers to take full control of their server. The KVM allows complete management of a server at the hardware level for performing tasks such as BIOS configuration and custom OS re-installs. The KVM functionality also allows for mounting of a custom ISO, removing any limits on the operating system and drivers. The KVM operates out of band from the standard server hardware, so even during a hard crash or lack of internet connectivity, the dedicated server itself can still be rebooted and managed by using the KVM interface.</p>
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                    <AccordionItem className="pt-[35px] pb-[25px] px-5 rounded-sm bg-gray-200 dark:bg-dark-200 mb-5">
                        { ({isExpanded}) => (
                            <>
                                <h2 className="mb-2.5">
                                    <AccordionButton className={"font-bold text-xl " + (isExpanded ? 'text-blue-200' : '')}>
                                        { !isExpanded ? <AiOutlinePlusSquare size={24} className="inline-block text-blue-200 mr-5" /> : <AiOutlineMinusSquare size={24} className="inline-block text-blue-200 mr-5" /> }
                                        Data Redundancy and Backups
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pl={44}>
                                    <p className="mb-5 leading-relaxed">Maintaining data integrity is typically an after-thought. We understand that data loss can be a major crisis and offer several options for preventing this occurance. Each dedicated server is available with software RAID at no additional charge. RAID will add redundancy to prevent downtime and data loss from a complete drive failure. All of our dedicated servers can also be equipped with our affordable backup storage option. All of our FTP backup storage is RAID6 protected and monitored in-house for data integrity.</p>
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                    <AccordionItem className="pt-[35px] pb-[25px] px-5 rounded-sm bg-gray-200 dark:bg-dark-200 mb-5">
                        { ({isExpanded}) => (
                            <>
                                <h2 className="mb-2.5">
                                    <AccordionButton className={"font-bold text-xl " + (isExpanded ? 'text-blue-200' : '')}>
                                        { !isExpanded ? <AiOutlinePlusSquare size={24} className="inline-block text-blue-200 mr-5" /> : <AiOutlineMinusSquare size={24} className="inline-block text-blue-200 mr-5" /> }
                                        Choosing a SSD or HDD
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pl={44}>
                                    <p className="mb-5 leading-relaxed">Every dedicated server available includes the option of either choosing a SSD or HDD at no additional charge. Each option has it&apos;s own benefits for the specific dedicated server usage. SSDs offer significantly faster read and write performance over a HDD as there are no moving parts. The speed of a SSD typically increases with the size. Choose a HDD when you need more storage at a lower price point. Hard drives offer the lowest cost for a large amount of storage on a dedicated server.</p>
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                    <AccordionItem className="pt-[35px] pb-[25px] px-5 rounded-sm bg-gray-200 dark:bg-dark-200 mb-5">
                        { ({isExpanded}) => (
                            <>
                                <h2 className="mb-2.5">
                                    <AccordionButton className={"font-bold text-xl " + (isExpanded ? 'text-blue-200' : '')}>
                                        { !isExpanded ? <AiOutlinePlusSquare size={24} className="inline-block text-blue-200 mr-5" /> : <AiOutlineMinusSquare size={24} className="inline-block text-blue-200 mr-5" /> }
                                        Future-Proof with IPv6
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pl={44}>
                                    <p className="mb-5 leading-relaxed">IP space on the IPv4 protocol is exhausted and internet service providers are now making the transition to the new IPv6 protocol. Our network fully supports IPv6 and each dedicated server that we offer receives a 1 x IPv6 at no charge. An IPv6 IP is free of charge and can be configured just as easily as IPv4. The new IPv6 protocol includes many benifits over IPv4, such as improved performance and security.</p>
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                    <AccordionItem className="pt-[35px] pb-[25px] px-5 rounded-sm bg-gray-200 dark:bg-dark-200 mb-5">
                        { ({isExpanded}) => (
                            <>
                                <h2 className="mb-2.5">
                                    <AccordionButton className={"font-bold text-xl " + (isExpanded ? 'text-blue-200' : '')}>
                                        { !isExpanded ? <AiOutlinePlusSquare size={24} className="inline-block text-blue-200 mr-5" /> : <AiOutlineMinusSquare size={24} className="inline-block text-blue-200 mr-5" /> }
                                        Deploy Dedicated Servers Instantly
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pl={44}>
                                    <p className="mb-5 leading-relaxed">Deploy bare metal with the speed and flexability of cloud. Our rapid deploy dedicated servers offer near instant deployment of dozens of unique configurations. Rapid deploy servers are pre-configured dedicated servers that are ready for an operating system. As soon as a rapid deploy is purchased, our automated systems go to work with delivering the dedicated server with your operating system of choice.</p>
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                    <AccordionItem className="pt-[35px] pb-[25px] px-5 rounded-sm bg-gray-200 dark:bg-dark-200">
                        { ({isExpanded}) => (
                            <>
                                <h2 className="mb-2.5">
                                    <AccordionButton className={"font-bold text-xl " + (isExpanded ? 'text-blue-200' : '')}>
                                        { !isExpanded ? <AiOutlinePlusSquare size={24} className="inline-block text-blue-200 mr-5" /> : <AiOutlineMinusSquare size={24} className="inline-block text-blue-200 mr-5" /> }
                                        Custom Built Dedicated Servers
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pl={44}>
                                    <p className="mb-5 leading-relaxed">A large variety of latest generation servers are available to be custom built. Servers can be customized with a choice of CPU, RAM, drives, and other addons. ReliableSite carries complete inventory on-site in our data centers to provide a true dedicated hosting al-a-carte experience without the wait of a third party custom builder. Custom servers are setup in 12 to 48 hours.</p>
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                </Accordion>
                <p className="text-[18px] mb-5 leading-relaxed">Dedicated server hosting has never been so simple. All of our custom dedicated servers and rapid deploy dedicated servers include DDoS protection. A DDoS protected dedicated hosting option allows you server to stay online during DDoS attacks designed to induce downtime. Each and every dedicated server also includes our unlimited bandwidth option. This allows you to never worry about bandwidth overages during unexpected traffic spikes. Your server will continue to stay online and you will never be billed for overages. More information about how our unlimited bandwidth dedicated server option works is available by contacting a sales associate. All of our data centers are fully stocked with replacements parts for our dedicated servers. In case of a hardware failure, a data center technician will always be available for a quick replacement of a failed part for the dedicated server, making our dedicated hosting option the right choice for your business.</p>
                <p className="text-[18px] leading-relaxed mb-10">Content consumption on the internet is growing at a rapid pace. A dedicated server provides the power and resources necessary to deliver the content, but raw hardware power isn&apos;t enough. Each server that we offer includes an industry leading bandwidth allocation. You will never have to worry about a dedicated server hosting provider charging you big bandwidth bills for unexpected bursts in traffic. Our entire network for dedicated servers was built from the ground up to deliver 10 Gbps or more traffic per server, allowing for future expansion without complex migrations. A 10 Gbps port offers a larger data pipe for transferring more data in a shorter amount of time and is highly recommended for streaming dedicated servers and content delivery.</p>
            </div>
        </section>
    )
}

export default DedicateServerFeatures;