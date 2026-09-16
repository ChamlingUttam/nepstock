import React from 'react'
import Left from './Left'
import Right from './Right'

const Tracking = () => {
  return (
    <div className='w-full justify-around lg:px-10 px-7 gap-3 items-center flex lg:flex-row flex-col'>
        <Left/>
        <Right/>
      
    </div>
  )
}

export default Tracking
