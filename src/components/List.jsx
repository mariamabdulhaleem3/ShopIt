
import product from "../Data/productClass";

const List = (props) => {

            return (
                <div class="tbl">
                    <h3 class="head3">Dashboard</h3>
                    <table class="table table-light my-5">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">image</th>
                                <th scope="col">name</th>
                                <th scope="col">price</th>
                              
                                <th>Delete</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody id="tblbody">
                            {props.productArrayRef.map((pro, i) => {
                                        return (
                                            <tr>
                                                <th scope="row">{pro._id}</th>
                                                <td><img src={pro._image} width={'100px'} height={"100px"}/></td>
                                                <td>{pro._name}</td>
                                                <td>{pro._price}</td>
                                                <td><input type="button" 
                                                onClick={() => { props.del(i) }}
                                                
                                                id="bro" value={"Delete"} /></td>

                                                <td><input type="button" 
                                                onClick={() => props.showEditRef(pro)}
                                             id="edit" value={"Edit"} /></td>
                                            </tr>
                                        )
                                    }
                                )
                            }
                        </tbody>
                    </table>
                </div>
            )
        }
      

export default List;
