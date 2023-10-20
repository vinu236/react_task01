import AccountOperation from "./AccountOperation";
import AccountList from "./AccountList";

const SideBar =()=>{
    const style={
        gridRow: '1 / -1'
    }

    return(
        <aside className={"shadow-md"} >
           <AccountOperation />
           <AccountList />
        </aside>
    )
}

export default SideBar;