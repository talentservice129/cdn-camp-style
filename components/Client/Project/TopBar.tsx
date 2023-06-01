import { useDisclosure } from "@chakra-ui/react";
import { AiFillExclamationCircle, AiOutlineClose } from "react-icons/ai";

export default function Topbar() {
    const {
      isOpen: isVisible,
      onClose,
    } = useDisclosure({ defaultIsOpen: true })

    return isVisible ? (
        <div className="bg-blue-300 text-white-100 rounded-md px-4 py-5 my-10">
            <div className="flex items-center">
                <div className="mr-auto flex">
                    <AiFillExclamationCircle className="inline-block mr-2.5" size={24} />
                    <div>
                        <h2 className="font-bold mb-1 text-xl">Possible Issues Rescaling Cloud Servers in Texas</h2>
                        <p className="font-extralight tracking-tight -mb-2.5">
                            <span className="inline-block mr-5 mb-2.5"><strong className="font-medium">Start at:</strong> 2023-01-16 13:00 GMT-8</span>
                            <span className="inline-block mb-2.5"><strong className="font-medium">Last updated:</strong> about 1 month ago</span>
                        </p>
                    </div>
                </div>
                <button onClick={onClose}><AiOutlineClose /></button>
            </div>
        </div>
    ) : <></>
}