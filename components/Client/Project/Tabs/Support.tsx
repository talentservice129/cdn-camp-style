import { BiLinkExternal } from "react-icons/bi";

export default function ClientProjectSupport() {
    return (
        <div className="p-5">
            <div className="grid lg:grid-cols-3 grid-flow-col gap-10">
                <div className="lg:col-span-2">
                    <div className="p-5 border rounded-md mb-5">
                        <h2 className="text-xl tracking-tight mb-4">Create a new support request</h2>
                        <div className="grid grid-cols-3 max-w-[600px] gap-2.5">
                            <button className="px-6 rounded-md h-14 border">Techinal</button>
                            <button className="px-6 rounded-md h-14 border">Accounting</button>
                            <button className="px-6 rounded-md h-14 border">Miscellaneous</button>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-1">
                    <div className="p-5 border rounded-md mb-5">
                        <h2 className="text-xl tracking-tight mb-5">OpticEngine Status</h2>
                        <p className="text-sm text-white-400 dark:text-white-200 mb-4">Check the Hetzner Status page for detailed information about current server-related issues.</p>
                        <button className="block w-full py-3 px-6 cursor-pointer bg-white-300 dark:bg-dark-200 text-sm rounded-md hover:bg-white-300/75 dark:hover:bg-dark2-300 transition-colors">
                            <BiLinkExternal className="inline-block mr-1" size={20} /> Check OpticEngine Status
                        </button>
                    </div>
                    <div className="p-5 border rounded-md">
                        <h2 className="text-xl tracking-tight mb-5">OpticEngine Docs</h2>
                        <p className="text-sm text-white-400 dark:text-white-200 mb-4">Need more information? Maybe our Docs can help.</p>
                        <button className="block w-full py-3 px-6 cursor-pointer bg-white-300 dark:bg-dark-200 text-sm rounded-md hover:bg-white-300/75 dark:hover:bg-dark2-300 transition-colors">
                            <BiLinkExternal className="inline-block mr-1" size={20} /> Check OpticEngine Docs
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}