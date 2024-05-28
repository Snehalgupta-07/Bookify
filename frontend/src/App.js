import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
// pages & components
import Home from './pages/Home'
import SignupForm from './pages/SignupForm'
import LoginForm from './pages/LoginForm'
import Booklist from './pages/Booklist'
import BsellForm from './pages/BsellForm'
import OldBooks from './pages/OldBooks'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
            <Route 
              path="/signup" 
              element={<SignupForm />} 
            />
            <Route 
              path="/login" 
              element={<LoginForm />} 
            />
            <Route 
              path="/booklist" 
              element={<Booklist />} 
            />
            <Route 
              path="/book_sell" 
              element={<BsellForm />} 
            />
         
          <Route 
              path="/old_books" 
              element={<OldBooks />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;