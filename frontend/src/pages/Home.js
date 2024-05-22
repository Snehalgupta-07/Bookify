import { useEffect, useState } from "react"

// components
import Navbar from '../components/Navbar'

const Home = () => {
 

  return (
    <div className="home">
      <div className="Navbar">
      <Navbar />
      </div>
      <div className="home_con">
        <h1>EVENT MANAGMENT</h1>
      
    </div>
    </div>
  )
}

export default Home