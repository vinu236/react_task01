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
             <h1 className="text-3xl font-medium mb-11 tracking-wider bg-[#111] text-white inline-block p-2 rounded-md cursor-pointer">Accounts</h1>
            <h3 className="text-2xl mb-6 font-medium text-[#374151]">Count : <span>0</span></h3>
            <form action="" onSubmit={handleSubmit}>
              <div className="flex gap-4 p-3 shadow-md rounded-md">
              <input type="text" className=" px-2 py-1 border-2 rounded-md" name="number" value={number}  onChange={handleChange} placeholder="Add Balance..."/>
                <button type="submit" className="px-3 py-1 bg-black text-white rounded-md active:translate-y-1 transition-all ">Submit</button>
              </div>
            </form>
        </Box>
    )
}

export default AccountOperation;