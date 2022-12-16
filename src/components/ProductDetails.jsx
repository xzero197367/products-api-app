import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import axios from 'axios';
import {HeartIcon, ShoppingBagIcon} from "@heroicons/react/24/outline/index.js";
import {useDispatch} from "react-redux";
import {setAddItemToCart, setOpenCart} from "../app/CartSlice.js";

const ProductDetails = () => {
  const [product, setProduct] = useState({})
  const [images, setImages] = useState([])
  const param = useParams();

  const dispatch = useDispatch()
  const onAddToCart = ()=>{
    const item = {...product, cartQuantity:1}
    dispatch(setAddItemToCart(item))
  }

  const onCartToggle = ()=>{
    dispatch(setOpenCart({
      cartState: true
    }))
  }

  // get product
  const getProduct = async()=>{
    const res = await axios.get(`https://dummyjson.com/products/${param.id}`)
    setProduct(res.data)
    setImages(res.data.images)
  }

  useEffect(() => {
    getProduct()
  }, [])
  

    const splideOptions = {
      perPage: 4,
      perMove: 1,
      type: 'loop',
      rewind: true,
      keyboard: 'global',
      gap: '1rem',
      pagination: false,
      breakpoints:{
        1200: {perPage: 3},
        991: {perPage: 2.3},
        768: {perPage: 2},
        500: {perPage: 1.3},
        425: {perPage: 1},  
      }
    }

  return (
    
    <div className='relative'>
      <div 
          className='bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] absolute top-0 left-0 right-0 opacity-100 z-5'>
      </div>
      <div className='flex flex-col nike-container relative gap-5'>
        


        <div className='h-32'></div>
        <div>

          <Splide options={splideOptions}>
            <SplideSlide className='rounded-xl overflow-hidden'>
              <img src={product.thumbnail} alt=""/>
            </SplideSlide>
            {
              images.map((val, i)=>(
                <SplideSlide className='rounded-xl overflow-hidden' key={i}>
                  <img src={val} alt="" />
                </SplideSlide>
              ))
            }
          </Splide>

        </div>

        <div className='flex flex-col gap-5 p-2 shadow-2xl z-10 shadow-slate-900 rounded'>
          <div className='text-lg'>{product.category}</div>

          <div className='flex gap-5 items-center text-blue-500'>
            <div>{product.brand}</div>
            <div>{product.rating}</div>
            <div>{product.stock}</div>
          </div>
          <div className='flex flex-col justify-start gap-5'>
            <div>
              <h1 className='text-xl font-semibold'>{product.title}</h1>
              <p>{product.description}</p>
            </div>
            <div className='p-2 bg-slate-200 flex justify-center w-32 shadow rounded-xl shadow-slate-900 items-center text-orange-500'>${product.price}</div>
          </div>
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
    </div>

    
  )
}

export default ProductDetails