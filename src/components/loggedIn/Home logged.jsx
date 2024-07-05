import { Component } from "react";
import NavBarLog from "./NavBarLog";
import SliderLog from "./sliderLog";
import Footer from "../footer";
import Products from '../product';
import productArray from "../../Data/productArray";
import Sale from "../sale";

class Home extends Component{
    state={

    }
    render(){
        return(
            <>
                <NavBarLog />
                <SliderLog />
                <Products productArrayRef={productArray}/>
                <Sale/>
                <Footer/>
            </>
        );
    }
}
export default Home;