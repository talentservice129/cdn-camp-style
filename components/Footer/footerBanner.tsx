import React from 'react'

function FooterBanner() {


  return (
    <div className="w-full flex flex-col items-center justify-center md:px-[2rem]">
        <div className="relative top-0 md:top-[-2rem] w-full h-auto md:w-[100%] mt-2 rounded-[12px] overflow-hidden ">
            <div id="footer-banner-background" className="w-full h-full bg-blue-400 p-4 absolute top-0 left-0 flex flex-wrap items-center justify-between gap-5">
                <div className="flex flex-col items-start justify-start">
                    <h3 className="text-white-100 font-extrabold veryBoldText text-[1.65rem] ">START YOUR OWN SERVER TODAY!</h3>
                    <p className="text-white-100 text-[14px]">Start your journey with your friends today with Rivage CDN</p>
                </div>
                <a href="#" className="mr-5 px-4 py-2 border-[2px] border-solid border-white-100 rounded-md bg-transparent font-extrabold text-[15px] text-white-100 transition-all hover:scale-[1.1] ">START SHOPPING</a>
            </div>
        </div>
    </div>
  )
}

export default FooterBanner