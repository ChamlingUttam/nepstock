import React from 'react'
import { Button } from '../ui/button'
import { AlertTriangle, Clock, Monitor, ShoppingBag, Truck } from 'lucide-react'
import { BiCart, BiPurchaseTagAlt } from "react-icons/bi";


const Right = () => {
  return (
    <div>
        <header className='flex flex-col  mt-2 '> 
            <div className='flex items-center gap-2 text-[#057BFF]'>
                <span className='w-8 h-8 rounded-xl flex items-center justify-center bg-[#C2DFFF] text-[#057BFF]'>< BiPurchaseTagAlt size={15}/></span>
                <span>Purchase Orders</span>
            </div>

        <h1 className="mt-4 text-xl font-bold text-black sm:text-xl md:text-2xl lg:text-3xl lg:w-md">
          Manage Your Purchase Orders and Suppliers With Ease
        </h1>

        <p className="mt-4 mb-4 text-sm font-medium leading-6 max-w-md text-gray-400 sm:text-base">
         Simplify supplier management and keep your purchasing process organized from start to finish.
        </p>

        <div className='flex flex-col gap-3 text-gray-500' >
            <div className='flex gap-2 '>
                <span><BiCart className='' size={25} /></span>
                <span>Create purchase orders</span>
            </div>
            <div className='flex gap-2'>
                <span><Truck/></span>
                <span>Track supplier orders</span>
            </div>
            <div className='flex gap-2'>
                <span><Monitor/></span>
                <span>Monitor order status</span>
            </div>

        </div>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <Button className=" cursor-pointer w-full bg-[#075BFF] px-6 py-3 text-white hover:bg-[#064dcc] sm:w-auto">
            START FREE TRIAL
          </Button>

          <Button
            variant="outline"
            className="w-full cursor-pointer border-[#075BFF] px-6 py-3 text-[#075BFF]   sm:w-auto"
          >
            BOOK A DEMO
          </Button>
        </div>
      </header>
    </div>
  )
}

export default Right
