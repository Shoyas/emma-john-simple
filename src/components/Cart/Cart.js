import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);

    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        total = (total + product.price);
    
    } 
    
    let shipping = 0;
    if( total > 0){
        shipping = 4.99;
    }
    else if( total >= 35){
        shipping = 7.99;
    }
    else if( total >= 100){
        shipping = 0;
    }
    console.log(shipping);

    let tax = (total / 10).toFixed(2);
    const grandTotal =  (shipping + Number(tax) + total).toFixed(2);

    return (
        <div>
            <h4>Order Summery</h4>
            <p>Order places : {cart.length}</p>
            <br/>
            <p>Product price : {total}</p>
            <p>Shipping price : {shipping}</p>
            <p>Tax + VAT : {tax}</p>
            <p>Total price : {grandTotal}</p>
        </div>
    );
};

export default Cart;