import Accounts from "../Components/SideBar";
import Box from "../Components/Box";
import Header from "../Components/Header";
import Main from "../Components/Main";

const Home = () => {
  return (
    <Box className={" grid grid-cols-[340px,1fr] grid-rows-[150px,1fr]  h-[100vh] "}>
      <Header />
      <Accounts />
      <Main />
    </Box>
  );
};

export default Home;
