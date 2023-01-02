import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectLikeState, selectTotalLikeAmount, setClearLikeItems, setCloseLike, setGetTotals } from '../app/likeSlice';
import { selectLikeItems, selectTotalLikeQty } from './../app/likeSlice';

import LikeCount from './like/LikeCount';
import LikeEmpty from './like/LikeEmpty';
import LikeItem from './like/LikeItem';


const Like = () => {

  const dispatch = useDispatch()
  const ifCartState = useSelector(selectLikeState)
  const cartItems = useSelector(selectLikeItems)

  const totalAmount = useSelector(selectTotalLikeAmount)
  const totalQTY = useSelector(selectTotalLikeQty)

  const onCartToggle = ()=>{
    dispatch(setCloseLike({
      likeState: false
    }))
  }

  const onClearCart = ()=>{
    dispatch(setClearLikeItems())
  }

  useEffect(() => {
    dispatch(setGetTotals())
  }, [cartItems, dispatch])
  


  return (
    <div className={`fixed top-0 right-0 left-0 bottom-0 w-full h-screen blur-effect-theme opacity-100 z-[250]
    ${ifCartState ? 'opacity-100 visible translate-x-0':'opacity-0 invisible translate-x-8'}`}>

      <div className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}>
        <LikeCount totalQTY={totalQTY} onCartToggle={onCartToggle} onClearCart={onClearCart}/>
        {
          cartItems?.length === 0 
          ? <LikeEmpty onCartToggle={onCartToggle}/>
          : <div 
              className='py-3 flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden'>
            {
              cartItems.map((item, i)=>(
                <LikeItem key={i} item={item}/>
              ))
            }

            {/* <div className='fixed bottom-0 bg-white w-full px-5 py-2 grid items-center'>
              <div className='flex items-center justify-between'>
                <h1 className='text-base font-semibold uppercase'>
                  SubTotal
                </h1>
                <h1 className='text-sm rounded bg-theme-cart text-slate-200 px-1 py-0.5'>${totalAmount}</h1>
              </div>

              <div className='grid items-center gap-2'>
                <p className='text-sm font-medium text-center'>Taxes and Shipping Will Calculate At Shopping</p>
                <button type='button' className='button-theme bg-theme-cart text-white'>
                  Check Out
                </button>
              </div>
            </div> */}
          </div>
        }

        
      </div>

      

    </div>
  )
}

export default Like