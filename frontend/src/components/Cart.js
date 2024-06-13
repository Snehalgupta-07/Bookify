import { useContext, useEffect, useState, useRef } from "react";
import { UserContext } from "../context/user";

const CartDetails = ({ cart, onDelete }) => {
  const {total, setTotal } = useContext(UserContext);
  const backendUrl = "http://localhost:4000/api/event_m";
  
  // Initialize quantity from local storage
  const getInitialQuantity = () => {
    const storedQuant = localStorage.getItem(`quant-${cart._id}`);
    return storedQuant ? parseInt(storedQuant, 10) : 0;
  };

  const [quantity, setQuantity] = useState(getInitialQuantity); 
  const prevQuantityRef = useRef(quantity);

  // Set items in local storage whenever quantity changes
  useEffect(() => {
    localStorage.setItem(`quant-${cart._id}`, quantity);
    
  }, [quantity, cart._id]);

  useEffect(() => {
    localStorage.setItem('quantTotal', total);
    
  }, [quantity]);


  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) { 
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  useEffect(() => {
    const prevQuantity = prevQuantityRef.current;
    const difference = quantity - prevQuantity;
    setTotal((prevTotal) => prevTotal + difference * cart.price);
    prevQuantityRef.current = quantity;
  }, [quantity, cart.price, setTotal]);

  const handleClick = async () => {
    const response = await fetch(`/api/event_m/cart/${cart._id}`, {
      method: "DELETE"
    });

    if (response.ok) {
      const json = await response.json();
      console.log("Deleted:", json);
      onDelete(cart._id);
      setTotal((prevTotal) => prevTotal - cart.price * quantity);
    } else {
      console.error("Failed to delete:", await response.text());
    }
  };

  return (
    <div className="cart-details">
      {cart.image && <img src={`${backendUrl}${cart.image}`} alt={cart.book} />}
      <div className="details">
        <h4>{cart.book}</h4>
        <p>Written by {cart.author}</p>
        <p className="price">Price: ${cart.price}</p>
      </div>
      <div className="quantity">
        <button onClick={handleDecrease}>-</button>
        <p>{quantity}</p>
        <button onClick={handleIncrease}>+</button>
      </div>
      <button className="delete-button" onClick={handleClick}>Delete</button>
    </div>
  );
};

export default CartDetails;
