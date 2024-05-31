import React from 'react'

import "../Footer/Footer.css"
import images1 from "../../Assets/play.jpg";
import images2 from "../../Assets/app.jpg";
import images3 from "../../Assets/pay.png";

import instagramlogo from "../../Assets/instagram logo.jpg";
import twitterlogo from "../../Assets/twitter logo.jpg";
import facebooklogo from "../../Assets/facebookicon.png";
import Mainlogo from "../../Assets/Mainlogo.jpg"





const Footer = () => {
  return (
    <div  className="full-div" style={{background:"whitesmoke", height:"auto"}}>
        <div className='main-footer-div'>
            <div className="footer-all-deatils">
            <div className="footer-logo-div">
          <a className="Textcolor" href="/" style={{listStyle:"none",textDecoration:"none", color:"black"}}>
          <div className="footer-navbar-logo">
            <img src={Mainlogo}  alt="" />
              <h6 style={{listStyle:"none"}}>COLLECTION</h6> </div>
          </a>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ducimus assumenda nihil sed expedita praesentium neque. Libero quos saepe eos voluptates cupiditate magni, culpa incidunt recusandae voluptas at! Et, reprehenderit?</p>
        </div>
        {/* <div className="menu-flex"> */}
        <div className="footer-cloths-menu">
        <div className="footer-company-heading">
            <h4>PRODUCTS</h4>
          </div>
          <ul className='footer-list-menu' >
            <li >Home</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Most Trending</li>
            <li>Buy</li>


          </ul>
        </div>

        <div className="about-company">
          <div className="footer-company-heading">
            <h4>COMPANY</h4>
          </div>
          <ul className='footer-list-menu'>
          <li>Partnership</li>
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact us</li>
            

          </ul>
        </div>
        <div className="about-comunity">
          <div className="footer-company-heading">
            <h4>COMMUNITY</h4>
          </div>
          <ul className='footer-list-menu'>
          <li>Help Center</li>
            <li>Join Creater Community</li>
            <li>Submit an Idea</li>
            <li>Press & Media</li>
            <li>New letter</li>
            

          </ul>
        </div>
        </div>
       
           
            </div>
   <div  className='footer-list-payment'>
            <ul>
          <img src={images1} alt="" />
          <img src={images2} alt="" />
          <img src={images3} alt="" />
            

          </ul>
          </div>
            <div className="newletter-input">
              <div className="footer-news-letteremail">
                <h5>New Letter Subsription</h5>
              <input type={'email'} placeholder='Email...' />
              <button>Submit</button>
            </div>
            <div className="social-media-icons">
             <a href="https://www.instagram.com/" target='blank'><img className="socialmedia-icon"src={instagramlogo} alt="" /></a>
            <a href="https://twitter.com/?lang=en" target='blank'><img className="socialmedia-icon"src={twitterlogo} alt="" /></a>
            <a href="https://www.facebook.com/" target='blank'><img className="socialmedia-icon"src={facebooklogo} alt="" /></a>
            </div>
            </div>
              </div>
              // </div>
     
   
  )
}

export default Footer