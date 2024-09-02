import React from 'react'
import Section from './Section'
import { smallSphere, stars } from '../assets'
import Heading from './Heading'
import PricingList from './PricingList'

function Pricing() {
  return <Section id='pricing' className='overflow-hidden'>
    <div className='container relative z-2'>
        <div className='hidden relative justify-center mb-[6.5em] lg:flex'>
            <img src={smallSphere} className='relative z-1' alt="shpere" width={255} height={255} />
           <div className='absolute top-1/2 left-1/2 w-[60rem] pointer-events-none -translate-x-1/2 -translate-y-1/2'>
           <img src={stars} className='w-full' width={950}
            height={400} alt="" />

           </div>
        </div>
        <Heading tag='Get started with Brainwave'
        title='Pay once,use forever'/>
        <div className='relative'>
            <PricingList/>


        </div>

    </div>

  </Section>
}

export default Pricing