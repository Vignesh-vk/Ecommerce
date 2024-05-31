import React, { useEffect } from 'react'
import Menofferbanner from "../../Assets/Menoffer.jpg"
import Womenofferbanner from "../../Assets/Womenoffer.jpg"
import accessoriesoffer from "../../Assets/accessaryoffer.jpg"
import electronicoffer from "../../Assets/electronicoffer.jpg"
import "../Offerzone/Offerzone.css"
import Aos from 'aos'
import 'aos/dist/aos.css'


const Offerzone = () => {
    useEffect(()=>{
        Aos.init()
    },[])
 
      
  return (
    <div className='Offer-zone-main-banners'>
        <div className="offerzone-banner" data-aos="fade-down"data-aos-duration="4000" >
            <img src={Menofferbanner} alt="" />

        </div>
        <div className="offerzone-banner" data-aos="fade-down"data-aos-duration="4000" >
            <img src={Womenofferbanner} alt="" />
            
        </div>
        <div className="offerzone-banner" data-aos="fade-up"data-aos-duration="3000" >
            <img src={accessoriesoffer} alt="" />
            
        </div>
        <div className="offerzone-banner" data-aos="fade-up" data-aos-duration="3000">
            <img src={electronicoffer} alt="" />
            
        </div>
    </div>
  )
}

export default Offerzone