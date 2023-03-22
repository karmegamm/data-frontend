import React from 'react'
import {Typography} from "@material-tailwind/react";

export const Summary = () => {
  return (<>
    <div className='flex flex-col p-4 gap-5 md:flex-row md:flex-shrink md:rounded-xl md:justify-around md:pt-7'>
      <div className='bg-gray-100 h-72 md:w-96 rounded-xl'>
        <Typography variant="h4" className='text-gray-800 pt-3 mx-auto md:w-72'>
            About
        </Typography>
        <Typography variant="small" className='text-gray-800 pt-3 mx-auto md:w-72'>
            About
        </Typography>
      </div>
      <div className='bg-gray-100 h-72 md:w-96 rounded-xl '>
      <Typography variant="h4" className="text-gray-800 pt-3 mx-auto md:w-72">
            HighLight
        </Typography>
      <Typography variant="small" className="text-gray-800 pt-3 mx-auto md:w-72">
            HighLight
        </Typography>
      </div>
      <div className='bg-gray-100 h-72 md:w-96 rounded-xl'>
      <Typography variant="h4" className="text-gray-800 pt-3 mx-auto md:w-72">
      Recent News & Activity
        </Typography>
      <Typography variant="small" className="text-gray-800 pt-3 mx-auto md:w-72">
      Recent News & Activity
        </Typography>
      </div>
    </div></>
  )
}

export default Summary