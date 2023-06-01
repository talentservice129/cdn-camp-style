import React from 'react'
import {FaStar} from "react-icons/fa"

interface Rating {
    count?: number;
}

function StartRating({count}: Rating) {

  const starCount =  count ?? 5;

  return (
    <div className="flex">
        { 
            (Array(count) as any).fill(starCount).map(i => <FaStar key={i} className="text-yellow-300 text-[15px] " />) 
        }
    </div>
  )
}

export default StartRating