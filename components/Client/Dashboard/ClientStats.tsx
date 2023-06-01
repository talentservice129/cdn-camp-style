import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import { BiSupport } from "react-icons/bi";
import { FaProjectDiagram } from "react-icons/fa";

export default function ClientStats() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 mb-4 mt-4">
            <div className="sm:col-span-1  md:col-span-1 lg:col-span-1 xl:col-span-1">
                <div className="dark:bg-dark-200 bg-gray-200 p-4">
                    <div className="card-body">
                        <div className="flex flex-wrap content-between">
                            <div className="">
                                <p className="uppercase dark:text-slate-400 text-black font-medium text-xs">Projects</p>
                                <h4 className="font-medium text-[20px] dark:text-slate-300">0</h4>
                            </div>
                            <div className="ml-auto self-center">
                                <FaProjectDiagram className={"text-3xl text-slate-400"} />
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="sm:col-span-1  md:col-span-1 lg:col-span-1 xl:col-span-1 ">
                <div className="dark:bg-dark-200 bg-gray-200 p-4">
                    <div className="card-body">
                        <div className="flex flex-wrap content-between">
                            <div className="">
                                <p className="uppercase dark:text-slate-400 text-black font-medium text-xs">Tasks</p>
                                <h4 className="font-medium text-[20px] dark:text-slate-300">0
                                </h4>
                            </div>
                            <div className="ml-auto self-center">
                                <i className="ti ti-subtask text-3xl text-slate-400"></i>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="sm:col-span-1  md:col-span-1 lg:col-span-1 xl:col-span-1 ">
                <div className="dark:bg-dark-200 bg-gray-200 p-4">
                    <div className="card-body">
                        <div className="flex flex-wrap content-between">
                            <div className="">
                                <p className="uppercase dark:text-slate-400 text-black font-medium text-xs">Support Tickets</p>
                                <h4 className="font-medium text-[20px] dark:text-slate-300">0</h4>
                            </div>
                            <div className="ml-auto self-center">
                                <BiSupport className={"text-3xl text-slate-400"} />
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="sm:col-span-1  md:col-span-1 lg:col-span-1 xl:col-span-1 ">
                <div className="dark:bg-dark-200 bg-gray-200 p-4">
                    <div className="card-body">
                        <div className="flex flex-wrap content-between">
                            <div className="">
                                <p className="uppercase dark:text-slate-400 text-black font-medium text-xs">Balance</p>
                                <h4 className="font-medium text-[20px] dark:text-slate-300">$0.00</h4>
                            </div>
                            <div className="ml-auto self-center">
                                <Link href="/client/account/billing" className="bg-green-500 text-white p-3">Add Balance</Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            { isOpen && <div className="fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                <div className="relative w-full h-full  flex items-center p-4">
                    <div className="absolute w-full h-full dark:bg-dark-200/70 bg-white-100/30" onClick={onClose}></div>
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 max-w-md md:h-auto mx-auto">
                        <button type="button" onClick={onClose} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="px-6 py-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add funds</h3>
                            <form className="space-y-6" action="#">
                                <div>
                                    {/* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label> */}
                                    <input type="text" name="email" id="email" className="block w-full p-2 text-gray-900 border outline-none border-gray-300 rounded-md bg-gray-50 text-sm focus:border-blue-200 dark:focus:border-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white-100  transition-colors disabled:bg-gray-200 dark:disabled:bg-gray-800" required />
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}