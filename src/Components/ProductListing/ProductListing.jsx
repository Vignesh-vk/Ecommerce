import React, { useState, useEffect } from 'react';
import Navbar from "../Navbar/Navbar"
import Footer from '../Footer/Footer';
import "../ProductListing/Productlisting.css"
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import useBreadcrumbs from "use-react-router-breadcrumbs";

const ProductListing = () => {
const [productlisting, setProductlisting] = useState([]);
  const category = useParams();
  console.log(category)
  const navigate = useNavigate();
  const breadcrumbs = useBreadcrumbs();

 const getproductdata = async () =>{
  const {data} = await axios.get("https://fakestoreapi.com/products")
  setProductlisting(data)
  console.log(data)
 };

 useEffect(()=>{
  getproductdata();
 },[]);

 const Openproductdetailpage = (products) =>{
  navigate(`/${products.id}`)
 }


  return (
    <div>
      <Navbar />
      <div className="listingpage-full-page-data">
        <div className="listing-page-cover-up">
        
            <div className="left-bar-listing-data">

            {breadcrumbs.map(({ breadcrumb }) => breadcrumb)} youtube
              <div className="left-side-filter-heading">
                <h3>Apply Filter</h3>
              </div>
              <div className="price-heading">
                <h4>Price</h4>
              </div>
              <div className="price-select-checkbox">
                <div className="price-input-data">
                <input type="checkbox" name="" id="" />
                <h6> $ 20 - $50</h6>
                </div>
                <div className="price-input-data">
                <input type="checkbox" name="" id="" />
                <h6> $ 60 - $200</h6>
                </div>
                <div className="price-input-data">
                <input type="checkbox" name="" id="" />
                <h6> $ 201 - $500</h6>
                </div>
                <div className="price-input-data">
                <input type="checkbox" name="" id="" />
                <h6> $ 501 - $1000</h6>
                </div>
               
               
              </div>
              
              </div>
        
        </div>
        <div className="right-product-listing-page">
          <div className="product-listing-page-list" >
            {
            productlisting.map((product,index)=>(

             <div className="product-data" onClick={()=>Openproductdetailpage(product)}>
              <div className="product-listing-page" key={index} >
                <div className="product-listingpage-image">
                  <img src={product.image} alt="" />
                </div>
                <div className="product-title-listing-page">
                  <h6>{product.title}</h6>
                </div>
                <div className="listing-product-price">
                  <h6>$ {product.price}</h6>
                </div>
              </div>
             </div>
            ))
            }
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ProductListing