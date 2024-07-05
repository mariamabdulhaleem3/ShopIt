import { Component } from "react";
import user from "../Data/userClass";
import UsersArray from '../Data/usersArray';
import { Link } from "react-router-dom";

class register extends Component {

    state = {
        _name: '',
        _email: '',
        _phone: '',
        _pass: '',
        UsersArray: UsersArray,
        errors:{}

    }
    validateForm = ()=> {
        const errors = {};

        if (this.state._name === '') {
            errors._name = 'Username is required';
        }else if (this.state._name.length<3) {
            errors._name = 'Username must contain 4 or more char';
        }


        if (this.state._email.trim() === '') {
            errors._name = 'email is required';
        }

        if (this.state._phone === ''){
            errors._name = 'phone number is required';
        }

        if (this.state._phone.length!=11){
            errors._name = 'phone must contain 11 char';
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
            [name]: value,
            errors: this.validateForm()
        });
    };


    RegisterHandler = () => {
        const newObject = new user(this.state._name, this.state._email, this.state._phone, this.state._pass);
        const newArray = [...this.state.UsersArray, newObject];
        this.setState({
          UsersArray: newArray,
        },() => {
            console.log(this.state.UsersArray);
          });
      };


    render() {
        return (
            <div class="cont">
            <div class="logform">
                <h3 class="head3">Register</h3>
                <div class='formconts'>
                        <input type="text" class="form-control mb-3" placeholder="name" id="txtName"
                            value={this.state._name}
                            onChange={this.handleChange}
                            
                            name="_name"
                        />
                        <b class="err" style={{color:'red'}}>
                            {this.state.errors._name && <span>{this.state.errors._name}</span>}
                        </b>
                
                        <input type="email" class="form-control mb-3" placeholder="email" id="email" value={this.state._email}
                            onChange={this.handleChange}
                            name="_email"
                        />
                        <b class="err" style={{color:'red'}}>
                            {this.state.errors._email && <span>{this.state.errors._email}</span>}
                        </b>

                        <input type="text" class="form-control mb-3" placeholder="phone" id="phone" value={this.state._phone}
                            onChange={this.handleChange}
                            name="_phone"
                        />
                        <b class="err" style={{color:'red'}}>
                            {this.state.errors._phone && <span>{this.state.errors._phone}</span>}
                        </b>

                        <input type="password" class="form-control mb-3" placeholder="password" id="password" value={this.state._pass}
                            onChange={this.handleChange}
                            name="_pass"
                        />
                        <b class="err" style={{color:'red'}}>
                            {this.state.errors._pass && <span>{this.state.errors._pass}</span>}
                        </b>
                        

                        <Link to="/Home" type="submit" class="but" onClick={() => this.RegisterHandler()}>register</Link>


                </div>
            </div>
            </div>
        )
    }
}

export default register;