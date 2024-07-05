import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="container mt-5">
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {cart.map((item, index) => (
            <div className="col mb-4" key={index}>
              <div className="card h-100">
                <img src={item.product_img} className="card-img-top" alt={item.product_name} height="250px" />
                <div className="card-body">
                  <h5 className="card-title">{item.product_name}</h5>
                  <p className="card-text">{item.product_desp}</p>
                  <p className="card-text"><strong>Price:</strong> {item.product_price}</p>
                  <button onClick={() => removeFromCart(item)} className="btn btn-danger">Remove from cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
