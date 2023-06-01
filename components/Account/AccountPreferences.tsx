import React from 'react';
import { FaDesktop, FaFacebookF, FaInstagram, FaLaptop, FaLinkedinIn, FaMobileAlt, FaTimesCircle, FaTwitter, FaVimeo, FaVimeoV } from 'react-icons/fa';

const AccountPreferences = () => {
    return (
        <div className="grid lg:grid-gap-[30px] lg:grid-cols-2">
            <div className="p-5">
                <h6 className="mb-2">Your Login Sessions</h6>
                <ul className="list-none">
                    <li className="relative py-[30px] border-b">
                        <FaLaptop size={25} className="float-left mt-1" />
                        <div className="pl-10">
                            <h3 className="text-lg mb-1">Mac - New York, United States</h3>
                            <p className="text-gray-600 dark:text-gray-300">Chrome - <span className="text-blue-200 dark:text-blue-300">Active Now</span></p>
                        </div>
                    </li>
                    <li className="relative py-[30px] border-b">
                        <FaDesktop size={25} className="float-left mt-1" />
                        <div className="pl-10">
                            <h3 className="text-lg mb-1">Windows 10 - New York, United States</h3>
                            <p className="text-gray-600 dark:text-gray-300">Windows 10 - New York, United States</p>
                        </div>
                        <a href="#" className="text-red-200 inline-block absolute top-1/2 mt-[-11px] right-0"><FaTimesCircle size={14} /><span className="sr-only">Remove</span></a>
                    </li>
                    <li className="relative py-[30px]">
                        <FaMobileAlt size={25} className="float-left mt-1" />
                        <div className="pl-10">
                            <h3 className="text-lg mb-1">Android - New York, United States</h3>
                            <p className="text-gray-600 dark:text-gray-300">Android Browser - yesterday</p>
                        </div>
                        <a href="#" className="text-red-200 inline-block absolute top-1/2 mt-[-11px] right-0"><FaTimesCircle size={14} /><span className="sr-only">Remove</span></a>
                    </li>
                </ul>
            </div>
            <div className="p-5">
                <h6 className="mb-2">Connected Social Media</h6>
                <ul className="list-none">
                    <li className="relative pb-2.5 border-b">
                        <FaFacebookF size={25} className="float-left mt-1" />
                        <div className="pl-10">
                            <h3 className="text-lg mb-1">FaceBook</h3>
                            <div>
                                <a href="#" className="text-blue-200 inline-block transition-transform hover:scale-110 mr-4">View Permissions</a>
                                <a href="#" className="text-red-200 inline-block transition-transform hover:scale-110">Revoke Access</a>
                            </div>
                        </div>
                    </li>
                    <li className="relative py-2.5 border-b">
                        <FaTwitter size={25} className="float-left mt-1" />
                        <div className="pl-10">
                            <h3 className="text-lg mb-1">Twitter</h3>
                            <div>
                                <a href="#" className="text-blue-200 inline-block transition-transform hover:scale-110 mr-4">View Permissions</a>
                                <a href="#" className="text-red-200 inline-block transition-transform hover:scale-110">Revoke Access</a>
                            </div>
                        </div>
                    </li>
                    <li className="relative py-2.5 border-b">
                        <FaInstagram size={25} className="float-left mt-1" />
                        <div className="pl-10">
                            <h3 className="text-lg mb-1">Instagram</h3>
                            <div>
                                <a href="#" className="text-blue-200 inline-block transition-transform hover:scale-110 mr-4">View Permissions</a>
                                <a href="#" className="text-red-200 inline-block transition-transform hover:scale-110">Revoke Access</a>
                            </div>
                        </div>
                    </li>
                    <li className="relative py-2.5 border-b">
                        <FaLinkedinIn size={25} className="float-left mt-1" />
                        <div className="pl-10">
                            <h3 className="text-lg mb-1">Linkedin</h3>
                            <div>
                                <a href="#" className="text-blue-200 inline-block transition-transform hover:scale-110 mr-4">View Permissions</a>
                                <a href="#" className="text-red-200 inline-block transition-transform hover:scale-110">Revoke Access</a>
                            </div>
                        </div>
                    </li>
                    <li className="relative py-2.5 border-b">
                        <FaVimeoV size={25} className="float-left mt-1" />
                        <div className="pl-10">
                            <h3 className="text-lg mb-1">Vimeo</h3>
                            <div>
                                <a href="#" className="text-blue-200 inline-block transition-transform hover:scale-110 mr-4">View Permissions</a>
                                <a href="#" className="text-red-200 inline-block transition-transform hover:scale-110">Revoke Access</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AccountPreferences;