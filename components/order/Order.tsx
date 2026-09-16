import React from 'react'
import Left from './Left'
import Right from './Right'

const Order = () => {
  return (
    <div className='w-full justify-around  px-7 gap-3 items-center flex lg:flex-row flex-col'>
        <Left/>
        <Right/>
      
    </div>
  )
}

export default Order
