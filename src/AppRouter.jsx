
import { Component } from "react";
import Home from "./components/Home";
import About from "./components/About";
import {Route,Routes} from "react-router-dom";
import LogIn from "./components/loginApp";
import HomeLog from "./components/loggedIn/Home logged";
import AboutLog from "../src/components/loggedIn/AboutLog";
import Register from "./components/register";
import Dashboard from "./components/dashboard";
import Contact from "./components/loggedIn/contact"
import Message from "./components/loggedIn/message";
import HomeLogAdmin from "./components/logged in admin/Home logged admin";
import Edit from "./components/Edit";
import productArray from "./Data/productArray";
import Products from "./components/product";
import Add from "./components/Add";
import Cart from "./components/cart";
import ProductG from "./components/productg";


class AppRouter extends Component {
    state = {
        productArray:productArray
    }

    render() {
        return (
            <>
                <Routes>
                    <Route path="/" exact Component={()=> <Home/>} />
                    <Route path="/Home" Component={()=> <HomeLog/>} />
                    <Route path="/adminHome" Component={()=> <HomeLogAdmin/>} />
                    <Route path="/About" Component={()=> <About/>} />
                    <Route path="/dash/Edit/:id" Component={()=> <Edit/>} />
                    <Route path="/dash/Add" Component={()=> <Add/>} />
                    <Route path="/login" Component={()=> <LogIn/>} />
                    <Route path="/aboutlog" Component={()=> <AboutLog/>} />
                    <Route path="/register" Component={()=> <Register/>} />
                    <Route path="/dash" Component={()=> <Dashboard/>} />
                    <Route path="/contact" Component={()=> <Contact/>} />
                    <Route path="/Message" Component={()=> <Message/>} />
                    <Route path="/product" Component={()=> <Products productArrayRef={productArray}/>} />
                    <Route path="/productg" Component={()=> <ProductG productArrayRef={productArray}/>} />
                    <Route path="/cart" Component={()=> <Cart/>} />

                </Routes>
            </>
        );
    }
}

export default AppRouter;