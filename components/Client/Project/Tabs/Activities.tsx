export default function ClientProjectActivites() {
    return (
        <div className="p-5">
            <div className="flex flex-wrap">
                <h2 className="text-xl tracking-tight mb-5 mr-auto">Activites</h2>
                <button className="inline-block py-2 px-4 cursor-pointer bg-blue-300 text-white-100 text-sm rounded-md transition-transform hover:scale-110 mb-5">Filter</button>
            </div>
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