import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  likeState: false,
  likeItems: localStorage.getItem('like') ? JSON.parse(localStorage.getItem('like')) : [],
  likeTotalAmount: 0,
  likeTotalQuantity: 0,
}

const LikeSlice = createSlice({
  initialState,
  name: 'like',
  reducers:{
    setOpenLike: (state, action)=>{
      state.likeState = action.payload.likeState
    },
    setCloseLike: (state, action)=>{
      state.likeState = action.payload.likeState
    },
    setAddItemToLike: (state, action)=>{
      const itemIndex = state.likeItems.findIndex((item)=>item.id===action.payload.id)

      if(itemIndex >= 0){
        const removeItem = state.likeItems.filter((item)=>item.id !== action.payload.id)
        state.likeItems = removeItem
        localStorage.setItem("like", JSON.stringify(state.likeItems))
        toast.success(`${action.payload.title} Removed From Favourite`)
      }else{
        state.likeItems.push(action.payload);
        toast.success(`${action.payload.title} add to Favourite`)
        
      }

      localStorage.setItem('like', JSON.stringify(state.likeItems))
    },
    setRemoveItemFromLike: (state, action)=>{
      const removeItem = state.likeItems.filter((item)=>item.id !== action.payload.id)
      state.likeItems = removeItem
      localStorage.setItem("like", JSON.stringify(state.likeItems))
      toast.success(`${action.payload.title} Removed From Favourite`)
    },
    setClearLikeItems: (state, action)=>{
      state.likeItems = []
      localStorage.setItem("cart", JSON.stringify(state.likeItems))
      toast.success('Cart Clear')
    },
    setGetTotals: (state, action)=>{
      let {totalAmount, totalQTY} = state.likeItems.reduce((likeTotal, likeItem)=>{
        const {price, cartQuantity} = likeItem;
        const totalPrice = price * cartQuantity

        likeTotal.totalAmount = likeTotal.totalAmount+totalPrice
        likeTotal.totalQTY = likeTotal.totalQTY+cartQuantity

        return likeTotal
      }, {
        totalAmount: 0,
        totalQTY: 0,
      })


      state.likeTotalAmount = totalAmount
      state.likeTotalQuantity = totalQTY
    }
  },
})

export const {
  setOpenLike, setCloseLike, 
  setAddItemToLike, setRemoveItemFromLike,
  setClearLikeItems,
  setGetTotals,
} = LikeSlice.actions
export const selectLikeState = (state)=>state.like.likeState
export const selectLikeItems = (state)=>state.like.likeItems

export const selectTotalLikeAmount = (state)=>state.like.likeTotalAmount
export const selectTotalLikeQty = (state)=>state.like.likeTotalQuantity

export default LikeSlice.reducer