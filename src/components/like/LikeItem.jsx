import React from 'react'
import {TrashIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'
import { useDispatch } from 'react-redux';
import { setRemoveItemFromLike } from '../../app/likeSlice';
import { setAddItemToCart } from '../../app/CartSlice';
import { Link } from 'react-router-dom';

const LikeItem = ({item: {id, brand, category, description, discountPercentage, images, price, rating, stock, thumbnail, title, cartQuantity}}) => {

  const dispatch = useDispatch()
  const onRemoveItem =()=>{
    dispatch(setRemoveItemFromLike({id, brand, category, description, discountPercentage, images, price, rating, stock, thumbnail, title, cartQuantity}))
  }

  const onAddToCart = ()=>{
    const item = {id, brand, category, description, discountPercentage, images, price, rating, stock, thumbnail, title, cartQuantity:1}
    dispatch(setAddItemToCart(item))
  }

  return (
    <div className='flex items-center justify-between w-full px-5'>

      <div className='flex items-center pag-5'>
        <div className={`bg-gradient-to-b bg-theme shadow shadow-slate-900 relative rounded p-3 hover:scale-105 transition-all duration-75 
        ease-in-out grid items-center`}>
          <Link to={`/product/${id}`}>
            <img src={thumbnail} alt={`img/cart-item/${id}`} 
              className='w-36 h-auto object-fill lg:w-28'
            />
          </Link>
          
          <div className='absolute ring-1 top-1 blur-theme-effect bg-white/80 text-black text-xs px-1 rounded'>
            ${price}
          </div>
        </div>
        <div className='grid items-center gap-4'>
          <div className='grid items-center leading-none'>
            <h1 className='font-medium text-lg text-slate-900 lg:text-sm'>{title}</h1>
            <p className='text-sm text-slate-800 lg:text-xs'>{description}</p>
          </div>

        </div>
      </div>


      <div className='grid items-center gap-5'>
        <div onClick={onAddToCart}>
          <ShoppingBagIcon className='icon-style w-10 h-10 text-black shadow rounded-xl shadow-slate-900 hover:shadow-2xl' />
        </div>

        <div className='grid items-center justify-center'>
          <button type='button' onClick={onRemoveItem}
            className='bg-theme-cart rounded p-1 lg:p-0.5 grid items-center justify-items-center active:scale-110 cursor-pointer'>
            <TrashIcon className='h-5 w-5 text-white'/>
          </button>

          
        </div>
      </div>
    </div>
  )
}

export default LikeItem