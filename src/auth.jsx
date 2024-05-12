import { useState, createContext, useContext } from "react"

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const userDetails = JSON.parse(localStorage.getItem('user'));
    const [user, setUser] = useState(userDetails);

    const login = (user) => {
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
    }

    const logout = () => {
        setUser(null);
        localStorage.clear("user");
    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )

}


export const useAuth = ()=> {
    return useContext(AuthContext);
}