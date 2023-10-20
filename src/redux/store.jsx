import { configureStore } from "@reduxjs/toolkit";
import AccountSlice from "./AccounSlice";
import RemainingBalanceSlice from "./RemainingBalanceSlice";



const store =configureStore({
    reducer:{
        Account:AccountSlice,
        RemainingBalance:RemainingBalanceSlice
    }
})


export default store;