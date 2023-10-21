import { useSelector } from "react-redux";
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const AccountChart =()=>{
    const data =useSelector(store=>store.RemainingBalance);
 

      

    return(

        <div className=" mt-0 mb-0 m-auto max-w-[1000px] w-[100%] rounded-lg">

            <h1 className="mb-8 text-[#374151] font-3xl font-bold text-2xl uppercase mt-2">Graphical Representation</h1>
            {data.length===0 ? <p  data-testid="NoGraph" >No Graph data</p> :
                <div className="bg-white shadow-md p-5" data-testid="graph">
                <h1 className="mb-2 font-bold">Balance of accounts after a number of Months</h1>
                <LineChart height={400} data={data} width={800} >
                    <Line type={"monotone"} dataKey={'remainingBalance'} stroke="blue"/>
        
                    <CartesianGrid stroke="#aaa"/>
                    <XAxis dataKey={data.month}/>
                    <YAxis dataKey={"remainingBalance"}/>
                    <Tooltip />
                    <Legend />
                </LineChart>
            </div>
            }
        </div>
    )
}


export default AccountChart;