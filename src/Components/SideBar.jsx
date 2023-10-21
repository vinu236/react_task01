import AccountOperation from "./AccountOperation";
import AccountList from "./AccountList";

const   SideBar =()=>{
    const style={
        // gridColumn:'1/-1',
        gridRow: '1 / -1'
    }

    return(
        <aside className={"shadow-md p-4 flex flex-col gap-48 border-r-2"} style={style} data-testid="sidebar" >
           <AccountOperation />
           <AccountList />
        </aside>
    )
}

export default SideBar;