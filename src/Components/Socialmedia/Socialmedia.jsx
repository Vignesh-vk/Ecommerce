import React from "react";
import "../Socialmedia/Socialmedia.css";
import instaimg2 from "../../Assets/socialmedia/instaimg2.jpg";
import instaimg3 from "../../Assets/socialmedia/instaimg3.jpg";
import instaimg5 from "../../Assets/socialmedia/instaimg5.jpg";
import instaimg6 from "../../Assets/socialmedia/instaimg6.jpg";

const Socialmedia = () => {
  return (
    <div>
      <div className="full-insta-details">
        <div className="section1-insta">
          <h4>FOLLOW </h4>
          <h4>WOW COLLECTION ON INSTAGRAM</h4>
          <h3>@cl_me_vignesh</h3>
        </div>
      </div>
      <div className="socialmedia-images">
        <div className="cloths-images">
          <img className="my-pics" src={instaimg2} alt="" />
          <img className="my-pics" src={instaimg3} alt="" />
          <img className="my-pics" src={instaimg5} alt="" />
          <img className="my-pics" src={instaimg6} alt="" />
        </div>
        <div className="cloths-images">
          <img className="my-pics" src={instaimg2} alt="" />
          <img className="my-pics" src={instaimg3} alt="" />
          <img className="my-pics" src={instaimg5} alt="" />
          <img className="my-pics" src={instaimg6} alt="" />
        </div>
      </div>

      <div className="delivery-details-all-data">
        <div className="delivery-details">
          <h5>Worldwide Shipping</h5>
        </div>
        <div className="delivery-details">
          <h5>Easy 30 Day Return</h5>
        </div>
        <div className="delivery-details">
          <h5>12 Months Warranty</h5>
        </div>
      </div>
    </div>
  );
};

export default Socialmedia;
