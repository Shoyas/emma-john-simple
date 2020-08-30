import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    // console.log(props);
    const {name, quantity} = props.product;
    return (
        <div className="item-detail">
            <h2>Name : {name}</h2>
            <h3>Quantity : {quantity}</h3>
        </div>
    );
};

export default ReviewItem;