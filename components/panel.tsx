import React from 'react'

function GamePanelSection() {
  return (
    <div className="w-full h-auto mb-5 flex flex-col items-center justify-start mt-5 bg-dark-200 ">
        <div className="w-full md:w-[90%]  flex flex-col items-center justify-start ">
            <div className="max-w-[500px] mt-[4rem] text-center mx-auto">
                <h2 className=' font-extrabold veryBoldText text-white-100 text-[2rem] '>Magellan Panel</h2>
                <p className=" text-white-200 font-extrabold ">OpticEngine have worked hard to create a unique game panel with a friendly UI for easy navigation with Custom add-ons to give the user the best experience when hosting with us.</p>
            </div>
            <br />
            <PanelTab />
        </div>
        <br />
        <br />
        <br />
    </div>
  )
}

export default GamePanelSection

function PanelTab(){

    return(
        <div className="w-full flex flex-col items-center justify-center mt-[3rem] ">
            <div className="tablist flex items-center justify-center gap-5 bg-blue-600 border-[4px] border-solid border-blue-300 rounded-[12px] p-2">
              <span className=' px-[15px] py-[14px] cursor-pointer rounded-md hover:bg-blue-400 '>CONSOLE</span>
              <span className=' px-[15px] py-[14px] cursor-pointer rounded-md hover:bg-blue-400 '>FILE MANAGER</span>
              <span className=' px-[15px] py-[14px] cursor-pointer rounded-md hover:bg-blue-400 '>VERSION CHANGER</span>
              <span className=' px-[15px] py-[14px] cursor-pointer rounded-md hover:bg-blue-400 '>PLUGIN MANAGER</span>
            </div>
        </div>
    )
}