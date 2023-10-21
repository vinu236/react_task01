import { styleHeader } from "../config";
import useAccountCalculations from "../hooks/useAccounCalculations";
const Header  =()=>{
 const [ handleChange,totalBalance,monthlyPayment,alert] =useAccountCalculations()


    return(
        <header className=" p-4 bg-[#FFF] shadow-mb-2xl border-b-2" style={styleHeader}>
            <h2 className="text-2xl font-bold mb-4 flex gap-5 text-[#374151]"><span>Initial Balance :</span> <span data-testid={totalBalance} >&#8377;{totalBalance}</span></h2>
            <div className="flex items-center">
            <label className="text-xl text-[#374151] font-medium flex items-center gap-4">Monthly payment : <input className="border-2 px-3 py-1 rounded-md" min={"0"} data-testid="monthlyPaymentInput"  type="number" value={monthlyPayment} onChange={handleChange} /></label>
            {alert && <p className="text-red-500">{alert}</p>}
            </div>
        </header>
    )
}
export default Header;