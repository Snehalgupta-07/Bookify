import { useEffect, useState } from "react"

// components
import Navbar from '../components/Navbar'
import '../index.css'
const Home = () => {
 

  return (
    <div className="home">
      <div className="Navbar">
      <Navbar />
      </div>
      <div className="website_background">
        <h1>EVENT MANAGMENT</h1>
      
    </div>
    </div>
  )
}

export default Home