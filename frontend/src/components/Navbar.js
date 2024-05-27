import { Link } from 'react-router-dom';
import '../index.css';
import { useContext } from 'react';
import { UserContext } from '../context/user';
import logo from '../Images/elogo.png';
const Navbar = (e) => {
  const { login,username1 } = useContext(UserContext);

  return (
    <header>
      <div className="container">
        <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
        </Link>
        {login ? (
          <div className="container2">
            <a href="/">Logout</a>
            <h3>{username1}</h3>
          </div>
        ) : (
          <div className="container2">
            <Link to="/signup">
              <h1>Signup</h1>
            </Link>
            <Link to="/login">
              <h1>Login</h1>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
