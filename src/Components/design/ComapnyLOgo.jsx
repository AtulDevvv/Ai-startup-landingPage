import React from 'react'
import { companyLogos } from '../../constants'

function ComapnyLOgo() {
  return (
    <div className='hidden lg:block '>
        <h5 className='tagline mb-6 text-center text-n-1/50'> Helping people to create beautiful content</h5>
        <ul className='flex flex-row gap-9'>
            {companyLogos.map((logo,index)=>(
               <li className='flex items-center justify-center flex-1 h-[0.8rem] ' key={index}> <img src={logo} width={100} height={100} alt="LOho" /></li>
            ))}
        </ul>
    </div>
  )
}

export default ComapnyLOgo