import React from 'react';
import { FaPaypal, FaPlusCircle } from 'react-icons/fa';

const AccountBillings = () => {
    return (
        <>
            <div className="p-5 mb-5">
                <h6 className="mb-2">Payment Method</h6>
                <div className="">
                    <h3 className="text-xl mb-3"><FaPaypal className="inline-block" /> Paypal ****2222</h3>
                    <p className="text-sm">
                        Next Billing charged at $29 <br />
                        <em className="text-gray-600 dark:text-gray-300">Autopay on May 12, 2018</em>
                    </p>
                    <a className="inline-block text-blue-200 text-sm mb-4 capitalize" href="#"><FaPlusCircle className="inline-block" /> Add payment info</a>
                    <a className="float-right relative top-[-15px] inline-block text-blue-200 text-sm mb-4 capitalize" href="#">Edit payment info</a>
                </div>
            </div>

            <div className="p-5 mb-5">
                <h6 className="mb-2">Billing History</h6>
                <table className="w-full mb-4">
                    <thead className="hidden">
                        <tr>
                            <th>Plan</th>
                            <th>Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t border-t-dark-100 dark:border-white-100">
                            <td className="p-3 whitespace-nowrap align-middle">
                                <h3 className="mb-1 text-lg">Basic Plan <span className="text-[15px] inline-block ml-4">#LA35628</span></h3>
                                <p className="text-gray-600 dark:text-gray-300">Charged at April 17, 2018</p>
                            </td>
                            <td className="whitespace-nowrap align-middle text-lg">$29</td>
                            <td className="whitespace-nowrap align-middle text-right">
                                <a className="inline-block text-blue-200 text-sm" href="#">View</a>
                            </td>
                        </tr>
                        <tr className="border-t border-t-dark-100 dark:border-white-100">
                            <td className="p-3 whitespace-nowrap align-middle">
                                <h3 className="mb-1 text-lg">Pro Plan <span className="text-[15px] inline-block ml-4">#LA3599</span></h3>
                                <p className="text-gray-600 dark:text-gray-300">Charged at March 18, 2018</p>
                            </td>
                            <td className="whitespace-nowrap align-middle text-lg">$59</td>
                            <td className="whitespace-nowrap align-middle text-right">
                                <a className="inline-block text-blue-200 text-sm" href="#">View</a>
                            </td>
                        </tr>
                        <tr className="border-t border-t-dark-100 dark:border-white-100">
                            <td className="p-3 whitespace-nowrap align-middle">
                                <h3 className="mb-1 text-lg">Platinum Plan <span className="text-[15px] inline-block ml-4">#LA1245</span></h3>
                                <p className="text-gray-600 dark:text-gray-300">Charged at Feb 02, 2018</p>
                            </td>
                            <td className="whitespace-nowrap align-middle text-lg">$89</td>
                            <td className="whitespace-nowrap align-middle text-right">
                                <a className="inline-block text-blue-200 text-sm" href="#">View</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="">
                    <button className="inline-block py-2 px-4 bg-blue-200 dark:bg-blue-300 text-white-100 text-sm rounded-md transition-transform hover:scale-110 mr-4">
                        Update
                    </button>
                    <button className="inline-block py-2 px-4 bg-white-300 dark:bg-dark-200 text-sm rounded-md transition-transform hover:scale-110">
                        Cancel
                    </button>
                </div>
            </div>
        </>
    )
}

export default AccountBillings;