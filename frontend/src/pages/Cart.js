import { useEffect, useState, useContext } from "react";
import CartDetails from "../components/Cart";
import { UserContext } from "../context/user";
import Navbar from '../components/Navbar'

const Cart = () => {
  const [carts, setCarts] = useState(null);
  const { total, setTotal } = useContext(UserContext);

  useEffect(() => {
    const fetchCarts = async () => {
      const response = await fetch('/api/event_m/cart/cart');
      const json = await response.json();

      if (response.ok) {
        setCarts(json);
      } else {
        console.log("Cannot fetch Books for cart");
      }
    };

    fetchCarts();
  }, []);

  const handleDelete = (id) => {
    setCarts((prevCarts) => prevCarts.filter(cart => cart._id !== id));
  };

  return (
    
    <div className="cart_parent">
      <div className="Navbar">
      <Navbar />
      </div>
      <div className="cart">
        {carts && carts.map(cart => (
          <CartDetails cart={cart} key={cart._id} onDelete={handleDelete} />
        ))}
      </div>
      <div className="total">
        <button>Total: ${total}</button>
        <button className="two">Proceed to Pay</button>
      </div>
    </div>
  );
};

export default Cart;
