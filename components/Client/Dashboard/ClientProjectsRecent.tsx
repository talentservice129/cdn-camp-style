import Link from "next/link";
import Image from "next/image";
export default function ClientProjectsRecent() {
    return (
        <section className="relative">

            {/* Section background (needs .relative class on parent and next sibling elements) */}
            {/* <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div> */}

            <div className="relative max-w-6xl mx-auto">
                <div className="py-12 md:py-28 border-b ">

                    {/* Section header */}
                    <div className="max-w-sm flex flex-row flex-wrap items-center mb-8 md:max-w-2xl lg:max-w-none mx-auto">
                        <div className="md:w-2/3">
                            <p className="md:text-xl dark:text-blue-300 text-black mb-3 font-semibold">My Projects</p>
                        </div>
                    </div>

                    {/* Items */}
                    <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

                        {/* 1st item */}
                        <div className={`px-6 py-5 h-full rounded-lg bg-gray-500 overflow-hidden shadow-md flex flex-col items-center justify-between relative z-[1] bg-cover bg-no-repeat bg-right bg-[url('')] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:content-[''] after:bg-[linear-gradient(0deg,rgba(33,37,40,0.5),rgba(33,37,40,0))] after:z-[-1] group`}>
                            <h3 className="text-4xl">Project Name</h3>
                            <div className="md:mt-[90px] md:mb-[-90px] text-white-100 transition-[margin] group-hover:mb-0 group-hover:mt-[0px]">
                                <div className="flex items-end mb-2  bg-black bg-opacity-75 p-0.5 rounded"><h4 className="text-2xl md:text-4xl font-bold text-green-100">$4.99</h4><span className="text-2xl"> /mo</span></div>
                                <p className="md:text-2xl text-white-200 mb-8">Servers: 0</p>
                                <Link className="inline-block mb-5 py-2.5 px-5 text-white-100 border border-red-200 transition-colors rounded-lg uppercase hover:bg-red-300 font-semibold" href="#">
                                    Manage
                                </Link>
                            </div>
                        </div>

                        {/* 2nd item */}
                        <div className={`px-6 py-5 h-full rounded-lg bg-gray-500 overflow-hidden shadow-md flex flex-col items-center justify-between relative z-[1] bg-cover bg-no-repeat bg-right bg-[url('')] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:content-[''] after:bg-[linear-gradient(0deg,rgba(33,37,40,0.5),rgba(33,37,40,0))] after:z-[-1] group`}>
                            <h3 className="text-4xl">Project Name</h3>
                            <div className="md:mt-[90px] md:mb-[-90px] text-white-100 transition-[margin] group-hover:mb-0 group-hover:mt-[0px]">
                                <div className="flex items-end mb-2  bg-black bg-opacity-75 p-0.5 rounded"><h4 className="text-2xl md:text-4xl font-bold text-green-100">$4.99</h4><span className="text-2xl"> /mo</span></div>
                                <p className="md:text-2xl text-white-200 mb-8">Servers: 0</p>
                                <Link className="inline-block mb-5 py-2.5 px-5 text-white-100 border border-red-200 transition-colors rounded-lg uppercase hover:bg-red-300 font-semibold" href="#">
                                    Manage
                                </Link>
                            </div>
                        </div>

                        {/* 3rd item */}
                        <div className={`px-6 py-5 h-full rounded-lg bg-gray-500 overflow-hidden shadow-md flex flex-col items-center justify-between relative z-[1] bg-cover bg-no-repeat bg-right bg-[url('')] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:content-[''] after:bg-[linear-gradient(0deg,rgba(33,37,40,0.5),rgba(33,37,40,0))] after:z-[-1] group`}>
                            <h3 className="text-4xl">Project Name</h3>
                            <div className="md:mt-[90px] md:mb-[-90px] text-white-100 transition-[margin] group-hover:mb-0 group-hover:mt-[0px]">
                                <div className="flex items-end mb-2  bg-black bg-opacity-75 p-0.5 rounded"><h4 className="text-2xl md:text-4xl font-bold text-green-100">$4.99</h4><span className="text-2xl"> /mo</span></div>
                                <p className="md:text-2xl text-white-200 mb-8">Servers: 0</p>
                                <Link className="inline-block mb-5 py-2.5 px-5 text-white-100 border border-red-200 transition-colors rounded-lg uppercase hover:bg-red-300 font-semibold" href="#">
                                    Manage
                                </Link>
                            </div>
                        </div>

                        {/* 4th item */}
                        <div className={`px-6 py-5 h-full rounded-lg bg-gray-500 overflow-hidden shadow-md flex flex-col items-center justify-between relative z-[1] bg-cover bg-no-repeat bg-right bg-[url('')] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:content-[''] after:bg-[linear-gradient(0deg,rgba(33,37,40,0.5),rgba(33,37,40,0))] after:z-[-1] group`}>
                            <h3 className="text-4xl">Project Name</h3>
                            <div className="md:mt-[90px] md:mb-[-90px] text-white-100 transition-[margin] group-hover:mb-0 group-hover:mt-[0px]">
                                <div className="flex items-end mb-2  bg-black bg-opacity-75 p-0.5 rounded"><h4 className="text-2xl md:text-4xl font-bold text-green-100">$4.99</h4><span className="text-2xl"> /mo</span></div>
                                <p className="md:text-2xl text-white-200 mb-8">Servers: 0</p>
                                <Link className="inline-block mb-5 py-2.5 px-5 text-white-100 border border-red-200 transition-colors rounded-lg uppercase hover:bg-red-300 font-semibold" href="#">
                                    Manage
                                </Link>
                            </div>
                        </div>

                        {/* 5th item */}
                        <div className={`px-6 py-5 h-full rounded-lg bg-gray-500 overflow-hidden shadow-md flex flex-col items-center justify-between relative z-[1] bg-cover bg-no-repeat bg-right bg-[url('')] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:content-[''] after:bg-[linear-gradient(0deg,rgba(33,37,40,0.5),rgba(33,37,40,0))] after:z-[-1] group`}>
                            <h3 className="text-4xl">Project Name</h3>
                            <div className="md:mt-[90px] md:mb-[-90px] text-white-100 transition-[margin] group-hover:mb-0 group-hover:mt-[0px]">
                                <div className="flex items-end mb-2  bg-black bg-opacity-75 p-0.5 rounded"><h4 className="text-2xl md:text-4xl font-bold text-green-100">$4.99</h4><span className="text-2xl"> /mo</span></div>
                                <p className="md:text-2xl text-white-200 mb-8">Servers: 0</p>
                                <Link className="inline-block mb-5 py-2.5 px-5 text-white-100 border border-red-200 transition-colors rounded-lg uppercase hover:bg-red-300 font-semibold" href="#">
                                    Manage
                                </Link>
                            </div>
                        </div>
                        {/* 6th item */}
                        <div className={`px-6 py-5 h-full rounded-lg bg-gray-500 overflow-hidden shadow-md flex flex-col items-center justify-between relative z-[1] bg-cover bg-no-repeat bg-right bg-[url('')] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:content-[''] after:bg-[linear-gradient(0deg,rgba(33,37,40,0.5),rgba(33,37,40,0))] after:z-[-1] group`}>
                            <h3 className="text-4xl">Project Name</h3>
                            <div className="md:mt-[90px] md:mb-[-90px] text-white-100 transition-[margin] group-hover:mb-0 group-hover:mt-[0px]">
                                <div className="flex items-end mb-2  bg-black bg-opacity-75 p-0.5 rounded"><h4 className="text-2xl md:text-4xl font-bold text-green-100">$4.99</h4><span className="text-2xl"> /mo</span></div>
                                <p className="md:text-2xl text-white-200 mb-8">Servers: 0</p>
                                <Link className="inline-block mb-5 py-2.5 px-5 text-white-100 border border-red-200 transition-colors rounded-lg uppercase hover:bg-red-300 font-semibold" href="#">
                                    Manage
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>

    )
}
