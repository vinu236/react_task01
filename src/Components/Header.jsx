import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBalance } from "../redux/RemainingBalanceSlice";
import REGEX_NUMBER from "../config";

const Header  =()=>{
    const[number,setNumber]=useState(0);
    const balance =useSelector(store=>store.Account)
    const dispatch =useDispatch()
    const totalBalance=balance.reduce((acc,current)=>(acc+current.balance),0);

    const style={
        gridColumn:"2/3"
        
    }

    useEffect(()=>{

        calculation(totalBalance,number)

    },[number])



    function calculation(totalBalance,number){
        const remainingBalances =[];
        let currentBalance=totalBalance
        for(let month=0;currentBalance>0;month++){
            if(month===0){
                remainingBalances.push({month:month+1,remainingBalance:totalBalance});

            }else{
                let remainingBalance =Math.max(currentBalance-number,0);
                remainingBalances.push({month:month+1,remainingBalance});
                currentBalance=remainingBalance;

            }
        }
          dispatch(setBalance(remainingBalances))
    }
    

    const handleChange=(e)=>{
            const{value}=e.target
         
            if(REGEX_NUMBER.test(value)) return;
            setNumber(parseInt(value))
        }


     
    
    const MonthlyPayment= totalBalance/12;
    console.log(totalBalance)
    return(
        <header className=" p-3  bg-fuchsia-100" style={style}>
            <h2>Initial Balance:{totalBalance}</h2>
            <label>Monthly payment: <input type="number" value={number} onChange={handleChange} /></label>
        </header>
    )
}
export default Header;