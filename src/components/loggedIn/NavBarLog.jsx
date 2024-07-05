import { Component } from "react";
import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

class NavBar extends Component{
    render(){
        return(
           
            <nav class="navbar navbar-expand-lg  p-2 shadow-lg ">
            <div class="container-fluid">
              <Link class="navbar-brand" to="/">Shop it</Link>
              <div class="collapse navbar-collapse " id="navbarNavDropdown">
                <ul class="navbar-nav mx-5">
                  <li class="nav-item">
                    <Link class="nav-link  mx-4 " aria-current="page" to="/Home">Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link mx-4" to="/product">Gallery</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link mx-4 " to="/aboutlog">About</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link mx-4" to="/contact">Contact us</Link>
                  </li>
                </ul>
                <Link to="/product"><button  id="bro">Browse</button></Link>
              </div>

            </div>
          </nav>
            );
    }
}
export default NavBar;