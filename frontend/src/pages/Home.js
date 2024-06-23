import { useEffect, useState,useContext } from "react"
import { UserContext } from "../context/user"
import { Link } from "react-router-dom"
// components
import Navbar from '../components/Navbar'
import '../index.css'
import logo from '../Images/home_backjpg.jpg';
import book1 from '../Images/kaliedoscope.jpg'


const Home = () => {
 const {login}=useContext(UserContext)

  return (
    <div className="home">
      <div className="Navbar">
      <Navbar />
      </div>
      <div className="website_background">
      <div className="website_content">
      <h1>ONE PLACE FOR ALL <span>BOOKWORMS</span></h1>
      </div>
      <div className="website_button">
        <button><a href="./booklist">  Explore</a></button>
      </div>
      </div>
     
      <div className="about_con">
      <div className="about_title">
        <h1><span>About Us</span></h1>
        </div>
        <h2>Welcome to <span>Bookify!</span><br /><br /> Your ultimate online bookstore for a diverse selection of books<br /><br />
         Explore our vast collection and find your next favorite read.<br /><br /> Happy reading with Bookify!</h2>
         </div>
         <div className="books">
         <div className="book1">
         <img src={book1} alt="Book 1" />
         <div className="book1_con">
          <p>kaliedoscope</p>
          <p>By Snehal Gupta</p>
          <span>Rs. 199</span>
         </div>
          </div>
          <div className="book2">
          <img src={book1} alt="Book 1" />
          <div className="book1_con">
          <p>kaliedoscope</p>
          <p>By Snehal Gupta</p>
          <span>Rs. 199</span>
         </div>
          </div>
          <div className="book3">
          <img src={book1} alt="Book 1" />
          <div className="book1_con">
          <p>kaliedoscope</p>
          <p>By Snehal Gupta</p>
          <span>Rs. 199</span>
         </div>
          </div>
          <div className="book4">
          <img src={book1} alt="Book 1" />
          <div className="book1_con">
          <p>kaliedoscope</p>
          <p>By Snehal Gupta</p>
          <span>Rs. 199</span>
         </div>
          </div>
          <div className="book5">
          <img src={book1} alt="Book 1" />
          <div className="book1_con">
          <p>kaliedoscope</p>
          <p>By Snehal Gupta</p>
          <span>Rs. 199</span>
         </div>
        
          </div>
         
         </div>
         <div className="book_button">
         <button><a href='./booklist'>View All</a></button>
         </div>
         <div className="user_book">
        <div className="user_con">
          <h1>Want to <span>sell</span> your <span>old</span> books ??</h1>
          <p>At Bookify, we are thrilled to announce that you can now sell your old books on our<br /><br /> platform. Whether you're looking to declutter your bookshelf, make some extra cash, <br /><br /> share your favorite reads with others, our new feature makes it easy and convenient.</p>
        </div>
        <div className="user_button">
          <button><a href='./book_sell'>View</a></button>
        </div>
        </div>
        <div className="user_book">
        <div className="user_con">
          <h1>Want to <span>swap</span> your  book ??</h1>
          <p>Discover our new Book Swap feature! Easily list your books for exchange, <br /><br />browse others' collections, send swap requests, chat with users, and enjoy hassle-free<br /><br /> book trading within our community</p>
        </div>
        <div className="user_button">
          <button><a href='./swap'>View</a></button>
        </div>
      </div>
        </div>
    
    
  )
}

export default Home