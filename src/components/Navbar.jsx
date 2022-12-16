import React, { useState, useEffect } from 'react'
import { MagnifyingGlassIcon, ShoppingBagIcon, HeartIcon } from '@heroicons/react/24/outline'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {selectTotalQty, setOpenCart} from "../app/CartSlice.js";

const Navbar = ({search}) => {


  const [navState, setNavState] = useState(false)

  const dispatch = useDispatch()

  const totalQTY = useSelector(selectTotalQty)

  const onCartToggle = ()=>{
    dispatch(setOpenCart({
      cartState: true
    }))
  }
  
  const onNavScroll = ()=>{
    if(window.scrollY > 30){
      setNavState(true)
    }else{
      setNavState(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onNavScroll)

    return()=>{
      window.removeEventListener('scroll', onNavScroll)
    }
  }, [])

  return (
    <header className={
      !navState 
      ? 'absolute top-7 left-0 right-0 opacity-100 z-[100]'
      : 'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme'
    }>
      <nav className='flex items-center justify-between nike-container'>
        <Link to={'/'}>
          <button type='button' className='flex items-center' >
            <img src={logo} alt="logo/img"
                 className={`h-16 h-auto ${navState && 'filter brightness-0'}`}
            />
          </button>
        </Link>
        

        {
          search?
          <div className='w-full flex items-center justify-center'>
            <input onChange={(e)=>search(e.target.value)} type='text' placeholder='Search' className='h-8 border-none outline-none rounded-2xl px-2 w-[50vw] '/>
          </div>
          :null
        }
        

        <ul className={`flex items-center justify-center gap-2 `}>
          <li className='grid items-center'>
            <Link to={'/products/'}>
              <MagnifyingGlassIcon 
                className={`icon-style ${navState && 'text-slate-900 transition-all duration-300'}`}/>
            </Link>
          </li>
          <li className='grid items-center'>
            <HeartIcon className={`icon-style ${navState && 'text-slate-900 transition-all duration-300'}`}/>
          </li>
          <li className='grid items-center'>
            <button type='button' onClick={onCartToggle} className='border-none outline-none active:scale-110 transition-all duration-300 relative'>
              <ShoppingBagIcon className={`icon-style ${navState && 'text-slate-900 transition-all duration-300'}`}/>
              <div className={`absolute top-4 right-0
                shadow w-4 h-4 text-[0.65rem] leading-tight 
                font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 
                ${navState 
                  ?'bg-slate-900 text-slate-100 shadow-slate-900'
                  :'bg-white text-slate-900 shadow-slate-100' }`}>
                {totalQTY}
              </div>
            </button>
          </li>
        </ul>
        
      </nav>
    </header>
  )
}

export default Navbar