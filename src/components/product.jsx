
import { useState } from "react";
import Cart from "./cart";

const ProductGallery = ({ productArrayRef }) => {
  const [cartItems, setCartItems] = useState([]);
  const [Showcart,setShowcart]=useState(false);
  const [Showgallery,setShowgallery]=useState(true);
  const addToCart = (product) => {
    setCartItems((cart) => [...cart, product]);
    console.log(cartItems);
  };

  const ShowCart=()=>{
       setShowcart(true);
       setShowgallery(false);
  }

  const ShowGallery=()=>{
    setShowcart(false);
    setShowgallery(true);
}

     if (Showcart===false && Showgallery===true){
      return(
        <div class="main-Content">
      <h3 className="head3 mt-5">Gallery</h3>
      <div className="pro">
        {productArrayRef.map((product) => (
          <Product
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
        <br/>
        <button id="bro" onClick={()=>ShowCart()}>View cart</button>
      </div>
      );
     }else if(Showcart===true && Showgallery===false){
        return(
          <div class="main-Content"> 
            <h3 className="head3 mt-2">Cart</h3>
            <div className="pro">  
              <Cart cartItems={cartItems} />
            </div>
            <button id="bro" onClick={()=>ShowGallery()}>View Gallery</button>
          </div>
        );
     }
   
 
};

const Product = ({ product, addToCart }) => {
  return (
    <>
      <div className="card" style={{ width: "250px" , height:"430px"}} >
        <img
          src={product._image}
          height={"250px"}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{product._name}</h5>
          <p className="card-text">{product._price}</p>
          <button
            id="bro"
            type="button"
            data-bs-toggle="modal"
            data-bs-target={`#exampleModal_${product._id}`}
          >
            Show more
          </button>
          <br/>
          
          <button
          className="mt-1"
            type="button"
            id="back"
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button>
        </div>
      </div>

      <div className="modal fade" id={`exampleModal_${product._id}`} tabIndex="-1">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">More Details</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img src={product._image} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">{product._name}</h5>
                            <p className="card-text">{product._describtion}</p>
                            <p className="card-text">{product._price}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" id="back" data-bs-dismiss="modal">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
    </>
  );
};

export default ProductGallery;