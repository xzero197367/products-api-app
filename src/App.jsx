import React, {useState, useEffect} from 'react'
import {Cart, Footer, Hero, Navbar, ProductDetails, ProductsList, Title, Like} from './components';
import axios from 'axios';
import Sales from './components/Sales';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllProducts from './components/AllProducts';

const App = () => {


  const [products, setProducts] = useState([])
  const [pageCount, setPageCount] = useState(0)
    

    // get all products
    const getAllProducts = async()=>{
        const res = await axios.get("https://dummyjson.com/products?limit=30&skip=10")
        setProducts(res.data.products)
        setPageCount(res.data.total/30)
    }

    // change current page
    const getPage = async(page)=>{
        const res = await axios.get(`https://dummyjson.com/products?skip=${30*page}`)
        setProducts(res.data.products)
        setPageCount(res.data.total/30)
    }

    // change category page
    const changeCategory = async(categ)=>{
      if(categ == 'all'){
        getAllProducts()
      }else{
        const res = await axios.get(`https://dummyjson.com/products/category/${categ}`)
        setProducts(res.data.products)
        setPageCount(res.data.total/30)
      }
    }

    // search for products
    const search = async(word)=>{
        
        const res = await axios.get(`https://dummyjson.com/products/search?q=${word}`)
        setProducts(res.data.products)
        setPageCount(res.data.total/30)
    }
    
    // for sort items
    

    useEffect(()=>{
        getAllProducts()
    },[])
    


  return (
    
      <BrowserRouter>
        
        
          <Routes>
            <Route path='/' element={
              <>
                <Navbar/>
                  <Cart/>
                  <Like/>
                  <main>
                  <Hero/>
                  <Title title={"Popular Sales"}/>
                  <Sales products={products}/>
                  <Title title={"Top Rated Sales"}/>
                  <ProductsList products={products}/>
                </main>
              </>
            }
            />

            <Route path='/cart/' element={<Cart/>}/>

            <Route path='/products/' element={
                <div>
                  <Navbar search={search}/>
                    <Cart/>
                  <AllProducts products={products} pageCount={pageCount} getPage={getPage} changeCategory={changeCategory}/>
                </div>}
            />

            <Route path='/product/:id' element={<div>
              <Navbar/>
                <Cart/>
              <ProductDetails products={products}/>
            </div>}/>
          </Routes>

        <Footer/>
      </BrowserRouter>
    
  )
}

export default App