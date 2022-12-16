import React from 'react'
import logo from '../assets/logo.svg'

const Hero = () => {
  return (
    <div className='relative h-auto w-auto flex felx-col'>
      
      
      <div 
        className='bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] absolute top-0 left-0 right-0 opacity-100 z-5'>
      </div>

      <div className='relative w-full flex items-center justify-center'>
        <img src={logo} className='w-full opacity-100 z-20 h-[80vh]' alt="" />
      </div>

      

      <img/> 
    </div>
  )
}

export default Hero