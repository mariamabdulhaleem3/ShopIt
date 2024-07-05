import { Component } from "react";
import Product from '../Data/productClass';
import ListClass from './List';
import AddClass from "./Add";
import EditClass from './Edit';
import productArray from '../Data/productArray';
import Products from './product';
import NavBarLogAdmin from './logged in admin/NavBarLogAdmin';

class App extends Component {
    state = {
        productArray: productArray,
        ShowAdd: false,
        ShowEdit: false,
        EditObject: new Product()
        
    }
    showAdd = () => {
        this.setState({
            ShowAdd: true,
            ShowEdit:false
        })
    }
    
    showEdit = (_EditObject) => {
        this.setState({
            ShowEdit: true,
            ShowAdd: false,
            EditObject: _EditObject
        })
    }
    saveAddingHandler = (_Object) => {
         localStorage.setItem("newobj", _Object);
        var newArray = [...this.state.productArray, _Object];
        this.setState({
            productArray: newArray,
            ShowAdd: false
        })
        console.log(this.state.productArray)
    }

    BackHandler = () => {
        this.setState({
            ShowAdd: false, ShowEdit: false
        })
    }

    Edit = (Object) => {
        let arr = this.state.productArray.map((pro) => {
            if (pro._id === Object._id) {
                return Object;
            } else {
                return pro;
            }
        });
        this.setState({
            productArray: arr,
            ShowEdit: false,
        });
    };

    Delete = (index) => {
        if (window.confirm("Are You Sure")) {
            this.state.productArray.splice(index, 1);
            this.setState({
                productArray: this.state.productArray
            });
        }
    }

    render() {
        if (!this.state.ShowAdd && !this.state.ShowEdit) {
            return (
                <div class="dash">
                    <NavBarLogAdmin/>
                    <ListClass productArrayRef={this.state.productArray} showEditRef={this.showEdit} del={this.Delete} >
                        <p>List Components</p>
                    </ListClass>
                    <input type="button" value={"Add product"} onClick={this.showAdd} id="bro" />
                    <Products productArrayRef={this.state.productArray}/>
                </div>
            )
        }
        else if (this.state.ShowAdd && !this.state.ShowEdit) {
            return (
                <div>
                    <AddClass EditObjectRef={this.state.EditObject}  productArrayRef={this.state.productArray} saveAddingHandlerRef={this.saveAddingHandler} BackHandlerRef={this.BackHandler} />
                </div>
            )
        }
        else if (!this.state.ShowAdd && this.state.ShowEdit) {
            return (
                <div>
                    <EditClass EditF={this.Edit}  EditObject={this.state.EditObject}  BackHandlerRef={this.BackHandler} productArrayRef={this.state.productArray} />
                </div>
            )
        }
    }
}

export default App;