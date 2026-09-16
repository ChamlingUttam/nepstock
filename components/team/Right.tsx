import React from 'react'
import { Button } from '../ui/button'
import { AlertTriangle, Clock, Monitor, Settings, ShoppingBag, Truck, User, UserCircle, Users } from 'lucide-react'
import { BiCart, BiPurchaseTagAlt } from "react-icons/bi";


const Right = () => {
  return (
    <div>
        <header className='flex flex-col  '> 
            <div className='flex gap-2 text-[#057BFF]'>
                <span><Users/></span>
                <span>TEAM MANAGEMENT</span>
            </div>

        <h1 className="mt-4 text-xl font-bold text-black sm:text-xl md:text-2xl lg:text-3xl lg:w-md">
          Manage Your Team and Control Access From One Place
        </h1>

        <p className="mt-4 mb-4 text-sm font-medium leading-6 max-w-md text-gray-400 sm:text-base">
         Give your team the tools and permissions they need to work efficiently while keeping your business organized.
        </p>

        <div className='flex flex-col gap-3 text-gray-500' >
            <div className='flex gap-2 '>
                <span><User className='' size={25} /></span>
                <span>Role-based access</span>
            </div>
            <div className='flex gap-2'>
                <span><UserCircle/></span>
                <span>Staff account management</span>
            </div>
            <div className='flex gap-2'>
                <span><Settings/></span>
                <span>Permission controls</span>
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
