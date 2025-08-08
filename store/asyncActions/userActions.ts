import { deleteUserSession, getUserSession } from "@/lib/appwrite";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUserSession= createAsyncThunk('user/fetchSession', async (_, {rejectWithValue})=>{
    try {
        const session = await getUserSession()
        if(!session)return null
        return session

    } catch (error:any) {
        return rejectWithValue(error.message)
    }
})

const singoutUser = createAsyncThunk('user/deleteSession', async(_,{rejectWithValue})=>{
    try {
        const sessionState = await deleteUserSession()
        console.log(sessionState)
        return sessionState
    } catch (error:any) {
        rejectWithValue(error.message)
    }
})

export { fetchUserSession, singoutUser };
