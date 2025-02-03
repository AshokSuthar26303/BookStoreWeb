import React, { createContext, useContext, useState } from 'react'
export const AuthContext=createContext(); //create context it is in-built in react

export const AuthProvider = ({children}) => {  //children component hold like navbar, banner etc... and we can this in the other components
    {/* so first we bring the data of user from the local storage */}
    const initialAuthUser=localStorage.getItem("Users");
    const [authuser ,setauthuser] = useState(
        initialAuthUser? JSON.parse(initialAuthUser):undefined
    )  //it use to display the info about the user who is loggedin
  return (
    <>
    <AuthContext.Provider value={[authuser,setauthuser]}>{children}</AuthContext.Provider>
    </>
  )
}

export const useAuth=()=>useContext(AuthContext) //create our own hook


// we create our context api bcoz we can access user globaly 
// useContext can be wrap in the main.jsx