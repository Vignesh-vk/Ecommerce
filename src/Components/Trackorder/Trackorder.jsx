import React, { useState } from 'react'
import Navbar from "../Navbar/Navbar"
import "../Trackorder/Trackorder.css" 
import trackorder from "../../Assets/Trackorder.png"
import Loginandsign from '../Loginandsignup/Loginandsign'
import signupbanner from "../../Assets/signupbanner.jpg"

const Trackorder = () => {
  
const [openlogin, setLogin] = useState([false]);
const [signup, showsignup] = useState(false)

const handleClose = () => setShow(false);
const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

    const opensignup = () =>{
       setLogin(true);
    }
  return (
    
    <div>
        <Navbar/>
    <div className="Trackorder-full-page">
        <div className="trackorder-cover">

        
        <div className="track-order-images">
            <img src={trackorder} alt="" />
        </div>
        </div>
        <div className="track-order-details">
            <div className="input-data">
                <div className="track-order-heading">
                <h2>Track your Order</h2>
                <h6>Find out the exact location of your product and get the relevant alerts.</h6>
                </div>
                <div className="track-order-input-data">
                    <input type="number" placeholder='Enter your Order ID' />
                    </div>
                    <div className="track-order-email">
                    <input type="email" name="" placeholder='Enter Your Email/Number' id="" />
                    </div>
                    <div className="login-link">
                        <h6 onClick={()=>opensignup()}>Or Login & Track Order</h6>
                        <button>Track Order</button>
                    </div>
                
            </div>
        </div>
    </div>
    {openlogin == true && <Loginandsign
    show = {openlogin}
    handleClose = {handleClose}
    signup = {signup}
    signupbanner = {signupbanner}
    opensignup = {opensignup}
    handleshow = {handleShow}/>}
    
    </div>
  )
}

export default Trackorder