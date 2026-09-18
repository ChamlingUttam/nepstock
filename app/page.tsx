


import TailSection from '@/components/common/TailSection'
import Faq from '@/components/faq/Faq'
import Feature from '@/components/features/Feature'
import Main from '@/components/main/Main'
import Pricing from '@/components/pricing/Pricing'
import Testimonial from '@/components/testimonial/Testimonial'
import WhyUs from '@/components/whyUs/WhyUs'
import React from 'react'

const page = () => {
  return (
    <div>
      <Main/>
      <Feature/>
      <WhyUs/>
      <Testimonial/>
      <Pricing/>

      <Faq/>
      
      <TailSection/>
      
    </div>
  )
}

export default page
