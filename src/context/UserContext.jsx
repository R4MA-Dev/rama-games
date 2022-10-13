import { createContext, useState, useEffect } from "react";
import { auth } from "../data/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

export const UserContext = createContext()

const UserContextProvider = ({children})=>{
    const [session, setSession] = useState(null)
    const [user, setUser] = useState({})

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setSession(true)
                setUser({
                    email : user.email,
                    id : user.uid
                })
            }else{
                setSession(false)
                setUser({})
            }
        })
    }, [])

    return(
        <UserContext.Provider value={{session, user}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider