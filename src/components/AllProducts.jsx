import React, {useState, useEffect} from 'react'
import ProductCard from './ProductCard'
import PaginationComponent from './PaginationComponent';
import {Splide, SplideSlide} from "@splidejs/react-splide";
import axios from 'axios';


const AllProducts = ({products, pageCount, getPage, changeCategory}) => {
    
    const [categs, setCategs] = useState([])
    const [categ, setCateg] = useState('')
    let listP = [...products]

    // get all products
    const getCategories = async()=>{
      const res = await axios.get("https://dummyjson.com/products/categories")
      setCategs([...res.data, 'All'])
    }
    
    useEffect(() => {
      getCategories()
    }, [])
    


    const splideOptions = {
        perPage: 4,
        perMove: 1,
        //type: 'loop',
        rewind: true,
        keyboard: 'global',
        gap: '.5rem',
        pagination: false,
        breakpoints:{
            //1200: {perPage: 3},
            //991: {perPage: 2.3},
            768: {perPage: 3},
            //500: {perPage: 1.3},
            //425: {perPage: 1},
        }
    }
    
  return (
    <div className='relative flex flex-col'>

      <div className='h-32'></div>

      
        
      <div 
        className='bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] absolute top-0 left-0 right-0 opacity-100 z-5'>
      </div>

      <div className='product-date  z-25 opacity-100 absolute right-10 top-[120px]'>
        <form action="#">
          <label htmlFor="sort"></label>
          <select name="sort" id="sort" className='rounded shadow shadow-slate-900 border-none outline-none'>
            <option value='lowest'>Price(lowest)</option>
            <option value='lowest'>Price(highest)</option>
            <option value='lowest'>Date(lowest)</option>
            <option value='lowest'>Date(highest)</option>
          </select>
        </form>
      </div>
        
      {/* <div className='flex justify-center items-center gap-0 h-10'>
          <div onClick={(e)=>{setCateg('')}}
              className='m-10 hover:shadow-xl hover:shadow-slate-900 flex h-10 justify-center items-center relative z-100 px-2 py-1 rounded-2xl h-20 bg-blue-500'>
              All
          </div>
      </div> */}

      <Splide options={splideOptions} className=' relative z-25 opacity-100 flex justify-center items-center'>
          {
              categs.map((item, i)=>{
                return(
                  <SplideSlide key={i}>
                      <div onClick={(e)=>{changeCategory(e.target.textContent)}}
                          className='m-10 hover:shadow-xl hover:shadow-slate-900 flex h-10 justify-center items-center relative z-100 px-2 py-1 rounded-2xl h-20 bg-blue-500'>
                          {item}
                      </div>
                  </SplideSlide>
                )
              })
          }
      </Splide>



      <div className='nike-container grid justify-items-center gap-5 grid-cols-4 z-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
        {
            
            listP.filter((value)=> {
              if(categ !== '') {
                  return value.category === categ
              }else {
                  return value
              }
          }).map((item, i)=>(
            <ProductCard key={i} product={item}/>
          ))
        }
      </div>

      {
        products.length === 0?null:<PaginationComponent pageCount={pageCount} getPage={getPage}/>
      }
      
    </div>
  )
}

export default AllProducts