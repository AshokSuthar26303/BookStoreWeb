import React from 'react'
import Home from './Home/Home'
import { Route, Routes } from "react-router-dom"
import Courses from './Components/Courses/Courses'
import Signup from './Components/Signup'
import Contacts from './Components/Contacts/Contacts'
// import Contact from './Components/Contacts/Contact'
const App = () => {
  return (
    <>
   {/* <Home/> */}


   {/* <Course/> */}

  {/* before define the routes we need to install react-router-dom and import in program after this we need to do this like  */}
  {/* and use BrowserRoutes in main.jsx */}
   <div className='dark:bg-gray-900 dark:text-white' >
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/course' element={<Courses/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/contact' element={<Contacts/>}/>
    

   </Routes>
   </div>
    </>
  )
}

export default App
