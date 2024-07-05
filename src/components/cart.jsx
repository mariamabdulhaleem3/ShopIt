const cart = ({ cartItems }) => {
  if (cartItems.length==0){
    return(
      <>
        <p className="text-secondary">The cart is empty</p>
      </>
    )
  }else{
    return (
      <>
        {cartItems.map((item) => (
            <>
            <div className="card" style={{ width: "250px" ,  height:"400px"}} key={item._id}>
            <img
              src={item._image}
              height={"250px"}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{item._name}</h5>
              <p className="card-text">{item._price}</p>
              <button
                id="bro"
                type="button"
              >
                Buy now
              </button>
              <br/>
              
            </div>
          </div>
          </>
        ))}
      </>
);
  }
   
  };
  
  export default cart;
