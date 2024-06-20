import { useContext } from 'react';
import { UserContext } from '../context/user';

const Profile=(e)=>{
    const { login,username1 } = useContext(UserContext);
    return(
        <div className="user_profile">
        <h2>username: {username1}</h2>
        
        </div>

    )
}
export default Profile;