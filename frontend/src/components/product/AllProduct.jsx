import React, { useState } from 'react'
import "./allproduct.css";
import {product} from "../home/home.js"
import ProductCard from '../home/ProductCard.jsx';
import { useSelector, useDispatch } from "react-redux";
import Loader from "../loader/Loader.jsx";

export default function AllProduct() {
  const [filterItem,setFilterItem] = useState(false);
  console.log(filterItem)

  const { loading, error, products } = useSelector((state) => state.products);
  
  return (
   <>{
    loading?<Loader/>:<>
    
    <div className='allproduct content-center w-100'>
        <div className="allproduct-content content">
            <div className="allproduct-item">
            {products.map((value)=>(
                    <ProductCard  value={value}/>
                ))}
            </div>

            <div className="allproduct-filter">
              <i class="fa-solid fa-list" onClick={()=>filterItem?setFilterItem(false):setFilterItem(true)}></i>
               <div className={filterItem?"filter-item":"filter-item-display"}>
                <div className="filter-item-1">
                    <div className='filter-item-title'>
                      <span>Catgeory</span>
                    </div>
                    <div className='filter-item-value'>
                      <input type="checkbox" value="box" />
                      <span>box</span>
                    </div>
                    <div className='filter-item-value'>
                      <input type="checkbox" value="box" />
                      <span>box</span>
                    </div>
                    <div className='filter-item-value'>
                      <input type="checkbox" value="box" />
                      <span>box</span>
                    </div>
                    <div className='filter-item-value'>
                      <input type="checkbox" value="box" />
                      <span>box</span>
                    </div>
                    <div className='filter-item-value'>
                      <input type="checkbox" value="box" />
                      <span>box</span>
                    </div>
                    <div className='filter-item-value'>
                      <input type="checkbox" value="box" />
                      <span>box</span>
                    </div>
                </div>
               </div>
            </div>

        </div>

    </div>
    
    </>
   }
   
   
   </>
  )
}
