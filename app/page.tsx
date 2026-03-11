import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { RiCloudWindyLine } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { BsStopwatch } from "react-icons/bs";
 import { CiCloud } from "react-icons/ci";
 import { IoSunnyOutline } from "react-icons/io5";





const Page = () => {
  return (
    <div className='bg-blue-500 w-full min-h-screen lg:px-[20%] px-10 py-10'>
      <div>
        <div>
<h1 className='text-4xl text-white font-bold'>Weather</h1>
<p>Current conditions and forecast</p>
        </div>
<div  className='mt-10 w-full lg:w-[40%]'>
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

<div className='grid grid-cols-2 gap-4 mt-10 lg:mt-20'>
  <div className='bg-blue-300/40 p-2 rounded-lg'>
  <div className='flex space-x-2 text-gray-300 items-center'>
<RiCloudWindyLine size={20}/>
    <p>Wind</p>
</div>
    <p className='text-2xl mt-3'>12 km/h</p>
  </div>

  <div className='bg-blue-300/40 p-2 rounded-lg'>
    <div className='flex space-x-2 text-gray-300 items-center'>
<FaRegEye  />
    <p >Visibility</p>
    </div>
    <p className='text-2xl mt-3'>10 km</p>
  </div>


  <div className='bg-blue-300/40 p-2 rounded-lg'>
    <div className='flex space-x-2 text-gray-300 items-center'>
<WiHumidity size={20}/>
    <p>Humidity</p>
    </div>
    
    <p className='text-2xl mt-3'>65%</p>
  </div>

  <div className='bg-blue-300/40 p-2 rounded-lg'>
  <div className='flex space-x-2 text-gray-300 items-center'>
<BsStopwatch/>
    <p>Pressure</p>
    </div>
    <p className='text-2xl mt-3'>1013 mb</p>
  </div>
</div>
        </div>


       

        <div className='bg-blue-300/40 mt-20 px-10 py-5 rounded-lg'>
          <h1 className='font-semibold text-xl'>Hourly Forecast</h1>
 
          <div className='flex gap-6 mt-5 overflow-x-auto pb-4'>

          <div className=' text-xl flex flex-col gap-3 items-center bg-blue-300/20 py-5 px-4 rounded-lg'>
<p >Now</p>
<CiCloud  size={40}/>
<p>22°</p>
          </div>

          <div className=' text-xl flex flex-col gap-3 items-center bg-blue-300/20 py-5 px-4 rounded-lg'>
<p>11 AM</p>
<IoSunnyOutline size={40} className="text-yellow-400"/>
<p>23°</p>
          </div>

          <div className=' text-xl flex flex-col gap-3 items-center bg-blue-300/20 py-5 px-4 rounded-lg'>
<p>12 PM</p>
<IoSunnyOutline size={40} className="text-yellow-400"/>
<p>24°</p>
          </div>

          <div className=' text-xl flex flex-col gap-3 items-center bg-blue-300/20 py-5 px-4 rounded-lg'>
<p>1 PM</p>
<IoSunnyOutline size={40} className="text-yellow-400"/>
<p>24°</p>
          </div>

          <div className=' text-xl flex flex-col gap-3 items-center bg-blue-300/20 py-5 px-4 rounded-lg'>
<p>2 PM</p>
<CiCloud size={40}/>
<p>23°</p>
          </div>
    

          </div>
        </div>
 </div>
      </div>
    </div>
  )
}

export default Page
