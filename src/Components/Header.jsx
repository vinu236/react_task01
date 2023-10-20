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


     

    return(
        <header className=" p-4 bg-[#FFF] shadow-mb-2xl border-b-2" style={style}>
            <h2 className="text-2xl font-bold mb-4 flex gap-5 text-[#374151]"><span>Initial Balance :</span> <span>&#8377;{totalBalance}</span></h2>
            <div>
            <label className="text-xl text-[#374151] font-medium flex items-center gap-4">Monthly payment : <input className="border-2 px-3 py-1 rounded-md border-2" max={"0"}  type="number" value={number} onChange={handleChange} /></label>
            </div>
        </header>
    )
}
export default Header;