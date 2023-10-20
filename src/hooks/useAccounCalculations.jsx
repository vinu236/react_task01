import { useState,useEffect } from "react";
import { setBalance } from "../redux/RemainingBalanceSlice";
import calculation from "../utils/data";
import { useDispatch,useSelector } from "react-redux";
import REGEX_NUMBER from "../config";

const useAccountCalculations=()=>{
    const[monthlyPayment,setMonthlyPayment]=useState(0);
    const balance =useSelector(store=>store.Account)
    const dispatch =useDispatch()
    const totalBalance=balance.reduce((acc,current)=>(acc+current.balance),0);


    //debounce 
    useEffect(()=>{

        const id=setTimeout(async()=>{
            const res=await calculation(totalBalance,monthlyPayment);
            dispatch(setBalance(res))
        },1000)
        //cleanupFunction

        return()=> clearTimeout(id)

    },[monthlyPayment]);



    const handleChange=(e)=>{
        const{value}=e.target
     
        if(!REGEX_NUMBER.test(value)) return;
        setMonthlyPayment(parseInt(value))
    }

        return [handleChange,totalBalance,monthlyPayment]
}

export default useAccountCalculations;