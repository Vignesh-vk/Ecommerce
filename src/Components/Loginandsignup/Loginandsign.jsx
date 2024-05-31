import React from 'react'
import Modal from 'react-bootstrap/Modal';



const Loginandsign = (props) => {
  return (
    <div>
         <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header className="closebutton" closeButton>
          {props.signup == false ? (
          <div className="modal-popup-full-cover">
            <div className="modal-popup-login-image">
              <img src={props.signupbanner} className="loginbannerimg"alt="" />
            </div>
            <div className="modal-popup-login-details">
              <div className="modal-popup-login-input-data">
                <div className="modal-popup-login-input-data-heading">
                  <h2>Login</h2>
                  </div>
                  <div className="login-paragaraph">
                  <h6>New to Wow Collection?</h6> 
                   <h5 onClick={props.opensignup}>SIGNUP</h5> 
                   </div>
                   <div className="login-details">
                    <input className="name" placeholder="Email/Phone Number" type="name" />
                    <input className="password" placeholder="Password"type="password" />
                   </div>
                   <div className="login-btn">
                    <button>Login</button>
                   </div>
              </div>
            </div>
          </div>
          ) : (
            <div className="modal-popup-full-cover">
            <div className="modal-popup-login-image">
              <img src={props.signupbanner} alt="" />
            </div>
            <div className="modal-popup-login-details">
              <div className="modal-popup-login-input-data">
                <div className="modal-popup-login-input-data-heading">
                  <h2>Sign Up</h2>
                  </div>
                  <div className="login-paragaraph">
                  <h6>New to Wow Collection?</h6> 
                   <h5 onClick={props.opensignup}>SIGNUP</h5> 
                   </div>
                   <div className="login-details">
                    <input className="name" placeholder="Email/Phone Number" type="name" />
                    <input className="password" placeholder="Password"type="password" />
                   </div>
                   <div className="login-btn">
                    <button>Login</button>
                   </div>
              </div>
            </div>
          </div>

          ) }
        </Modal.Header>
       
      </Modal>
    </div>
  )
}

export default Loginandsign