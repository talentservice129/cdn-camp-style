import { AiFillQuestionCircle } from "react-icons/ai";

export default function ClientProjectLimits() {
    return (
        <div className="p-5">
            <div className="p-5 border rounded-md mb-5">
                <h2 className="text-xl tracking-tight mb-4">Limits</h2>
                <p className="text-white-400 dark:text-white-200 mb-6">Limits are set per customer and are counted across all projects that you created. If you need more resources, just send us a request, and we are happy to adjust them for you.</p>
                <p className="text-white-400 dark:text-white-200">Outgoing traffic to ports 25 and 465 are blocked by default on all Cloud Servers. Send a request for unblocking these ports. Please note that we generally do not answer questions regarding limit increase on the telephone.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="p-5 border rounded-md">
                    <h4 className="text-xl mb-4">Servers <span className="float-right text-[.8em]">0 / 5</span></h4>
                    <div className="w-full h-5 bg-gray-200 rounded-full dark:bg-gray-700">
                        <div className="h-5 bg-blue-600 rounded-full dark:bg-blue-500" style={{width: "45%"}}></div>
                    </div>
                </div>
                <div className="p-5 border rounded-md">
                    <h4 className="text-xl mb-4">D.VCPUS <AiFillQuestionCircle className="inline-block" /> <span className="float-right text-[.8em]">0 / 8</span></h4>
                    <div className="w-full h-5 bg-gray-200 rounded-full dark:bg-gray-700">
                        <div className="h-5 bg-blue-600 rounded-full dark:bg-blue-500" style={{width: "25%"}}></div>
                    </div>
                </div>
                <div className="p-5 border rounded-md">
                    <h4 className="text-xl mb-4">Snapshots <span className="float-right text-[.8em]">0 / 30</span></h4>
                    <div className="w-full h-5 bg-gray-200 rounded-full dark:bg-gray-700">
                        <div className="h-5 bg-blue-600 rounded-full dark:bg-blue-500" style={{width: "75%"}}></div>
                    </div>
                </div>
                <div className="p-5 border rounded-md">
                    <h4 className="text-xl mb-4">Floating IPs <span className="float-right text-[.8em]">0 / 10</span></h4>
                    <div className="w-full h-5 bg-gray-200 rounded-full dark:bg-gray-700">
                        <div className="h-5 bg-blue-600 rounded-full dark:bg-blue-500" style={{width: "10%"}}></div>
                    </div>
                </div>
                <div className="p-5 border rounded-md">
                    <h4 className="text-xl mb-4">Volumes <span className="float-right text-[.8em]">0 / 1024GB</span></h4>
                    <div className="w-full h-5 bg-gray-200 rounded-full dark:bg-gray-700">
                        <div className="h-5 bg-blue-600 rounded-full dark:bg-blue-500" style={{width: "90%"}}></div>
                    </div>
                </div>
                <div className="p-5 border rounded-md">
                    <h4 className="text-xl mb-4">Load Balances <span className="float-right text-[.8em]">0 / 20</span></h4>
                    <div className="w-full h-5 bg-gray-200 rounded-full dark:bg-gray-700">
                        <div className="h-5 bg-blue-600 rounded-full dark:bg-blue-500" style={{width: "5%"}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}