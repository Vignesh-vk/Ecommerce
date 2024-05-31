import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "../Productdeatilpage/Productdetailpage.css"
import Navbar from "../Navbar/Navbar"
import { FaStar } from "react-icons/fa";
import Accordion from 'react-bootstrap/Accordion';
import Footer from "../Footer/Footer";




const Productpage = () => {
    
const [product, setProduct] = useState([])
const location = useParams();

  const showproducts = async () =>{
  const {data} = await axios.get("https://fakestoreapi.com/products");
  setProduct(data)
  console.log(data)

  };

  useEffect(() =>{
    showproducts();
  },[]);

  return (
 
    <div>
      <Navbar/>
        <div className="products-detail-page">
            <div className="products-data">
                {
             product.map((item,i)=>(
              
              <div className="product-data">
                    {item.id == location.id && (
                    <div className="products-list" key={i}>
                    <div className="product-data-image">
                    <img src={item.image} className='productimg' alt="" />
                    </div>
                        <div className="product-details-full-data">
                          <div className="products-category">
                            <h5>{item.category}</h5>
                          </div>
                       <div className="products-title">
                        <h2>{item.title}</h2>
                       </div>
                      
                       <div className="product-rating">
                        <FaStar className='stars'/>
                        <FaStar className='stars'/>
                        <FaStar className='stars'/>
                        <FaStar className='stars'/>
                        <FaStar className='stars'/>
                       </div>
                       <div className="product-price">
                        <h4>$ {item.price}</h4>
                        <p>inclusive of all taxes</p>
                        <hr />
                        <div className="product-description">
                          <p>{item.description}</p>
                        </div>
                        <div className="product-sizes">
                            <h3>Select Size</h3>
                            <div className="product-alpha-size">
                              <button type="button">S</button>
                              <button type="button">M</button>
                              <button type="button">L</button>
                              <button type="button">XL</button>
                              <button type="button">XXL</button>

                            </div>
                        </div>
                        <div className="buynow-addtobag-buttons">
                          <div className="add-to-bag-btn">
                            <button type="button">Add to bag</button>
                          </div>
                          <div className="buy-now-btn">
                            <button type="button">Buy Now</button>
                          </div>
                        </div>

                      <div className="product-description-details-data">
                        <div className="product-overview-data">

    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Overview</Accordion.Header>
        <Accordion.Body>
          {item.description}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Product Details</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Product Warranty</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Material Care</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>



                        </div>
                      </div>
                       </div>

                        </div>
                          
                       
                               </div>
                           
                    )}
               </div>
             ))
            }
            </div>
        </div>
   

      <Footer/>
    </div>
  )
}

export default Productpage