import React from 'react';
import { AiOutlineExclamationCircle } from 'react-icons/ai';

export default function ClientBillingEstimation() {
    return (
        <div className="p-10 border rounded-md">
            <h2 className="text-3xl tracking-tight mb-4">Estimated Due</h2>
            <p className="text-white-400 dark:text-white-200 mb-8">This is an estimate of the amount you owe based on your current month-to-date usage after credits & prepayments.</p>
            <span className="block text-5xl font-extralight mb-12">$0.00</span>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                <div>
                    <span className="font-semibold text-sm block">$0.00</span>
                    <p className="text-white-400 dark:text-white-200">Credits Applied</p>
                </div>
                <div>
                    <span className="font-semibold text-sm block">$5.00</span>
                    <p className="text-white-400 dark:text-white-200 flex items-center">Prepayments Applied <AiOutlineExclamationCircle size={20} className="ml-2" /></p>
                </div>
                <div>
                    <span className="font-semibold text-sm block">$0.00</span>
                    <p className="text-white-400 dark:text-white-200 flex items-center">Total Usage <AiOutlineExclamationCircle size={20} className="ml-2" /></p>
                </div>
                <div>
                    <span className="font-semibold text-sm block">$5.00</span>
                    <p className="text-white-400 dark:text-white-200">Remaining prepayments</p>
                </div>
            </div>
        </div>
    )
}