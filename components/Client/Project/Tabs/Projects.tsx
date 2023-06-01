import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import Link from "next/link";
import { FiMoreHorizontal } from "react-icons/fi";

export default function ClientProjectsList() {
    return (
        <div className="p-5">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="rounded-lg shadow-md overflow-hidden">
                    <div className="bg-blue-300 text-white-100 p-5">
                        <Link href="/client/projects/test">
                            <h4 className="flex">
                                Project 1
                                <Menu>
                                    <MenuButton className="ml-auto -mt-[8px] h-11 w-11 active:bg-dark-200 active:text-white-100/70 text-white-100 rounded-full flex items-center justify-center">
                                        <FiMoreHorizontal className="inline-block" size={36} />
                                    </MenuButton>
                                    <MenuList className="bg-white-100 dark:bg-dark-200 rounded-md text-dark-200 dark:text-white-100 -ml-[59px]" minW={"160px"}>
                                        <MenuItem  className="py-2 px-4 justify-center border-b dark:border-b-white-600" as={Link} href="">Mute</MenuItem>
                                        <MenuItem className="py-2 px-4 justify-center" as={Link} href="">Leave Project</MenuItem>
                                    </MenuList>
                                </Menu>
                            </h4>
                            <div>
                                <span className="inline-block mr-1 mb-1 rounded-full px-2 py-0.5 text-sm bg-white-300 text-dark-200 tracking-tight">Member</span>
                                <span className="inline-block mr-1 mb-1 rounded-full px-2 py-0.5 text-sm bg-white-300 text-dark-200 tracking-tight">Brandon</span>
                            </div>
                        </Link>
                    </div>
                    <div className="p-5">
                        <div className="flex tracking-tight text-sm">
                            <Link href="" className="uppercase mr-auto">+ Create Server</Link>
                            <span><strong>0</strong> other</span>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg shadow-md overflow-hidden border-dashed border-2 flex items-center justify-center">
                    <span className="text-xl text-white-400 dark:text-white-300">+ New Project</span>
                </div>
            </div>
        </div>
    )
}