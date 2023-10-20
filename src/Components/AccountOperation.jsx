import { useState } from "react";
import Box from "./Box"
import REGEX_NUMBER from "../config";
import { useDispatch } from "react-redux";
import { setAmount } from "../redux/AccounSlice";
const AccountOperation =()=>{
const[number,setNumber]=useState("");
const dispatch =useDispatch()
    const handleChange =(e)=>{
        const {value}=e.target;

        //validation for string
        if(REGEX_NUMBER.test(value)) return;

        
        setNumber(parseInt(value))
      }

      const handleSubmit =(e)=>{
        e.preventDefault();
        
        //if there is no input field => return  
        if(number==="") return;

        postAmount();

      }

      const postAmount =()=>{

        dispatch(setAmount({balance:number}))

      }


    return(
        <Box>
             <h1>Accounts</h1>
            <h3>Count : <span>{number}</span></h3>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" className="border" name="number" value={number}  onChange={handleChange}/>
                <button type="submit">Submit</button>
            </form>
        </Box>
    )
}

export default AccountOperation;