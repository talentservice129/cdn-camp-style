import React from 'react';

export default function ClientBillingSettings() {
    return (
        <div className="p-10 border rounded-md">
            <h2 className="text-3xl tracking-tight mb-5">Billing Settings</h2>
            <h3 className="text-sm mb-2 uppercase">Address</h3>
            <p className="text-white-400 dark:text-white-200 mb-10">This address appears on your monthly invoice and should be the legal address of your home or business</p>
            <div className="flex flex-wrap mb-5 ">    
                <address className='mb-5 mr-auto font-normal'>
                    Address
                </address>
                <button className="mb-5 px-6 py-4 rounded-sm scale-[1] hover:scale-[1.1] transition-all bg-white-400 dark:bg-white-200 text-white-100 dark:text-dark-200">
                    Edit Address
                </button>
            </div>
            <h3 className="text-sm mb-2 uppercase">Tax Loaction</h3>
            <p className="text-white-400 dark:text-white-200 mb-10">Taxes are not collected for your location at this time.</p>
            <p className="text-white-400 dark:text-white-200">Your tax location determines the taxes that are applied to your bill</p>
            <a href="#" className="text-blue-200">How do I correct my tax location?</a>
        </div>
    )
}