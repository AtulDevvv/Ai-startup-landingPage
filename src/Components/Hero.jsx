import React, { useRef } from 'react'
import { curve, robotic } from '../assets'
import Button from './Button'
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import {BackgroundCircles, BottomLine,Gradient} from './design/Hero'
import {heroIcons} from '../constants'
import GeratingAi from './design/GeratingAi';
import Notification from './design/Notification';
import SectionSvg from "../assets/svg/SectionSvg";
import ComapnyLOgo from './design/ComapnyLOgo';

function Hero({}) {

  const parallexRef=useRef(null)
  return (
    <div ref={parallexRef} className='w-full mt-20 py-4 p-10 lg:flex  flex-col items-center justify-center bg-gradient-to-r to-black from-black via-orange-500 to-orange-600" '>
      <BackgroundCircles/>
      <SectionSvg/>
        <div className='w-full relative flex flex-col justify-center items-center lg:w-[60%]  '>
            <h1 className='flex lg:block flex-col text-3xl lg:text-5xl lg:leading-[4vw] font-bold'> <span className='ml-5 lg:ml-1'>Explore the </span><span className='ml-[-20px] lg:ml-1'>Possibilities of AI  </span><span className='ml-3 lg:ml-0'> Chatting with </span>
            <span className='ml-[31px] lg:ml-0 lg:relative  '>Brainwave
            <span><img src={curve} className='lg:absolute ml-[0px] bottom-0 left-5' width={'160px'} alt="" /></span>
                </span>
               </h1>
                <h6 className='text-sm mt-3 text-white/70'> Uleash the power of Ai with brainwave chat Ai technology && boost up your life to 100%</h6>
                <Button href='#getStarted' className="text-sm mt-5">
                  GET STARTED
                </Button>

                <div className='w-full relative  mt-5 h-[50vh] lg:h-[70vh] rounded-lg overflow-hidden  '>
                  <img className='cover  outline outline-orange-400 after:content-[" "] after:bg-green-500 after:absolute after:top-[-10%] after:right-0  w-full translate-y-[6%] rounded-lg md:scale-[1] md:translate-y-[6%] lg:-translate-y-[23%] gradient-border
                   ' src={robotic} width={1024} height={490} alt="" />

                   <ScrollParallax isAbsolutelyPositioned>


                  <ul className='hidden z-10 absolute -left-[0 rem] bottom-[7.5rem] px-1 py-1 border-n-1/10 rounded-2xl xl:flex backdrop-blur-lg bg-gray-400 opacity-20 border-white border-2'>
                  {heroIcons.map((icon,index)=>(
                    <li key={index} className='p-5'>
                      <img className='hover:text-blue-500 transition-colors duration-200'  style={{color:'white'}} src={icon} width={24} height={23} alt="" />
                    </li>
                  ))}

                  </ul>
                
                   <GeratingAi/>
                   </ScrollParallax>
                   <ScrollParallax isAbsolutelyPositioned>
                  <Notification />
                   </ScrollParallax>
                </div>
                <Gradient/>
        </div>
        <ComapnyLOgo/>
        
    </div>
  )
}

export default Hero