import React from 'react'
import { Button } from '../ui/button'
import { AlertTriangle, Clock, ShoppingBag } from 'lucide-react'
import { RiBillLine } from "react-icons/ri";
import { FaRegChartBar } from "react-icons/fa";
import { VscGraphScatter } from "react-icons/vsc";


const Left = () => {
  return (
    <div>
        <header className='flex flex-col '> 
            <div className='flex gap-2 items-center text-[#057BFF]'>
                <span className='w-8 h-8 rounded-xl flex items-center justify-center bg-[#C2DFFF] text-[#057BFF]'><FaRegChartBar size={20}/></span>
                <span>Reports & Analytics</span>
            </div>

        <h1 className="mt-4 text-xl font-bold text-black sm:text-xl md:text-2xl lg:text-3xl lg:w-md">
               Understand Your Business Better With Clear Reports and Analytics        </h1>

        <p className="mt-4 mb-4 text-sm font-medium max-w-md leading-6 text-gray-400 sm:text-base">
         Turn your inventory data into clear insights that help you understand performance and make better decisions.
        </p>

        <div className='flex flex-col gap-3 text-gray-500' >
            <div className='flex gap-2 '>
                <span><RiBillLine size={20}/></span>
                <span>Sales & inventory reports</span>
            </div>
            <div className='flex gap-2'>
                <span><FaRegChartBar size={20}/></span>
                <span>Business performance insights</span>
            </div>
            <div className='flex gap-2'>
                <span><VscGraphScatter size={20}/></span>
                <span>Stock movement analysis</span>
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
