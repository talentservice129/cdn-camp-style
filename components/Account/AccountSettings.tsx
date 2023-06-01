import Image from 'next/image';
import React, { useState } from 'react';
import { VscCalendar } from 'react-icons/vsc';
import Datepicker from "react-tailwindcss-datepicker";

const AccountSettings = () => {
    const [dob, setDOB] = useState(null);

    return (
        <>
            <div className="p-5 mb-5">
                <h6 className="mb-2">Profile Photo</h6>
                <div className="flex flex-wrap">
                    <Image className="flex-grow-0 flex-shrink-0 mr-4" src="/assets/images/avatar.png" alt="Avatar" width={140} height={140} />
                    <div>
                        <p className="text-sm mt-2 mb-5">
                            Upload your photo.<br />
                            <em>Image should be at least 140px x 140px.</em>
                        </p>
                        <label className="inline-block py-2 px-4 cursor-pointer bg-white-300 dark:bg-dark-200 text-sm rounded-md transition-transform hover:scale-110">
                            Upload Photo
                            <input type="file" className="hidden" />
                        </label>
                    </div>
                </div>
            </div>

            <div className="p-5 mb-5">
                <h6 className="mb-2">Basic Information</h6>
                <form>
                    <div className="grid lg:gap-[30px] lg:grid-cols-2">
                        <div>
                            <div className="mb-4">
                                <input type="text" placeholder="First Name" className="block w-full p-2 text-gray-900 border outline-none border-gray-300 rounded-md bg-gray-50 text-sm focus:border-blue-200 dark:focus:border-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white-100  transition-colors" />
                            </div>
                            <div className="mb-4">
                                <input type="text" placeholder="Last Name" className="block w-full p-2 text-gray-900 border outline-none border-gray-300 rounded-md bg-gray-50 text-sm focus:border-blue-200 dark:focus:border-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white-100  transition-colors" />
                            </div>
                            <div className="mb-6">
                                <label className="inline-flex items-center ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 mr-4">
                                    <input type="radio" name="gender" value="male" className="w-2.5 h-2.5 outline-none ring-1 ring-offset-[3px] ring-gray-300 rounded-full appearance-none checked:bg-gray-500 bg-gray-300 dark:checked:bg-dark-200 mb-0.5 mr-2" defaultChecked />
                                    Male
                                </label>
                                <label className="inline-flex items-center ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    <input type="radio" name="gender" value="female" className="w-2.5 h-2.5 outline-none ring-1 ring-offset-[3px] ring-gray-300 rounded-full appearance-none checked:bg-gray-500 bg-gray-300 dark:checked:bg-dark-200 mb-0.5 mr-2" />
                                    Female
                                </label>
                            </div>
                            <div className="flex mb-4">
                                <span className="inline-flex items-center px-3 text-sm text-gray-900 border border-gray-300 rounded-l-md dark:text-gray-300 dark:bg-gray-700 dark:border-gray-600">
                                    <VscCalendar />
                                </span>
                                <Datepicker
                                    value={dob}
                                    asSingle={true}
                                    onChange={setDOB}
                                    primaryColor={"blue"}
                                    placeholder="Birthdate"
                                    inputClassName="rounded-r-md rounded-none text-gray-900 border outline-none border-gray-300 bg-gray-50 text-sm focus:border-blue-200 dark:focus:border-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white-100"
                                />
                            </div>
                            <div className="mb-4">
                                <input type="url" placeholder="http://" className="block w-full p-2 text-gray-900 border outline-none border-gray-300 rounded-md bg-gray-50 text-sm focus:border-blue-200 dark:focus:border-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white-100  transition-colors" />
                            </div>
                        </div>
                        <div>
                            <div className="mb-4">
                                <input type="text" placeholder="Address Line 1" className="block w-full p-2 text-gray-900 border outline-none border-gray-300 rounded-md bg-gray-50 text-sm focus:border-blue-200 dark:focus:border-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white-100  transition-colors" />
                            </div>

                            <div className="mb-4">
                                <input type="text" placeholder="Address Line 2" className="block w-full p-2 text-gray-900 border outline-none border-gray-300 rounded-md bg-gray-50 text-sm focus:border-blue-200 dark:focus:border-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white-100  transition-colors" />
                            </div>

                            <div className="mb-4">
                                <input type="text" placeholder="City" className="block w-full p-2 text-gray-900 border outline-none border-gray-300 rounded-md bg-gray-50 text-sm focus:border-blue-200 dark:focus:border-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white-100  transition-colors" />
                            </div>

                            <div className="mb-4">
                                <input type="text" placeholder="State/Province" className="block w-full p-2 text-gray-900 border outline-none border-gray-300 rounded-md bg-gray-50 text-sm focus:border-blue-200 dark:focus:border-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white-100  transition-colors" />
                            </div>

                            <div className="mb-4">
                                <select className="block w-full p-2 text-gray-900 border outline-none border-gray-300 rounded-md bg-gray-50 text-sm focus:border-blue-200 dark:focus:border-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white-100  transition-colors">
                                    <option value="">-- Select Country --</option>
                                    <option value="us">United States</option>
                                    <option value="ca">Canada</option>
                                    <option value="fr">France</option>
                                    <option value="ge">Germany</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <button className="inline-block py-2 px-4 bg-blue-200 dark:bg-blue-300 text-white-100 text-sm rounded-md transition-transform hover:scale-110 mr-4">
                            Update
                        </button>
                        <button className="inline-block py-2 px-4 bg-white-300 dark:bg-dark-200 text-sm rounded-md transition-transform hover:scale-110">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>

            <div className="p-5 mb-5">
                <form>
                    <div className="grid lg:gap-[30px] lg:grid-cols-2">
                        <div>
                            <h6 className="mb-2">Account Data</h6>
                            <div className="mb-4">
                                <input type="text" defaultValue="johndoe" disabled className="block w-full p-2 text-gray-900 border outline-none border-gray-300 rounded-md bg-gray-50 text-sm focus:border-blue-200 dark:focus:border-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white-100  transition-colors disabled:bg-gray-200 dark:disabled:bg-gray-800" />
                            </div>
                            <div className="mb-4">
                                <input type="email" placeholder="Email" defaultValue="johndoe@gmail.com" className="block w-full p-2 text-gray-900 border outline-none border-gray-300 rounded-md bg-gray-50 text-sm focus:border-blue-200 dark:focus:border-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white-100  transition-colors" />
                            </div>
                            <div className="mb-4">
                                <input type="tel" placeholder="Phone Number" className="block w-full p-2 text-gray-900 border outline-none border-gray-300 rounded-md bg-gray-50 text-sm focus:border-blue-200 dark:focus:border-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white-100  transition-colors" />
                            </div>
                        </div>
                        <div>
                            <h6 className="mb-2">Change Password</h6>
                            <div className="mb-4">
                                <input type="password" placeholder="Current Password" className="block w-full p-2 text-gray-900 border outline-none border-gray-300 rounded-md bg-gray-50 text-sm focus:border-blue-200 dark:focus:border-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white-100  transition-colors" />
                            </div>

                            <div className="mb-4">
                                <input type="password" placeholder="New Password" className="block w-full p-2 text-gray-900 border outline-none border-gray-300 rounded-md bg-gray-50 text-sm focus:border-blue-200 dark:focus:border-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white-100  transition-colors" />
                            </div>

                            <div className="mb-4">
                                <input type="password" placeholder="Confirm New Password" className="block w-full p-2 text-gray-900 border outline-none border-gray-300 rounded-md bg-gray-50 text-sm focus:border-blue-200 dark:focus:border-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white-100  transition-colors" />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <button className="inline-block py-2 px-4 bg-blue-200 dark:bg-blue-300 text-white-100 text-sm rounded-md transition-transform hover:scale-110 mr-4">
                            Update
                        </button>
                        <button className="inline-block py-2 px-4 bg-white-300 dark:bg-dark-200 text-sm rounded-md transition-transform hover:scale-110">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>

            <div className="p-5 mb-5">
                <h6 className="mb-2">General Information</h6>
                <form>
                    <div className="grid lg:gap-[30px] lg:grid-cols-2">
                        <div>
                            <div className="mb-4">
                                <input type="tel" placeholder="Phone Number" className="block w-full p-2 text-gray-900 border outline-none border-gray-300 rounded-md bg-gray-50 text-sm focus:border-blue-200 dark:focus:border-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white-100  transition-colors disabled:bg-gray-200 dark:disabled:bg-gray-800" />
                            </div>
                            <div className="mb-4">
                                <select className="block w-full p-2 text-gray-900 border outline-none border-gray-300 rounded-md bg-gray-50 text-sm focus:border-blue-200 dark:focus:border-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white-100  transition-colors">
                                    <option value="">-- Select Language --</option>
                                    <option value="eng-us">English (United States)</option>
                                    <option value="eng-uk">English (UK)</option>
                                    <option value="fr">French</option>
                                    <option value="ge">German</option>
                                    <option value="ch">Chinese</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <select className="block w-full p-2 text-gray-900 border outline-none border-gray-300 rounded-md bg-gray-50 text-sm focus:border-blue-200 dark:focus:border-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white-100  transition-colors">
                                    <option value="">-- Select Timezone --</option>
                                    <optgroup label="Africa">
                                        <option value="abi">Abidjan</option>
                                        <option value="acc">Accra</option>
                                    </optgroup>
                                    <optgroup label="America">
                                        <option value="la">Los Angeles</option>
                                        <option value="chi">Chicago</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Date Format</label>
                                <label className="inline-flex items-center ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 mr-4">
                                    <input type="radio" name="dateformat" value="format1" className="w-2.5 h-2.5 outline-none ring-1 ring-offset-[3px] ring-gray-300 rounded-full appearance-none checked:bg-gray-500 bg-gray-300 dark:checked:bg-dark-200 mb-0.5 mr-2" />
                                    May 18, 2018
                                </label>
                                <label className="inline-flex items-center ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 mr-4">
                                    <input type="radio" name="dateformat" value="female" className="w-2.5 h-2.5 outline-none ring-1 ring-offset-[3px] ring-gray-300 rounded-full appearance-none checked:bg-gray-500 bg-gray-300 dark:checked:bg-dark-200 mb-0.5 mr-2" />
                                    2018, May, 18
                                </label>
                                <label className="inline-flex items-center ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 mr-4">
                                    <input type="radio" name="dateformat" value="format1" className="w-2.5 h-2.5 outline-none ring-1 ring-offset-[3px] ring-gray-300 rounded-full appearance-none checked:bg-gray-500 bg-gray-300 dark:checked:bg-dark-200 mb-0.5 mr-2" defaultChecked />
                                    2018-03-10
                                </label>
                                <label className="inline-flex items-center ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 mr-4">
                                    <input type="radio" name="dateformat" value="female" className="w-2.5 h-2.5 outline-none ring-1 ring-offset-[3px] ring-gray-300 rounded-full appearance-none checked:bg-gray-500 bg-gray-300 dark:checked:bg-dark-200 mb-0.5 mr-2" />
                                    02/09/2018
                                </label>
                                <label className="inline-flex items-center ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    <input type="radio" name="dateformat" value="female" className="w-2.5 h-2.5 outline-none ring-1 ring-offset-[3px] ring-gray-300 rounded-full appearance-none checked:bg-gray-500 bg-gray-300 dark:checked:bg-dark-200 mb-0.5 mr-2" />
                                    10/05/2018
                                </label>
                            </div>
                        </div>
                        <div>
                            <h6 className="mb-2">Email From Iconic</h6>
                            <p className="text-sm mb-5">
                                I&apos;d like to receive the following emails:
                            </p>
                            <ul className="mb-4">
                                <li className="mb-2.5 last:mb-0">
                                    <label className="inline-flex items-center text-sm text-gray-900 dark:text-gray-300">
                                        <input defaultChecked type="checkbox" name="type" className="form-check-input peer w-[22px] h-[22px] appearance-none ring-0 outline-none rounded-sm bg-white-100 border border-gray-300 checked:border-blue-200 checked:bg-blue-200 mr-2" />
                                        Weekly account summary
                                    </label>
                                </li>
                                <li className="mb-2.5 last:mb-0">
                                    <label className="inline-flex items-center text-sm text-gray-900 dark:text-gray-300">
                                        <input type="checkbox" name="type" className="form-check-input peer w-[22px] h-[22px] appearance-none ring-0 outline-none rounded-sm bg-white-100 border border-gray-300 checked:border-blue-200 checked:bg-blue-200 mr-2" />
                                        Campaign reports
                                    </label>
                                </li>
                                <li className="mb-2.5 last:mb-0">
                                    <label className="inline-flex items-center text-sm text-gray-900 dark:text-gray-300">
                                        <input defaultChecked type="checkbox" name="type" className="form-check-input peer w-[22px] h-[22px] appearance-none ring-0 outline-none rounded-sm bg-white-100 border border-gray-300 checked:border-blue-200 checked:bg-blue-200 mr-2" />
                                        Promotional news such as offers or discounts
                                    </label>
                                </li>
                                <li className="mb-2.5 last:mb-0">
                                    <label className="inline-flex items-center text-sm text-gray-900 dark:text-gray-300">
                                        <input defaultChecked type="checkbox" name="type" className="form-check-input peer w-[22px] h-[22px] appearance-none ring-0 outline-none rounded-sm bg-white-100 border border-gray-300 checked:border-blue-200 checked:bg-blue-200 mr-2" />
                                        Tips for campaign setup, growth and client success stories
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <button className="inline-block py-2 px-4 bg-blue-200 dark:bg-blue-300 text-white-100 text-sm rounded-md transition-transform hover:scale-110 mr-4">
                            Update
                        </button>
                        <button className="inline-block py-2 px-4 bg-white-300 dark:bg-dark-200 text-sm rounded-md transition-transform hover:scale-110">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AccountSettings;