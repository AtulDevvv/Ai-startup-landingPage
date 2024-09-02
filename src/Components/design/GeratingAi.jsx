import React from 'react'
import { loading } from '../../assets'
function GeratingAi({className}) {
  return (
    <div className={`absolute  right-10   bottom-9 rounded-xl flex items-center h-[3.3rem] px-3 bg-n-8/90 ${className}`} >
        <img src={loading}  className='w-5 h-5 mr-4 '  alt="" />
        Ai is genertaing
    </div>
  )
}

export default GeratingAi