import { useSelector } from "react-redux";
import EmptyList from "./EmptyList";
const AccountList = () => {

  const account=useSelector(store=>store.Account)



  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-medium text-[#374151]">Balances</h1>
      <div className="border-2 min-h-min max-h-48 overflow-y-auto p-4 bg-[#f9fafb]">
        <ul className="flex flex-col justify-center gap-4" data-testid="accountList">
          {account.length===0 ?
          <EmptyList/>:
          account.map((list,index)=>(
            <li key={index} data-testid="listItem" className="p-2 flex gap-5 items-center shadow-md justify-start bg-[#fff] rounded-sm">
            <span className="font-medium">Balance</span>:
            <span className="font-medium">&#8377;{list.balance}</span>
          </li>
          ))
          }
        </ul>
      </div>
    </div>
  );
};

export default AccountList;
