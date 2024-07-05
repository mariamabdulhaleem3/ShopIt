import { Component } from "react";
import user from '../Data/userClass';
import USersArray from '../Data/usersArray'
import HomeLog from "./loggedIn/Home logged";
import HomeLogAdmin from "./logged in admin/Home logged admin";
import { Link } from "react-router-dom";

class LogIn extends Component {
    state = {
        _name: '',
        _pass: '',
        Auth: false,
        USersArray: USersArray,
        Reg: false,
        admin: false,
        errors: {}
    };

    validateForm = ()=> {
        const errors = {};

        if (this.state._name.trim() === '') {
            errors._name = 'Username is required';
        }

        if (this.state._name.length<3) {
            errors._name = 'Username must contain 4 or more char';
        }

        if (this.state._pass.trim() === '') {
            errors._pass = 'Password is required';
        }

        if (this.state._pass.length<3) {
            errors._pass = 'Password must contain 4 or more char';
        }

        return errors;
    };
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
        this.setState({
            errors: this.validateForm()
        });
    };

    componentWillUnmount() {
        let SavedObject = JSON.parse(localStorage.getItem("Data"))
        if (this.state.USersArray.find(user => user._name == SavedObject._name) && this.state.USersArray.find(user => user._pass == SavedObject._pass)) {
            this.setState({
                Auth: true
            })
        }

    }
    SaveLogin = () => {

        let LogInObject = new user(this.state._name, parseInt(this.state._pass));
        localStorage.setItem("Data", JSON.stringify(LogInObject));
        if (this.state.USersArray.find(user => user._name == LogInObject._name) && LogInObject._name =='mariam'&& LogInObject._pass == 7777 ) {
            this.setState({
                Auth: true,
                admin: true
            })
        } else if(this.state.USersArray.find(user => user._name == LogInObject._name)&&this.state.USersArray.find(user => user._pass == parseInt(LogInObject._pass))&& LogInObject._name !='mariam'&& LogInObject._pass != 7777  ){
            this.setState({
                Auth: true,
                admin:false
            })
        }
        else {
            this.setState({
                Reg: true
            })
        }

    }

    render() {
        if (this.state.Auth && this.state.admin) {
            return (
                <>
                  <HomeLogAdmin/>
                </>
            )
        }
        else if(this.state.Auth && this.state.admin == false) {
            return(
                <>
                  <HomeLog/>
                </>
                );
        }
        else{
            return (
                <div class="cont">
                <div class="logform">
                    <h3 class="head3">Login</h3>
                    <div class="formconts">
                        <input type="text" class="form-control mb-4 " placeholder="UserName"
                            value={this.state._name}
                            onChange={this.handleChange}
                            name="_name"
                        />
                        <b class="err" style={{color:'red'}}>
                            {this.state.errors._name && <span>{this.state.errors._name}</span>}
                        </b>
                        <input type="password" class="form-control mb-4 " placeholder="Password" value={this.state._pass}
                            onChange={this.handleChange}
                            name="_pass"
                        />
                        <b class="err" style={{color:'red'}}>
                            {this.state.errors._pass && <span>{this.state.errors._pass}</span>}
                        </b>
                        <button class="but my-4" onClick={() => this.SaveLogin()} >LogIn</button>
                        <p class='notLog'>don't have an account? <span><Link class='reg' to="/register">register</Link></span></p>
                    </div>
                </div>
                </div>
            )
        }
    }
}
        export default LogIn;
