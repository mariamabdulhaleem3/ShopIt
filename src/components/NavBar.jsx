import { Component } from "react";
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
                    <Link class="nav-link  mx-4 " aria-current="page" to="/">Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link mx-4" to="/productg">Gallery</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link mx-4  " to="/About">About</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link mx-4" to="/login">Contact us</Link>
                  </li>
                </ul>
                <Link to="/login"><button  id="log">login</button></Link>
              </div>

            </div>
          </nav>
            );
    }
}
export default NavBar;