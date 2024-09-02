import React from 'react'
import { notificationImages } from '../../constants'
import { notification1 } from '../../assets'

function Notification( {className ,title}) {
  return (
    <div className={`${className} w-48 hidden    absolute bottom-[16vw] right-[0vw] lg:flex items-center p-2 pr-6 bg-n-9/.40 backdrop-blur border border-n-1/40 rounded-2xl gap-5`}>
        <img src={notification1} width={40} height={40} alt="" />
        <div className='flex-1'>
            <h6 className='mb-1 font-semibold justify-between text-base'> {title}</h6>
            <div className='flex items-center justify-between '>
                <ul className='flex -m-0.5 '>
                    {notificationImages.map((item,index)=>(
                        <li key={index} className='border-2 border-n-12  rounded-full'>
                            <img src={item} className='w-full rounded-full' width={20} height={20} alt="" />
                        </li>
                    ))}
                </ul>
            </div>
                <div className='body-2 text-n-13 '>
                    <h6>1 min ago</h6>
                </div>
        </div>
    </div>
  )
}

export default Notification