import React from 'react';

export default function ClientBillingSummary() {
    return (
        <div className="p-10 border rounded-md">
            <h2 className="text-3xl tracking-tight">Month-to-date Summary January 1 - 19, 2023</h2>
            <p className="text-white-400 dark:text-white-200 mb-10">These charges are factored into your account balance.</p>
            <span className="block text-sm">No costs to display for this billing period</span>
            <p className="text-white-400 dark:text-white-200">When you use OpticEngine services, the associated costs will appear in this window the following day</p>
        </div>
    )
}