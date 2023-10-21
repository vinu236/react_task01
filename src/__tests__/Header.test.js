import { render,screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Header from "../Components/Header";
import { Provider } from "react-redux";
import store from "../redux/store";


describe("Header Component Test Case",()=>{
    it('should load header component', () => {

        render(<Provider store={store}>
            <Header/>
        </Provider>);
        const heading =screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument()
     })
    
     it("Should load a input boxes on the Header Component",()=>{
    
        
        render(<Provider store={store}>
            <Header/>
        </Provider>);
    
        const inputBox=screen.getByLabelText("Monthly payment :")
        expect(inputBox).toBeInTheDocument();
     })
})




