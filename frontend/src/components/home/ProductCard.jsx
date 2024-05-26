import React from 'react'
import { Link } from 'react-router-dom'
import "./productcard.css"
export default function({value}) {

  const calculateDiscountedPrice = () => {
    return value.price - (value.price * value.discount) / 100;
  };
  return (
    <div className='product-card' key={value._id}>
        <Link to={`/product/${value._id}`}>
          <img src={value.images[0].url} alt="" srcset="" />
           <span className='product-name'>{value.name}</span>
           <span className='product-price'>৳ {calculateDiscountedPrice()}</span>
           <div className='product-card-1'>
            <span className='product-past'><del>{value.price}</del></span>
            <span className='product-discount'>-{value.discount}%</span>
           </div>
        </Link>
    </div>
  )
}
