import { createSlice } from "@reduxjs/toolkit";

const RemainingBalanceSlice= createSlice({
    name:"balance",
    initialState:[],

    reducers :{
        setBalance:((state,action)=>{
            return action.payload
        })
    }
})


export const {setBalance}=RemainingBalanceSlice.actions;
export default RemainingBalanceSlice.reducer;