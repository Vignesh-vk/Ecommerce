import React, { useEffect, useState } from 'react'
import "../Homeproducts/Homeproducts.css"
import { useNavigate } from "react-router-dom";

const Homeproducts = () => {
    const [products, Setproducts] = useState([])
    const navigate = useNavigate();
  
    useEffect(() => {
        const fetchproducts = async() =>{
            const res = await fetch("https://fakestoreapi.com/products?limit=15")
            const data = await res.json()
            Setproducts(data);
        }
        fetchproducts()
    },[])

    const showproduct = (navi) =>{
        navigate(`/${navi.id}`)
    }
  return (
    <div>
        <div className="Homepage-products">
            <div className="homepage-products-heading">
                <h3>
                    TOP TRENDING
                </h3>
                </div>
                <div className="homapage-cloths" >
                  {
                    products.map((product,i) =>(
                        <div className="homepage-all-products" onClick={() =>showproduct(product)}>

                        <div className="products-image" key={i}>
                            <img src={product.image} className="home-img"alt="" />
                            <div className="products-title">
                            <h6>{product.title}</h6>
                            </div>
                            <div className="products-prices">
                                <h6> $ {product.price}</h6>
                            </div>
                            <div className="home-page-products-btn">
                                <button className='bag'>Add to Bag</button>
                            </div>
                        </div>
                        </div>

                    ))
                  }
               
            </div>
        </div>
    </div>
  )
}

export default Homeproducts