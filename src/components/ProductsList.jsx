import React from 'react'
import ProductCard from './ProductCard'
import {Link} from "react-router-dom";

const ProductsList = (
  {products, addToCart}
  ) => {
  return (
    <div className='nike-container flex flex-col gap-4'>
      <div className='grid justify-items-center gap-5 grid-cols-4 z-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
      {
        products.map((product, i)=>(
          <ProductCard product={product} key={i} addToCart={addToCart}/>
        ))
      }

      
    </div>

    <div className='w-full flex items-center justify-center'>
      <Link to={'/products/'}>
        <button className='px-3 py-2 bg-slate-900 rounded-2xl text-white'>
          Show More....
        </button>
      </Link>
      
    </div>
    
    </div>
  )
}

export default ProductsList