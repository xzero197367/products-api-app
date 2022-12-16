import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  cartState: false,
  cartItems: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
}

const CartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers:{
    setOpenCart: (state, action)=>{
      state.cartState = action.payload.cartState
    },
    setCloseCart: (state, action)=>{
      state.cartState = action.payload.cartState
    },
    setAddItemToCart: (state, action)=>{
      const itemIndex = state.cartItems.findIndex((item)=>item.id===action.payload.id)

      if(itemIndex >= 0){
        state.cartItems[itemIndex].cartQuantity = state.cartItems[itemIndex].cartQuantity+1;
        toast.success('Item QTY Increased')
      }else{
        state.cartItems.push(action.payload);
        toast.success(`${action.payload.title} add to Cart`)
        
      }

      localStorage.setItem('cart', JSON.stringify(state.cartItems))
    },
    setRemoveItemFromCart: (state, action)=>{
      const removeItem = state.cartItems.filter((item)=>item.id !== action.payload.id)
      state.cartItems = removeItem
      localStorage.setItem("cart", JSON.stringify(state.cartItems))
      toast.success(`${action.payload.title} Removed From Cart`)
    },
    setIncreaseItemQTY: (state, action)=>{
      const itemIndex = state.cartItems.findIndex((item)=>item.id===action.payload.id)
      state.cartItems[itemIndex].cartQuantity = state.cartItems[itemIndex].cartQuantity+1;
      localStorage.setItem("cart", JSON.stringify(state.cartItems))
      toast.success('Item QTY Increased')
      
    },
    setDecreaseItemQTY: (state, action)=>{
      const itemIndex = state.cartItems.findIndex((item)=>item.id===action.payload.id)
      if(state.cartItems[itemIndex].cartQuantity > 1){
        state.cartItems[itemIndex].cartQuantity = state.cartItems[itemIndex].cartQuantity-1;
        localStorage.setItem("cart", JSON.stringify(state.cartItems))
        toast.success('Item QTY Decreased')
      }
    },
    setClearCartItems: (state, action)=>{
      state.cartItems = []
      localStorage.setItem("cart", JSON.stringify(state.cartItems))
      toast.success('Cart Clear')
    },
    setGetTotals: (state, action)=>{
      let {totalAmount, totalQTY} = state.cartItems.reduce((cartTotal, cartItem)=>{
        const {price, cartQuantity} = cartItem;
        const totalPrice = price * cartQuantity

        cartTotal.totalAmount = cartTotal.totalAmount+totalPrice
        cartTotal.totalQTY = cartTotal.totalQTY+cartQuantity

        return cartTotal
      }, {
        totalAmount: 0,
        totalQTY: 0,
      })


      state.cartTotalAmount = totalAmount
      state.cartTotalQuantity = totalQTY
    }
  },
})

export const {
  setOpenCart, setCloseCart, 
  setAddItemToCart, setRemoveItemFromCart,
  setIncreaseItemQTY,
  setDecreaseItemQTY,
  setClearCartItems,
  setGetTotals,
} = CartSlice.actions
export const selectCartState = (state)=>state.cart.cartState
export const selectCartItems = (state)=>state.cart.cartItems

export const selectTotalAmount = (state)=>state.cart.cartTotalAmount
export const selectTotalQty = (state)=>state.cart.cartTotalQuantity

export default CartSlice.reducer