import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { truncate } from 'lodash'
import { Link } from 'react-router-dom'
import {useDispatch} from "react-redux";
import {setAddItemToCart, setOpenCart} from "../app/CartSlice.js";


//: {id, brand, category, description, discountPercentage, images, price, rating, stock, thumbnail, title}
const ProductCard = ({product: {id, brand, category, description, discountPercentage, images, price, rating, stock, thumbnail, title}}) => {

  const dispatch = useDispatch()
  const onAddToCart = ()=>{
    const item = {id, brand, category, description, discountPercentage, images, price, rating, stock, thumbnail, title, cartQuantity:1}
    dispatch(setAddItemToCart(item))
  }

  const onCartToggle = ()=>{
    dispatch(setOpenCart({
      cartState: true
    }))
  }
  
  
  return (
    <>
      <div 
        className='relative flex items-center justify-center flex-col  rounded-xl overflow-hidden shadow shadow-slate-900 hover:shadow-2xl transition-all duration-300 ease-in-out'>
        <Link to={`/product/${id}`}>
          <img src={thumbnail} alt="" className='h-56' />
        </Link>
        

        <div className='absolute top-10 right-0 bg-yellow-500 p-1 rounded'>{discountPercentage}%</div>

        
        <div className='flex justify-between gap-2 items-center px-2'>
          <div className='flex gap-1 flex-col'>
            <h1 className='font-semibold text-lg'>{title}</h1>
            <h2>{category}</h2>
            <h2>{brand}</h2>
            <p className=''>{truncate(description, {length:100})}</p>
          </div>

          <div className='p-1 bg-slate-100 flex justify-center items-center w-10 rounded-lg'>${price}</div>
        </div>

        <div className='flex justify-between w-full p-1'>
          <button 
              onClick={()=>{
                onAddToCart()
                onCartToggle()
              }}
              className='bg-slate-900 px-2 py-1 rounded-xl text-white active:scale-110 transition-all duration-300'>
            Buy Now
          </button>

          <div className='flex justify-between gap-4'>
            <div onClick={onAddToCart}>
              <ShoppingBagIcon className='icon-style w-6 h-6 text-black' />
            </div>
            
            <HeartIcon className='icon-style w-6 h-6 text-red-500'/>
          </div>

        </div>

      </div>
    </>
  )
}

export default ProductCard