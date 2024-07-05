import { Component } from "react";
import NavBar from "./NavBar";
import Slider from "./slider";
import Footer from "./footer";
import productArray from '../Data/productArray';
import Sale from "./sale";
import ProductG from "./productg";

class Home extends Component{
    state={
       productArray:productArray
    }
    render(){
        return(
            <div class='main'>
                <NavBar />
                <Slider />
                <ProductG productArrayRef={this.state.productArray}/>
                <Footer />
            </div>
        );
    }
}
export default Home;