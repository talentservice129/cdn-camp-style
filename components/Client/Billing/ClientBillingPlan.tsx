import React from 'react';

export default function ClientBillingPlan() {
    return (
        <div className="p-10 border rounded-md">
            <h2 className="text-3xl tracking-tight mb-5">Support Plans</h2>
            <div className="flex flex-wrap mb-5 ">    
                <div className='w-[150px] mb-5'>
                    <span className="block uppercase text-sm">Current</span>
                    <p className="text-white-400 dark:text-white-200">Free</p>
                </div>
                <div className='w-[150px] mb-5 mr-auto'>
                    <span className="block uppercase text-sm">Plan Cost</span>
                    <p className="text-white-400 dark:text-white-200">$0/month</p>
                </div>
                <button className="mb-5 px-6 py-4 rounded-sm scale-[1] hover:scale-[1.1] transition-all bg-white-400 dark:bg-white-200 text-white-100 dark:text-dark-200">
                    Edit Plan
                </button>
            </div>
            <div className="bg-[url('/assets/images/account/billing-bg.jpg')] bg-no-repeat bg-cover rounded-md py-5 px-10 mb-10">
                <h3 className="mb-4 text-white-100">Introducing new <strong>OpticEngine Support Plans</strong></h3>
                <p className="mb-4 text-white-100 max-w-[700px]">In addition to our robust free support plan, we now offer two higher-level support plans that ensure urgent inquiries get even faster responses from our team.</p>
                <button className="inline-block px-6 py-4 text-sm rounded-sm scale-[1] hover:scale-[1.1] transition-all bg-blue-300 text-white-100 mb-5">
                    Review plans
                </button>
            </div>
            <p className="text-white-400 dark:text-white-200">Have questions around support plan billing?</p>
            <a href="#" className="text-blue-200">Check out out support pricing FAQ</a>
        </div>
    )
}