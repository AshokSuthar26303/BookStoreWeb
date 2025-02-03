import React from 'react'
import Home from './Home/Home'
import { Navigate, Route, Routes } from "react-router-dom"
import Courses from './Components/Courses/Courses'
import Signup from './Components/Signup'
import Contacts from './Components/Contacts/Contacts'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'
// import Contact from './Components/Contacts/Contact'
const App = () => {
  const [authuser,setauthuser]=useAuth();
    console.log(authuser); ///display the loggin user info on console 
  return (
    <>
  {/* before define the routes we need to install react-router-dom and import in program after this we need to do this like  */}
  {/* and use BrowserRoutes in main.jsx */}
   <div className='dark:bg-gray-900 dark:text-white' >
   <Routes>
    <Route path='/' element={<Home/>}/>
    {/* if user logged in then display course page otherwise navigate to signup page */}
    <Route path='/course' element={authuser?<Courses/>:<Navigate to="/signup"/>}/> 
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/contact' element={<Contacts/>}/>
   </Routes>

   <Toaster/>
   </div>
    </>
  )
}

export default App
