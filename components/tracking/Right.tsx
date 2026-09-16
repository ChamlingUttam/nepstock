import Image from 'next/image'
import React from 'react'

const Right = () => {
  return (
    // <div className='relative'>
      
    //   <Image
    //   src={"/Product.png"}
    //   alt='product'
    //   width={500}
    //   height={100}
    //   className='h-30 w-60'
    //   />
    // </div>


    <div className="relative w-md h-40 sm:h-52 md:h-64 lg:h-80">
  <Image
    src="/Product.png"
    alt="product"
    fill
    className="object-contain"
  />
</div>
  )
}

export default Right
