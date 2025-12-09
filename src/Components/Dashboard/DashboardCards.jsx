import React from 'react'
import { FaDollarSign } from 'react-icons/fa'

const DashboardCards = () => {
  return (

    <div className='flex gap-7 justify-center items-center w-full hover:bg-amber-50'>

         <div className='flex justify-evenly shadow-xl p-3 rounded-md bg-white w-3/12 h-28 hover:transition-shadow '>

            <div className='flex flex-col gap-5'>
                <strong className='text-sm text-left'>Total balance</strong>
                <div className='flex flex-row ga-3'>
                    <FaDollarSign className='text-2xl text-gray-950'/>
                    <p className='text-2xl text-gray-950 -mt-1 font-bold'>8,234.56</p>
                </div>
            </div>

            <FaDollarSign className='  text-2xl text-emerald-500 cursor-pointer bg-green-100 rounded-full p-1'/>

        </div>


        <div className='flex justify-evenly shadow-xl p-3 rounded-md bg-white w-3/12 h-28 hover:transition-shadow'>

            <div className='flex flex-col gap-5'>
                <strong className='text-sm text-left'>Total balance</strong>
                <div className='flex flex-row ga-3'>
                    <FaDollarSign className='text-2xl text-gray-950'/>
                    <p className='text-2xl text-gray-950 -mt-1 font-bold'>8,234.56</p>
                </div>
            </div>

            <FaDollarSign className='  text-2xl text-emerald-500 cursor-pointer bg-green-100 rounded-full p-1'/>

        </div>

         <div className='flex justify-evenly shadow-xl p-3 rounded-md bg-white w-3/12 h-28  hover:transition-shadow'>

            <div className='flex flex-col gap-5'>
                <strong className='text-sm text-left'>Total balance</strong>
                <div className='flex flex-row ga-3'>
                    <FaDollarSign className='text-2xl text-gray-950'/>
                    <p className='text-2xl text-gray-950 -mt-1 font-bold'>8,234.56</p>
                </div>
            </div>

            <FaDollarSign className='  text-2xl text-emerald-500 cursor-pointer hover:transition-shadow  bg-green-100 rounded-full p-1'/>

        </div>
    </div>
  )
}

export default DashboardCards