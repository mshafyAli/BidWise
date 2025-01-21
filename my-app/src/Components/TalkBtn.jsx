

import React from 'react'
import { IoChatboxEllipses } from "react-icons/io5";


export const TalkBtn = ({width = 'w-full',mdWidth = "md:w-[230px]", bgColor = "#FFBA1A" ,label="Chat With Experts",icon: Icon = IoChatboxEllipses }) => {
  const handleTalkToExpertClick = () => {
    if (window.Tawk_API?.maximize) {
      window.Tawk_API.maximize();
    } else {
      console.error("Tawk.to is not initialized or not loaded yet.");
    }
  };


    
      
  return (
    <div>
         <button
            onClick={handleTalkToExpertClick}
            className={`flex gap-2 items-center bg-secondary ${width} ${mdWidth} group hover:text-primary h-10 justify-center rounded-md`} style={{ backgroundColor: bgColor }}
          >
          {Icon && <Icon className="text-2xl md:text-3xl  group-hover:text-primary text-white" />}
            <h1 className="text-white font-bold text-sm md:text-base uppercase  group-hover:text-primary">
             {label}
            </h1>
          </button>
    </div>
  )
}




