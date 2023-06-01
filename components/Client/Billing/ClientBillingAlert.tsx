import React from 'react';

export default function ClientBillingAlert() {
    return (
        <div className="p-10 border rounded-md">
            <h2 className="text-3xl tracking-tight mb-5">Billing alerts</h2>
            <div className="flex flex-wrap mb-5 ">
                <p className="text-white-400 dark:text-white-200 mb-5 mr-auto">Set up automated billing alerts to receive emails when a specified usage amount is reached.</p>
                <button className="px-6 py-4 rounded-sm scale-[1] hover:scale-[1.1] transition-all bg-white-400 dark:bg-white-200 text-white-100 dark:text-dark-200">
                    Add Alert
                </button>
            </div>
        </div>
    )
}