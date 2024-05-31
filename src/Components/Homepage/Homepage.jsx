import React from 'react'
import Mainbanners from '../Mainbanner/Mainbanners'
import Navbar from "../Navbar/Navbar"
import Category from '../Categories/Category'
import Homeproducts from '../Homeproducts/Homeproducts'
import Offerzone from '../Offerzone/Offerzone'
import Socialmedia from '../Socialmedia/Socialmedia'
import Footer from '../Footer/Footer'


const Homepage = () => {
  return (
    <div>
        <Navbar />
        <Mainbanners/>
        <Category/>
        <Homeproducts/>
        <Offerzone/>
        <Socialmedia/>
        <Footer/>
    </div>
  )
}

export default Homepage