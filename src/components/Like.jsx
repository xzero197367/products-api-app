import React from 'react'

const Like = ({likeItems, onLikeToggle, onClearLikes}) => {
  return (
    <div className={`fixed top-0 right-0 left-0 bottom-0 w-full h-screen blure-effect-theme opacity-100 z-30
    ${cartState? 'opacity-100 visible translate-x-0': 'opacity-0 invisible translate-x-8'}`}>
      <div className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}>
        <CartCount totalQTY={likeItems.length} onCartToggle={onLikeToggle} onClearCart={onClearLikes}/>

        {
          likeItems.length ===0
          ? <CartEmpty onCartToggle={()=>onCartToggle()}/>
          : likeItems.map((item, i)=>{
            <CartItem key={i} item={item}/>
          })
        }
        <div className='fixed bottom-0 bg-white w-full px-5 py-2 grid items-center'>
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
        </div>

      </div>
    </div>
  )
}

export default Like