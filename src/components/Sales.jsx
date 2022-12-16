import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import React from 'react'
import ProductCard from './ProductCard'

const Sales = ({products}) => {

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
    <div className='nike-container py-10 px-10 rounded-2xl shadow shadow-slate-900'>

      <Splide options={splideOptions}>
        {
          products.map((item, i)=>(
            <SplideSlide key={i}>
              <ProductCard product={item} />
            </SplideSlide>
            
          ))
        }
      </Splide>

    </div>
  )
}

export default Sales