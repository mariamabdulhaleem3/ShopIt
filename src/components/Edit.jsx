import { Component } from "react";
import product from "../Data/productClass";
import Product from "./product";



class EditComponent extends Component {
    state = {
        _id: this.props.EditObject._id,
        _image: this.props.EditObject._image,
        _name: this.props.EditObject._name,
        _price: this.props.EditObject._price,
    };

    changeInputValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    SaveEdit = () => {
        let newObject = new product(this.state._id, this.state._image, this.state._name, this.state._price);
        this.props.EditF(newObject);
    };

    render() {
        return (
            <>
            <div class="cont1">
                <div class="logform1">
                    <div class="formconts">
            
                        <input
                            readOnly
                            name="_id"
                            type="text"
                            placeholder="id"
                            id="form-name"
                            className="form-control my-3"
                            value={this.state._id}
                            onChange={this.changeInputValue}
                            required
                        />
                               
                        <input
                            name="_image"
                            type="text"
                            placeholder="image path"
                            id="form-age"
                            className="form-control my-3"
                            value={this.state._image}
                            onChange={this.changeInputValue}
                            required
                        />
                    
                        <input
                            name="_name"
                            type="text"
                            placeholder="name"
                            id="form-salary"
                            className="form-control my-3"
                            value={this.state._name}
                            onChange={this.changeInputValue}
                            required
                        />

                        <input
                            name="_price"
                            type="text"
                            placeholder="price"
                            id="form-email"
                            className="form-control my-3"
                            value={this.state._price}
                            onChange={this.changeInputValue}
                            required
                        />
                    
                        <button
                            type="submit"
                            id="bro"
                            onClick={this.SaveEdit}
                            class="my-3"
                        >
                            Edit
                        </button>
                        <input type="button" value={"Back"} onClick={this.props.BackHandlerRef} id="back"/>
                    </div>
                </div>
            </div>
        </>
        );
    }
}
export default EditComponent;