import React from 'react'
import Section from './Section'
import Heading from './Heading'
import { check, robotic3, service1, service2, service3 } from '../assets'
import { brainwaveServices, brainwaveServicesIcons } from '../constants'
import GeratingAi from './design/GeratingAi'
import { PhotChatMessage, VideoBar, VideoChatMessage } from './design/Services'
import { Gradient } from './design/Hero'

function Services() {
  return <Section id='how-to-use'>
    <div className='conatiner'>
       <Heading title='Generative AI made for creators'
       text='BrainWave unlocks the potential of AI-powered applications'
       />
    </div>
    <div className='relative'>
      <div className='relative z-1  flex items-center h-[39rem] mb-5 border border-n-1/10 rounded-3xl overflow-hidden  lg:p-20 xl:h-[46rem]'>
      <div className='absolute top-0 left-0 h-full pointer-events-none md:w-3/5 xl:w-auto '>
      <img className='w-full opacity-40 h-full object-cover md:object-right' src={robotic3} width={800} height={730} alt="Ai-image" />
      </div>
      <div className='relative z-1 max-w-[17rem] ml-auto'>
      <h4 className='h4 mb-4'>Smartest AI</h4>
      <p className='body-2 mb-[3rem] text-n-3'>BrainWave unlocks the potential of Ai-powered applications</p>
      <ul className='body-2'>{brainwaveServices.map((item,index)=>(
        <li className='flex items-start py-4 border-t border-n-6' key={index}>
          <img src={check} width={24} height={24} alt="" />
          <p className='ml-4'>{item}</p>

        </li>
      ))}</ul>
      </div>

      <GeratingAi className='absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg:bottom-8 w-1/2 lg:w-1/5'/>
      
      </div>
      <div className='realtive z-1 grid gap-5 lg:grid-cols-2'>
        <div className='relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden'>
        <div className='absolute inset-0'>
          <img src={service2}  className='h-full w-full object-cover opacity-50' width={630} height={750} alt="robot-2" />
          <div className='absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15'>
          <h4 className='h4 mb-4'>Photo editing</h4>
          <p className='body-2 mb-[3rem] text-n-3'>Automatically ehance your photos using our app&apos; photo editing feature. Try it now</p>
            
          </div>
          <PhotChatMessage/>
        </div>

        </div>
     
      <div className='p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]'>
        <div className='py-12 px-4 xl:px-8'>
          <h4 className='h4 b-4'>Video generation</h4>
          <p className='body-2 mb-[2rem] text-n-3'>The world's most powerful AI photo and videos art generation engine.What will you create?</p>

          <ul className='flex items-center justify-between'>
            {brainwaveServicesIcons.map((item,index)=>(
              <li key={index} className={`flex items-center justify-center ${index==2?'w-[3rem] h-[3rem] p-0.3 bg-conic-gradient rounded-2xl md:w-[4.5rem] md:h-[4.5rem]':'flex w-10 h-10 bg-n-6 md:w-15 md:h-15'}` }>
              <div className={`${index===2?'flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]':''}`}>  <img src={item} alt="" width={24} height={24} />
             
              </div>

              </li>
            ))}
          </ul>
        </div>
        <div className='relative h-[20rem] rounded-xl overflow-hidden md:h-[25rem]'>
          <img src={service3} className='w-full h-full object-cover' width={520} height={400} alt="horry-robot" />
          <VideoChatMessage/>
          <VideoBar/>
        </div>

      <Gradient/>
      </div>

    </div>
    </div>

  </Section>
}

export default Services