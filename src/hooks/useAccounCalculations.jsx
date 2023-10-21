import { useState,useEffect } from "react";
import { setBalance } from "../redux/RemainingBalanceSlice";
import calculation from "../utils/data";
import { useDispatch,useSelector } from "react-redux";
import REGEX_NUMBER from "../config";
import store from "../redux/store"

const useAccountCalculations=()=>{
    const[monthlyPayment,setMonthlyPayment]=useState(0);
    const balance =useSelector(store=>store.Account)
    const dispatch =useDispatch()
    const [alert,setAlert] =useState("")
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
        if(totalBalance===0) return setAlert("*Add Account balance")
        setMonthlyPayment(parseInt(value))
         setAlert("")
    }

        return [handleChange,totalBalance,monthlyPayment,alert]
}

export default useAccountCalculations;