import React from 'react'
import icon1 from "../../Assets/hm-logo-icon.png"
import icon2 from "../../Assets/Puma-logo-icon.png"
import icon3 from "../../Assets/Lv-logo-icon.png"
import icon4 from "../../Assets/jacob-logo-icon.jpg"
import icon5 from "../../Assets/gucci-logo-icon.jpg"
import icon6 from "../../Assets/Zara-logo-icon.png"

import "../Categories/Category.css"

const Categroy = () => {
  return (
    <div className='section-2-Brand-logo'>
     <div className="brands-icons">
       <img src={icon1} alt="" />
     </div>
     <div className="brands-icons">
       <img src={icon2} alt="" />
     </div>
     <div className="brands-icons">
       <img src={icon3} alt="" />
     </div>
     <div className="brands-icons">
       <img src={icon4} alt="" />
     </div>
     <div className="brands-icons">
       <img src={icon5} alt="" />
     </div>
     <div className="brands-icons">
       <img src={icon6} alt="" />
     </div>
    </div>
  )
}

export default Categroy