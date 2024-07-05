import { Component } from "react";
import NavBarLogAdmin from "./NavBarLogAdmin";
import SliderLog from "../loggedIn/sliderLog";
import Footer from "../footer";
import Products from '../product';
import productArray from '../../Data/productArray';
import Sale from '../sale';
class Home extends Component{
    state={
        productArray: productArray,
    }
    render(){
        return(
            <>
                <NavBarLogAdmin />
                <SliderLog />
                <Products productArrayRef={this.state.productArray}/>
                <Sale/>
                <Footer/>
            </>
        );
    }
}
export default Home;