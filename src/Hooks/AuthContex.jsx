import React,{createContext, useEffect, useState} from "react";


export const AuthContext = createContext();


function AuthProvider ({children}){
 const [loggedUser,setLoggedUser] = useState();
 const [savedUser, setSavedUser] = useState({})

useEffect(()=>{
    setSavedUser(JSON.parse(localStorage.getItem('user')))
},[])
console.log(savedUser);
const login=(email,password)=>{

    if(email == savedUser.email && password == savedUser.password){
        console.log("object")
        setLoggedUser(savedUser);
    }else{
        console.log('Error while login')
    }
}
console.log(loggedUser,"loggedUser in context")

const logout=() =>{
    setLoggedUser(null);
}
return(
	<AuthContext.Provider value={{loggedUser,login, logout} }>
		{children}
	</AuthContext.Provider>
)
}

export default AuthProvider;