import { createContext ,useState} from "react";

export const UserContext=createContext(null);

export const UserProvider = (props) =>{
    const [login,setLogin]= useState(false);
    const [username1,setUsername1]= useState('Alex');
    const toggle=()=>{
        setLogin(!login)
    };
    return(
    <UserContext.Provider value={{login,toggle,username1,setUsername1}}>
        {props.children}
    </UserContext.Provider>
    );

};