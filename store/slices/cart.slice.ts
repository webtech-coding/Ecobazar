import { ICart } from "@/utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type cartSliceType={
    cart:ICart[] | [],
}

const initialState:cartSliceType={
    cart: []
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addProduct:(state, payload:PayloadAction<number>)=>{
            const productInCart = state.cart.find(product=>product.productId === payload.payload)
            if(!productInCart){
                state.cart = [...state.cart, {productId:payload.payload, amount:1 }]
            }else{
                state.cart =  state.cart.map(prevState =>{
                    if(prevState.productId === productInCart.productId){
                        return {
                            productId:prevState.productId,
                            amount:prevState.amount + 1
                        }
                    }
                    return prevState
                })
            }
        },
        removeProduct:(state, payload:PayloadAction<number>)=>{
            const productInCart = state.cart.find(product=>product.productId === payload.payload)
            if(!productInCart){
               return
            }else{
                state.cart =  state.cart.map(prevState =>{
                    if(prevState.productId === productInCart.productId){
                        return {
                            productId:prevState.productId,
                            amount:prevState.amount===0 ? 0: prevState.amount - 1
                        }
                    }
                    return prevState
                })
            }
        }
    }
})

export const {addProduct, removeProduct} =  cartSlice.actions
export default cartSlice.reducer