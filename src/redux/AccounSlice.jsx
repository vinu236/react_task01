import { createSlice } from "@reduxjs/toolkit";

const AccountSlice= createSlice({
    name:"messages",
    initialState:[],

    reducers :{
        setAmount:((state,action)=>{
            return [...state,action.payload]
        })
    }
})


export const {setAmount}=AccountSlice.actions;
export default AccountSlice.reducer;