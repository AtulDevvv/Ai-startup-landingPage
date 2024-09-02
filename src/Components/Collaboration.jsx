import React from 'react'
import Section from './Section'
import { collabApps, collabContent, collabText } from '../constants'
import { brainwaveSymbol, check } from '../assets'
import ButtonGradient from '../assets/svg/ButtonGradient'
import Button from './Button'

function Collaboration() {
  return <Section crosses>
    <div className='container lg:flex'>
        <div className='max-w-[25rem]'>
            <h2 className='h2 mb-4 md:mb-8'> Ai Chat App for seamless collaboartion</h2>

            <ul className='max-w-[22rem] mb-10 md:mb-14'>
            {collabContent.map((item)=>(
                <li className='mb-3 py-3' key={item.id}>
                    <div className='flex items-center'>
                        <img src={check} width={24} height={24} alt="check" />
                        <h6 className='body-2 ml-5'>{item.title}</h6>
                      
                    </div>
                    {
                        item.text &&  (
                            <p className='body-2 mt-3 text-n-4'>{item.text}</p>
                        )
                    }
                </li>

            ))}
            </ul>
           <Button>Try it now</Button>
        </div>
        <div className='lg:ml-auto xl:w-[38rem] mt-2'>
            <p className='body-2 mb-4 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:max-auto'>{collabText}</p>

            <div className='relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100 lg:-ml-32 lg:-mt-10 animate-rotate-infinite -ml-40 '>
            <div className='flex w-60 aspect-square m-auto border border-n-6 rounded-full '>
                <div className='w-[6rem] m-auto aspect-square p-[0.2rem] bg-conic-gradient rounded-full animate-pulse'>
                    <div className='flex items-center justify-center w-full h-full bg-n-8 rounded-full'>
                        <img src={brainwaveSymbol} width={48} height={48} al='brainwave' alt="" />
                    </div>
                </div>

                </div>
                <ul className=''>{collabApps.map((app,index)=>(
                    <li key={app.id}
                    className={`absolute top-0 left-1/2 h-1/2 -ml-[1rem]  rotate-${index*45} origin-bottom`}
                    >
                        <div className='border p-1 bg-gray-800 backdrop-blur-lg filter '  >
                            <img className='m-auto' src={app.icon} width={app.width} height={app.height} alt="" />

                        </div>
                    </li>
                ))}</ul>
                </div>

        </div>
       

    </div>

  </Section>
}

export default Collaboration