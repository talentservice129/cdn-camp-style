import React from 'react';
import { BsPaypal } from 'react-icons/bs';

export default function ClientBillingPaymentMethods() {
    return (
        <div className="p-10 border rounded-md">
            <h2 className="text-3xl tracking-tight mb-5">Payment methods</h2>
            <div className="border rounded-md mb-10">
                <table className="w-full">
                    <tbody>
                        <tr className="border-none">
                            <td className="py-5 px-10 w-1/2"><div className="flex items-center text-xl"><BsPaypal className="mr-2" /> Paypal</div></td>
                            <td className="py-5 px-10 w-1/2">mrshavel123@gmail.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <a href="#" className="mr-5 block px-4 py-3 text-center border dark:border-white-100 rounded-md bg-transparent text-[15px] text-dark-200 dark:text-white-100 transition-all hover:bg-blue-300 hover:border-blue-300 dark:hover:border-blue-300 hover:text-white-100 ">Add a backup payment method</a>
        </div>
    )
}