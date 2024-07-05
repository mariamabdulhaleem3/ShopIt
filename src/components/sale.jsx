import { Component } from "react";
import logo11 from "../images/parallax-bg.png";
import { Link } from "react-router-dom";

class sale extends Component{
    state={}
    render(){
        return(
            <>
             <section class="back my-5" style={{backgroundImage:`url(${logo11})`}}>
                <h1>Up To 50% Off</h1>
                <h2>Winter Sale</h2>
                <h3>Him she’d let them sixth saw light</h3>
                 <Link to="/product" ><button id="bro">Browse Now</button></Link>
            </section>
            </>
        );
    }
}
export default sale;