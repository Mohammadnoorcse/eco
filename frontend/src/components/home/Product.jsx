import React, { useEffect } from 'react'
import "./home.css"
import { Link } from 'react-router-dom'
import {product} from "./home.js"
import ProductCard from './ProductCard.jsx'
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, getProduct } from "../../Redux/actions/productAction.js";
function Product() {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
      
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <div className='product content-center w-100'>
        <div className="product-content content">
            <div className="product-content-title">
                <span>Hot Product</span>
                 <Link to="/all-product">More Product<i class="fa-solid fa-arrow-right"></i></Link>
            </div>
            <div className="product-item">
                {/* {product.map((value,index)=>(
                     
                ))} */}
                 {products.slice(0, 12).map((value, index) => (
                    <ProductCard key={index} value={value} />
                 ))}
            </div>
        </div>

    </div>
  )
}

export default Product