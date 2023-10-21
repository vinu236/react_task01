import { useState,useRef, useEffect } from "react"
import REGEX_NUMBER from "../config"
import { useDispatch } from "react-redux";
import { setAmount } from "../redux/AccounSlice";
const useAccountAdd =()=>{
const [account,setAccount]=useState("");
const [error,setError] =useState(null)
const dispatch =useDispatch();


const handleChange =(e)=>{
    const {value}=e.target;

    //validation => only numbers allowed
    if(!REGEX_NUMBER.test(value)) return setError("*Character is not allowed");
    setError("")

    const parsedValue=parseInt(value);
    if(isNaN(parsedValue))return setAccount("")
    setAccount(parsedValue)
    
  }


  const handleSubmit =(e)=>{
    e.preventDefault();
    //if there is no input field => return  
    if(account==="") return setError("*Cannot submit Empty field");
    postAmount();
  }

  const postAmount =()=>{

    dispatch(setAmount({balance:account}))
    setAccount("")
  }


  return [handleChange,handleSubmit,account,error]
    
}

export default useAccountAdd;