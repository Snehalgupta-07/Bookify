import { useContext, useEffect,useState } from 'react';
import { UserContext } from '../context/user';
 import WishDetails from '../components/WishDetails';
 
const Profile=(e)=>{
    const { login,username1 } = useContext(UserContext);
    const [wish, setWish] = useState(null)

    useEffect(() => {
      const fetchWish = async () => {
        const response = await fetch('/api/event_m/wish/wish');
        const json = await response.json()
  
        if (response.ok) {
          setWish(json)
        }
      }
  
      fetchWish()
    }, [])

    return(
        <>
        <div className="user_profile">
        <h2>username: {username1}</h2>
        
        </div>
        <div className="wishlist">
        {wish && wish.map((wish)=>{
           return <WishDetails  wish={wish} key={wish._id} />
        })}
        </div>
        </>
    )
}
export default Profile;