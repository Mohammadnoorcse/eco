import React, { useEffect, useState } from 'react'
import "./deshboardproduct.css"
import DeshboardSidebar from '../DeshboardSidebar'
import AddProduct from './AddProduct'
import ProductCategory from './ProductCategory';
import ProductTable from './ProductTable';

export default function DeshboardProduct() {
    const [showAddProduct, setShowAddProduct] = useState(false);
   
   
  return (
    <div className='deshboard-product content-center w-100'>
        <div className="deshboard-product-content content">
            <div className="deshboard-product-content-item">
                <DeshboardSidebar/>
                <div className="deshboard-product-item-value">
                    <div className="deshboard-product-item-value-title">
                        <div className="product-title-left">
                            <span>Product</span>
                        </div>
                         <div className="product-title-right">
                            <span className='header' onClick={()=>setShowAddProduct(true)}>Add Product</span>
                            <div className={showAddProduct? "product-title-right-child":"product-title-right-child-display"}>
                              <AddProduct />   
                            </div>
                         </div>
                    </div>
                    <div className="deshboard-product-item-value-all">
                      <ProductCategory/>
                    </div>
                    <div className="deshboard-product-item-value-all-product">
                      <ProductTable/>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
