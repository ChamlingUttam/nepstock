

import Analysis from '@/components/analysis/Analysis'
import Order from '@/components/order/Order'
import Team from '@/components/team/Team'
import Tracking from '@/components/tracking/Tracking'
import React from 'react'

const Feature = () => {
  return (
    <div className='bg-[#E6F2FF] w-full flex flex-col gap-7 py-5 '>
      <Tracking/>
      <Order/>
      <Analysis/>
      <Team/>
    </div>
  )
}

export default Feature
