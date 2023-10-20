import AccountOperation from "./AccountOperation";
import AccountList from "./AccountList";

const   SideBar =()=>{
    const style={
        // gridColumn:'1/-1',
        gridRow: '1 / -1'
    }

    return(
        <aside className={"shadow-md p-4 flex flex-col gap-52 border-r-2"} style={style} >
           <AccountOperation />
           <AccountList />
        </aside>
    )
}

export default SideBar;