import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const updateUser = (data) =>{
        setCurrentUser(data)
    }

    /* 
       It stores the current user in localStorage whenever currentUser is updated. 
       This ensures that the user data persists across page reloads.
    */
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser]);

    return(
        <AuthContext.Provider value={{ currentUser,updateUser }}>{children}</AuthContext.Provider>
    )
}