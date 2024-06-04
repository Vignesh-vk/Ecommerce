import React from "react";

import Container from "react-bootstrap/Container";
import "../Navbar/loginbootstrap.css"
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Input } from "antd";

// Navbar images
import Mainlogo from "../../Assets/Mainlogo.jpg";
import Indialogo from "../../Assets/indialogo.jpg";
import signupbanner from "../../Assets/signupbanner.jpg"

// logo
import { CiDeliveryTruck } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaShoppingBag } from "react-icons/fa";

import "../Navbar/Navbar.css";
import Loginandsign from "../Loginandsignup/Loginandsign";
import axios from "axios";

const MainNavbar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [signup, showsignup] = useState(false)
  const [showPopup, setShowPopup] = useState(false);
  const [getproductdata, setGetproductdata] = useState([])


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowPopup(true);
    }, 2000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const categorydata = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products")
    setGetproductdata(data)
  }

  useEffect(() => {
    categorydata()
  }, [])

  const Trackorder = () => {
    navigate('/trackorder')
  }
  const opensignup = () => {
    showsignup(!signup)

  }

  const opencategorypage = (category) => {
    const Updateditem = getproductdata.filter((currentelement) => {
      return currentelement.category === category;
    })
    setGetproductdata(Updateditem)

  }

  // const Homepage = () =>{
  //   navigate("/")
  // }
  return (
    <div className="Nav-header">
      <Navbar expand="lg" className="bg-body-tertiary" style={{ boxShadow: "0px 0px 7px 0px", height: "90px", display: "flex", justifyContent: "space-around" }}>
        <Container className="container-fluid" fluid>
          <Navbar.Brand href="#" className="header-logo">
            <Link to={"/"}>
              <div className="navbar-logo" >
                <img src={Mainlogo} alt="" />
                <h6>COLLECTION</h6>
              </div>
            </Link>
          </Navbar.Brand>
          <div className="indialogo">
            <img src={Indialogo} alt="" />
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
            <div className="d-flex flex-grow-1 justify-content-between">
              <div className="search-data">
                <Input placeholder="Search.." style={{ width: "100%", maxWidth: "250px", border: "1px solid grey" }} />
              </div>

              <ul className="Menu-list d-flex flex-column flex-lg-row align-items-center">
                <li>
                  <Link to="/category/men" className="menu-items" onClick={() => opencategorypage("men's clothing")}>Mens</Link>
                </li>
                <li>
                  <Link to="/category/women" className="menu-items">Womens</Link>
                </li>
                <li>
                  <Link to="/category/electronics" className="menu-items">Electronics</Link>
                </li>
                <li>
                  <Link to="/category/jewellery" className="menu-items">Jewelery</Link>
                </li>
                <li>
                  <Link to="/category/accesories" className="menu-items">Accessories</Link>
                </li>
              </ul>

              <div className="track-signup-cart d-flex justify-content-flex-end"> {/* Added classes */}
                <div className="track-orders" onClick={() => Trackorder()}>
                  <CiDeliveryTruck className="track-orders-logo" />
                </div>
                <div className="signup-login-popup2">
                  <CgProfile className="signup-login-logo" onClick={handleShow} />
                  {showPopup && (
                    <Loginandsign
                      show={show}
                      handleClose={handleClose}
                      signup={signup}
                      signupbanner={signupbanner}
                      opensignup={opensignup}
                    />
                  )}
                </div>
                <div className="cart-logo3">
                  <FaShoppingBag className="cart-logo" />
                </div>
              </div>
            </div>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MainNavbar;
