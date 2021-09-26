import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    const shipping = 15;

    let totalQuantity = 0;

    for(const product of cart){
        product.quantity = !product.quantity ? 1: product.quantity;
        total = total+product.price*product.quantity;
        totalQuantity = totalQuantity+ product.quantity;
    }
    return (
        <div>
             <h3>Order Summary</h3>
             <h5>Items Ordered: {totalQuantity}</h5>
             <br />
             <p>Total: {total}</p>
             <p>Shipping: {shipping}</p>

        </div>
    );
};

export default Cart;