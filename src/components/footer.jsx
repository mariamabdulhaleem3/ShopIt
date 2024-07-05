import { Component } from "react";
import logo13 from "../images/r1.jpg";
import logo14 from "../images/r2.jpg";
import logo15 from "../images/r3.jpg";
import logo16 from "../images/r5.jpg";
import logo17 from "../images/r7.jpg";
import logo18 from "../images/r8.jpg";
import { FaTelegram } from 'react-icons/fa';
import { FaPhoneSquare } from 'react-icons/fa';
import { FaEnvelopeSquare } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

class footer extends Component{
    render(){
        return(
            <>
             <section class="footer">
            <div class="div1">
            <ul type="none">
                <li><h1>Our Mission</h1></li>
                <li><h3>So seed seed green that winged cattle in. Gathering thing
                made fly you’re no divided deep moved us lan Gathering thing us land
                years living. </h3></li>
                <li><h3>So seed seed green that winged cattle in. Gathering thing
                made fly you’re no divided deep moved</h3></li>
            </ul>
            </div>
            <div class="div1" style={{textAlign:"center"}}>
            <ul type="none">
                <li><h1>Quick Links</h1></li>
                <li><a href="/">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/product">gallery</a></li>
               
            </ul>
            </div>
    
            <div class="div1">
            <ul type="none">
                <li><h1 style={{paddingBottom:"10px"}}>Contact Us</h1></li>
                <li class="kk">
                <FaTelegram style={{color: "#fff",fontSize: "40px",paddingRight:"15px"}}/>
                <h2>Head Office</h2>
                <h3>123, Main Street, Your City</h3>
                </li>
                <li class="kk">
                <FaPhoneSquare style={{color: "#fff",fontSize: "40px",paddingRight:"15px"}} />
                <h2>Phone Number</h2>
                <h3>+ 123 456 7890</h3>
                <h3>+ 123 456 7890</h3>
                </li>
                <li class="kk">
                <FaEnvelopeSquare style={{color: "#fff",fontSize: "40px",paddingRight:"15px"}} />
                <h2>Email</h2>
                <h3>free@infoexample.com</h3>
                <h3>www.infoexample.com</h3>
                </li>
            </ul>
            </div>
            </section>
            {/* <section id="p8">
            <h2>Copyright &copy; 2023 All rights reserved </h2>
            </section> */}
            </>
        );
    }
}
export default footer;