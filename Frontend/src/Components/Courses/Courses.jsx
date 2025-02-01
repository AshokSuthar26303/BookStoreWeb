import React from 'react'
import Navbar from '../Navbar'
import Course from '../Course'
import Footer from '../Footer'
import Contact from '../Contact'
// import booksdata from "../books.json"

const Courses = () => {
    // {console.log(booksdata);}
    
  return (
    <div>
     <Navbar/>
    <div className='min-h-screen'>
      <Course/>
      {/* <Contact/> */}
    </div>
    <Footer/>
    </div>
  )
}

export default Courses
