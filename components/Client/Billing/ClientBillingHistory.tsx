import React from 'react';

export default function ClientBillingHistory() {
    return (
        <div className="p-10 border rounded-md">
            <h2 className="text-3xl tracking-tight mb-5">Billing History</h2>
            <table className="w-full">
                <thead>
                    <tr className="border text-left">
                        <th className="py-2 px-3 font-bold">Date</th>
                        <th className="py-2 px-3 font-bold">Description</th>
                        <th className="py-2 px-3 font-bold">Amount</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border">
                        <td className="py-2 px-3">January 16, 2023</td>
                        <td className="py-2 px-3">PayPal Transaction</td>
                        <td className="py-2 px-3">-$5.00</td>
                        <td className="py-2 px-3 text-center">Download: <a href="#" className="underline text-blue-200">PDF</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}