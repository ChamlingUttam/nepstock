import React from 'react'
import { Button } from '../ui/button'
import { AlertTriangle, Clock, ShoppingBag } from 'lucide-react'

const Left = () => {
  return (
    <div>
        <header className='flex flex-col '> 
            <div className='flex gap-2 text-[#057BFF]'>
                <span><ShoppingBag/></span>
                <span>Stock tracking</span>
            </div>

        <h1 className="mt-4 text-xl font-bold text-black sm:text-xl md:text-2xl lg:text-3xl lg:w-md">
          Track Every Item and Keep Your Inventory Under Control
        </h1>

        <p className="mt-4 mb-4 text-sm font-medium max-w-md leading-6 text-gray-400 sm:text-base">
         Keep your inventory accurate, organized, and up to date with real-time stock monitoring.
        </p>

        <div className='flex flex-col gap-3 text-gray-500' >
            <div className='flex gap-2 '>
                <span><Clock/></span>
                <span>Real-time stock updates</span>
            </div>
            <div className='flex gap-2'>
                <span><AlertTriangle/></span>
                <span>Real-time stock updates</span>
            </div>
            <div className='flex gap-2'>
                <span><ShoppingBag/></span>
                <span>Product quantity tracking</span>
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

export default Left
