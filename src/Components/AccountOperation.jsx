import Box from "./Box"
import useAccountAdd from "../hooks/useAccountAdd";
import { useSelector } from "react-redux";
const AccountOperation =()=>{
 const [handleChange,handleSubmit,account,error] =useAccountAdd()
 const count=useSelector(store=>store.Account)


    return(
        <Box>
             <h1 className="text-3xl font-medium mb-11 tracking-wider bg-[#111] text-white inline-block p-2 rounded-md cursor-pointer">Accounts</h1>
            <h3 className="text-2xl mb-6 font-medium text-[#374151]">Count : <span>{count.length}</span></h3>
            <form action="" onSubmit={handleSubmit}>
              <div className="flex gap-4 p-4 shadow-md rounded-md">
              <input type="text" className=" px-2 py-1 border-2 rounded-md" name="number" value={account}  onChange={handleChange} placeholder="Add Balance..."/>
                <button type="submit" className="px-3 py-1 bg-black text-white rounded-md active:translate-y-1 transition-all ">Submit</button>
               
              </div>
              {error && <p className="text-red-600 mt-3">{error}</p>}
            </form>
        </Box>
    )
}

export default AccountOperation;