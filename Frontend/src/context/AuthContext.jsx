import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext)
}

//authProvider

export const AuthProvide = ({children}) =>{
    const [currentUser , setCurrentUser] = useState(null)
    const [loading , setLoading] = useState(true);
    const registerUser = async (data) => {   

    }
    const value = {
        currentUser
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}