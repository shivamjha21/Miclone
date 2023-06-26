import React from 'react';
import "../styles/productreviewcard.css"

const ProductReviewCard = ({ image, index, price, name, review }) => {
  return (
    <div className='productreviewcard'>
      <img src={image} alt={`${index} review`} />
      <h5>{review}</h5>
      <span>{name}</span>
      <b>{price}</b>
    </div>
  );
};

export default ProductReviewCard;
