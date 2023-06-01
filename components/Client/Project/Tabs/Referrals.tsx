import { AiFillQuestionCircle, AiOutlineGift } from 'react-icons/ai';
import { TfiAnnouncement } from 'react-icons/tfi';

export default function ClientProjectReferrals() {
    return (
        <div className="p-5">
            <div className="grid lg:grid-cols-3 grid-flow-col gap-10">
                <div className="lg:col-span-2">
                    <div className="grid grid-cols-3 gap-5">
                        <div className="rounded-lg shadow-md overflow-hidden">
                            <div className="bg-blue-300 text-white-100 text-center py-10">
                                <TfiAnnouncement size={60} className="inline-block" color="#fff" />
                            </div>
                            <div className="p-5">
                                <h4 className='text-xl mb-3 capitalize'>Share your link</h4>
                                <p className="tracking-tight text-sm">Invite your family, friends and followers to join Hetzner Cloud using your personal link.</p>
                            </div>
                        </div>
                        <div className="rounded-lg shadow-md overflow-hidden">
                            <div className="bg-blue-300 text-white-100 text-center py-10">
                                <AiOutlineGift size={60} className="inline-block" color="#fff" />
                            </div>
                            <div className="p-5">
                                <h4 className='text-xl mb-3 capitalize'>GIVE €⁠20</h4>
                                <p className="tracking-tight text-sm">As soon as someone signs up using your personal link, they'll receive €⁠20 in cloud credits.</p>
                            </div>
                        </div>
                        <div className="rounded-lg shadow-md overflow-hidden">
                            <div className="bg-blue-300 text-white-100 text-center py-10">
                                <AiOutlineGift size={60} className="inline-block" color="#fff" />
                            </div>
                            <div className="p-5">
                                <h4 className='text-xl mb-3 capitalize'>GET €⁠10</h4>
                                <p className="tracking-tight text-sm">Once they spent at least €⁠10 with us (not including credits), you'll receive €⁠10 in cloud credits as a thank you.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-1">
                    <div className="p-5 border rounded-md text-xl uppercase shadow-md mb-5">
                        Referrals <AiFillQuestionCircle className="inline-block" /> <span className="float-right">-</span>
                    </div>
                    <div className="p-5 border rounded-md text-xl uppercase shadow-md mb-5">
                        Pending <AiFillQuestionCircle className="inline-block" /> <span className="float-right">-</span>
                    </div>
                    <div className="p-5 border rounded-md text-xl uppercase shadow-md">
                        Paid <AiFillQuestionCircle className="inline-block" /> <span className="float-right">-</span>
                    </div>
                </div>
            </div>
        </div>
    )
}