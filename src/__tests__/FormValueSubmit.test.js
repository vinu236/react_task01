import { render, screen,fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import '@testing-library/jest-dom';
import SideBar from "../Components/SideBar";
import Header from "../Components/Header";
import Main from "../Components/Main"
import AccountChart from "../Components/AccountChart";
import MOCK_DATA from "../utils/mock"

describe("form submitting test case", () => {
    it("should load the side bar component", () => {
      render(
        <Provider store={store}>
          <SideBar />
        </Provider>
      );
      
      const sidebarElement = screen.getByTestId("sidebar");
      expect(sidebarElement).toBeInTheDocument();
    });


    it("should load the input component",()=>{
        render(
            <Provider store={store}>
              <SideBar />
            </Provider>
          );
      
          const inputElement = screen.getByRole("textbox");
          expect(inputElement).toBeInTheDocument()

    })

    it("should load the AccountList Component",()=>{
        render(
            <Provider store={store}>
              <SideBar />
            </Provider>
          );
      
          const accountList = screen.getByTestId("accountList");

          expect(accountList).toBeInTheDocument();

    })


    
    it("should load the AccountList Component with Zero List",()=>{
        render(
            <Provider store={store}>
              <SideBar />
            </Provider>
          );
      
          const List = screen.getByTestId("empty");

          expect(List).toBeInTheDocument();

    })


    it("should Submit the form Values",()=>{
        render(
            <Provider store={store}>
              <SideBar />
            </Provider>
          );
            
        const inputElement = screen.getByRole("textbox");
        const submitButton = screen.getByRole("button",{name:"Submit" })
    
        fireEvent.change(inputElement,{ target :{ value:5000 }})
        fireEvent.click(submitButton)
    })

    it("Should display the List with 1 List Data",()=>{

        render(
            <Provider store={store}>
              <SideBar />
            </Provider>
          );


            
          const List = screen.getAllByTestId("listItem");
          expect(List.length).toBe(1);
        
    })
    


  });


  describe("After submit the form Value should display the Initial Value in the Header Component",()=>{

  

        it("should load the display the initial Value",()=>{
          
            render(
              <Provider store={store}>
                <SideBar />
                <Header />
              </Provider>
            )
          

          const initialBalanceElement = screen.getByTestId("5000");
          expect(initialBalanceElement).toBeInTheDocument();
          
        })

  })

  
  describe("Monthly payment Changing and load the Graph", () => {
    it("Should not load the Graph", () => {
      render(
        <Provider store={store}>
          <SideBar />
          <Header />
          <Main />
          <AccountChart />
        </Provider>
      );

     
  
      const noGraphDataDisplay = screen.queryAllByTestId("NoGraph");
      expect(noGraphDataDisplay[0]).toBeInTheDocument();
    });



    it("Changing Form Value", () => {
      render(
        <Provider store={store}>
          <SideBar />
          <Header />
          <Main />
        </Provider>
      );
  
        const inputElement = screen.getByTestId("monthlyPaymentInput");
        expect(inputElement).toBeInTheDocument();
        fireEvent.change(inputElement, { target: { value: '500' } }); 
  
    });



  })
