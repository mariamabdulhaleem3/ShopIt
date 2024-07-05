import { Component } from "react";
import { Link } from "react-router-dom";
import Products from '../product';


class NavBar extends Component{
    render(){
        return(
           
            <nav class="navbar navbar-expand-lg  p-2 shadow-lg ">
            <div class="container-fluid">
              <Link class="navbar-brand" to="/">Shop it</Link>
              <div class="collapse navbar-collapse " id="navbarNavDropdown">
                <ul class="navbar-nav mx-5">
                  <li class="nav-item">
                    <Link class="nav-link  mx-4 " aria-current="page" to="/adminHome">Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link mx-4" to="/product">Gallery</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link mx-4" to="/dash">Dashboard</Link>
                  </li>
                </ul>
                <Link to="/product"><button  id="bro">Browse</button></Link>
                <Link to="/cart"> <i class="fa-solid fa-cart-shopping fa-lg mx-3" style={{color: "#ff72b2"}}></i></Link>
              </div>

            </div>
          </nav>
            );
    }
}
export default NavBar;