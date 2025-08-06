import { IUser } from "@/utils/types"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { fetchUserSession } from "../asyncActions/userActions"

type initialStateType={
    user:IUser | null,
    isLoading:boolean,
    isAuthenticated:boolean,
}

const initialState:initialStateType={
   user:null,
   isLoading:true,
   isAuthenticated:false,
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setAuthenticated:(state)=>{
            state.isAuthenticated = false
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchUserSession.pending, (state)=>{
            state.isLoading = true
            state.user = null
            state.isAuthenticated = false
        })
        .addCase(fetchUserSession.fulfilled, (state, action:PayloadAction<IUser | null>)=>{
            const user = action.payload
            if(!user){
                state.isLoading = false
                state.isAuthenticated = false
                state.user = null
            }else{
                state.isLoading = false
                state.isAuthenticated = true
                state.user = user
            }
        })
        .addCase(fetchUserSession.rejected, (state, action)=>{
            state.isLoading = false
            state.isAuthenticated = false
            state.user = null
        })
    }
})

export const {setAuthenticated} = userSlice.actions
export default userSlice.reducer