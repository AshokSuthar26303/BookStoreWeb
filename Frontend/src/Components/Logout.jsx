import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

const Logout = () => {
    const [authuser ,setauthuser] =useAuth()
    const  handleLogout=()=>{
        try {
            setauthuser({
                ...authuser,user:null
            })
            localStorage.removeItem("Users")// this user is from Authprovider.jsx which display who is loogedin 
            toast.success("Logout successfully")
            //  document.getElementById("my_modal_3").close();
            setTimeout(()=>{
              window.location.reload();
            // localStorage.setItem("Users", JSON.stringify(res.data.user)); //stored the data in browser localstorage in json formate like name:"Ashok"eyc...
          },2000)
            // window.location.reload(); //used to auto refresh the page when the user logout
        } catch (error) {
            toast.error("Error :" + error)
        }
    }
  return (
    <div>
      <button className='px-3 py-2 bg-red-600 rounded-md cursor-pointer text-white' onClick={handleLogout} >Logout</button>
    </div>
  )
}

export default Logout
