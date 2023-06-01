import Link from "next/link";

export default function ClientBreadCrumbs() {
    return (
        <div className="container  mx-auto px-2">
            <div className="flex flex-wrap">
                <div className="flex items-center pt-6 pb-4 w-full">
                    <div className="w-full">
                        <div className="">
                            <div className="flex flex-wrap justify-between">
                                <div className="items-center ">
                                    <h1 className="font-semibold text-xl mb-0 block dark:text-slate-100">Client Dashboard</h1>
                                    <ol className="list-reset flex text-sm">
                                        <li><Link href="/" className="text-gray-400">OpticEngine</Link></li>
                                        <li><span className="text-gray-400 mx-2">/</span></li>
                                        <li className="text-gray-400">Dashboard</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}