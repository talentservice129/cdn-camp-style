import React from 'react';
import { TbFileInvoice } from 'react-icons/tb';

export default function ClientBillingBreadCrumbs() {
    return (
        <div className="container mx-auto px-2 pt-10 mb-9">
            <p className="text-white-400 dark:text-white-200 mb-5">Note: Information on this page is updated daily.</p>
            <div className="flex flex-wrap pb-10 border-b">
                <h1 className="text-4xl mr-auto mb-3">Billing</h1>
                <div>
                    <button className="inline-block px-6 py-3 outline-none text-sm scale-[1] hover:scale-[1.1] transition-all bg-transparent text-white-100 mr-3 mb-3">
                           <TbFileInvoice size={24} className="inline-block align-middle mr-2" /> How billing works
                    </button>
                    <button className="inline-block px-6 py-3 text-sm rounded-sm scale-[1] hover:scale-[1.1] transition-all bg-blue-300 text-white-100 mb-3">
                        Make a payment
                    </button>
                </div>
            </div>
        </div>
    )
}