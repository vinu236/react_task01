import { useSelector } from "react-redux";
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const AccountChart =()=>{
    const data =useSelector(store=>store.RemainingBalance);
        console.log(data)

      

    return(
        <div className=" mt-0 mb-0 m-auto max-w-[1000px] w-[100%]">
            <div className=" bg-white shadow-md p-4 mb-10"><h1>Graph</h1></div>
            <div className="bg-white shadow-md p-5">
                <LineChart height={400} data={data} width={800} >
                    <Line type={"monotone"} dataKey={'remainingBalance'} stroke="blue"/>
        
                    <CartesianGrid stroke="#aaa"/>
                    <XAxis dataKey={data.month}/>
                    <YAxis dataKey={"remainingBalance"}/>
                    <Tooltip />
                    <Legend />
                </LineChart>
            </div>
        </div>
    )
}


export default AccountChart;