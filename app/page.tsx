import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { RiCloudWindyLine } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { BsStopwatch } from "react-icons/bs";



const Page = () => {
  return (
    <div className='bg-blue-500 w-full h-screen lg:px-[20%] px-10 py-10'>
      <div>
        <div>
<h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold'>Weather</h1>
<p>Current conditions and forecast</p>
        </div>
<div className='mt-10 w-[100%] overflow-scroll scrollbar-hide lg:w-[60%] h-100'>
        <div className='bg-blue-300/40 px-10 py-5 rounded-lg'>
          <div className='flex space-x-2 items-center text-gray-200'>
<IoLocationOutline size={20}/>
<p className='text-lg'>San Francisco, CA</p>
          </div>
<div className='flex flex-col'>
  <h1 className='text-white text-7xl mt-10'>22°</h1>
  <p className='text-2xl text-white'>Partly Cloudy</p>
  <p className='text-lg text-gray-300'>H:24° L:18°</p>
</div>

<div className='flex grid-cols-2 gap-3 mt-10'>
  <div className='bg-blue-300/40 p-2 rounded-lg w-[50%]'>
  <div className='flex space-x-2 text-gray-300 items-center'>
<RiCloudWindyLine size={20}/>
    <p>Wind</p>
</div>

    <p className='text-2xl mt-3'>12 km/h</p>
  </div>

  <div className='bg-blue-300/40 p-2 rounded-lg w-[50%]'>
    <div className='flex space-x-2 text-gray-300 items-center'>
<FaRegEye  />
    <p >Visibility</p>
    </div>
    <p className='text-2xl mt-3'>10 km</p>
  </div>


  <div className='bg-blue-300/40 p-2 rounded-lg w-[50%]'>
    <div className='flex space-x-2 text-gray-300 items-center'>
<WiHumidity size={20}/>
    <p>Humidity</p>
    </div>
    
    <p className='text-2xl mt-3'>65%</p>
  </div>

  <div className='bg-blue-300/40 p-2 rounded-lg w-[50%]'>
  <div className='flex space-x-2 text-gray-300 items-center'>
<BsStopwatch/>
    <p>Pressure</p>
    </div>
    <p className='text-2xl mt-3'>1013 mb</p>
  </div>
</div>
        </div>


        </div>

      </div>
    </div>
  )
}

export default Page
