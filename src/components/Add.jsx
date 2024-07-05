import { Component } from "react";
import Product from "../Data/productClass";

class Add extends Component {

    state = {
        _id :'',
        _image: '',
        _name: '',
        _price: '',

    }
    changeinputvlaue = (e) => {
        let propName = e.target.name;

        this.setState({
            [propName]: e.target.value
        })

    }

    AddingNewObject = () => {
        
        let newObject = new Product(this.state._id,this.state._image, this.state._name, this.state._price);
        this.props.saveAddingHandlerRef(newObject);
        this.setState({
            _id: '',
            _image: '',
            _name: '',
            _price: '',
        })
    }


    render() {
        return (
            <div class="cont1">
            <div class="logform1">
            <div class="formconts">
                    <input type="text" class="form-control my-3" aria-describedby="emailHelp"
                        placeholder="Enter Id" id="txtId" value={this.state._id} name="_id"
                        onChange={this.changeinputvlaue} required
                    />
           

                    <input type="text" class="form-control my-3" placeholder="image path" id="txtAge"
                        value={this.state._image}
                        onChange={this.changeinputvlaue}
                        name="_image"
                        required
                    />
                           
                    <input type="text" class="form-control my-3" placeholder="name" id="txtName"
                        value={this.state._name}
                        onChange={(e) => {
                            this.setState({
                                _name: e.target.value
                            })
                        }}
                        name="_name"
                        required
                    />
              
                    <input type="text" class="form-control my-3" placeholder="price" id="txtSalary" value={this.state._price}
                        onChange={this.changeinputvlaue}
                        name="_price"
                        required
                    />

                <button type="submit" id="bro" class="my-3" onClick={this.AddingNewObject}>Add</button>
                <input type="button" id="back" value={"Back"} onClick={this.props.BackHandlerRef} />
            </div>
            </div>
            </div>
        )
    }
}

export default Add;