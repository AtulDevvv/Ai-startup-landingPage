import React from 'react'
import Heading from './Heading'
import Section from './Section'
import Arrow from '../assets/svg/Arrow'
import { benefits } from '../constants'
import { GradientLight } from './design/Benefits'
import clipPath from '../assets/svg/ClipPath'

function Benefits() {
  return  <Section id='features'>
    <div className='container relative z-2'>
        <Heading className='md:max-w-md' title='Chat Smarter,Not Harder with this Ai model'/>
         </div>
         <div className=' flex flex-wrap mb-10 gap-10 p-2'>
            {benefits.map((benefit)=>(
                <div className='block relative p-0.5  bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] ' key={benefit.id} style={{backgroundImage:`url(${benefit.backgroundUrl})`}}>
                    <div className='relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none'>
                    <h5 className='h2 mb-5 '>{benefit.title}</h5>
                    <p className='text-n-3'>{benefit.text}</p>
                    <div className='flex items-center mt-auto'>
                        <img src={benefit.iconUrl} width={48} height={48} alt="" />
                        <p className='ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider'>Explore more</p>
                        <Arrow/>
                    </div>
                    </div>
                    { benefit.light&&<GradientLight/>}


                    <div className='absolute  inset-0 ' style={{clipPath:'url(#nbenefits)'}}>
                        <div className='absolute inset-0  opacity-0 transition-opacity hover:opacity-10'>
                            {benefit.imageUrl && (
                                <img src={benefit.imageUrl}
                                width={380}
                                height={367}
                                alt={benefit.title}
                                className='w-full h-full object-cover '
                                />
                            )}
                        </div>
                    </div>
                  


                </div>
            ))}

         </div>

  </Section>
}

export default Benefits