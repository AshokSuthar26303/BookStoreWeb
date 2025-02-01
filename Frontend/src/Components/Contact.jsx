import React from 'react'

const Contact = () => {
  return (
    <>
       {/* <h1>hello</h1> */}
       <div className="flex  h-screen items-center justify-center ">
  <div className="modal-box border dark:bg-slate-900 dark:text-white">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      {/* <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link> */}
    <h3 className="font-bold text-lg">Contact</h3>
    {/* for name-  */}
    <div className='flex flex-col mt-4 space-y-2'>
        <span>Name</span>
        <input type="name" placeholder='enter your email' className='w-80 py-1 outline-none px-3 border rounded-md'/>
      
    </div>
    {/* for email */}
    <div className='flex flex-col mt-4 space-y-2'>
        <span>Email</span>
        <input type="email" placeholder='enter your email' className='w-80 py-1 outline-none px-3 border rounded-md'/>
      
    </div>

    {/* for Message */}
    <div className='flex flex-col mt-4 space-y-2'>
        <span>Message</span>
        <input type="text" placeholder='Type your message' className='w-80 py-1 outline-none px-3 border rounded-md'  />
        {/* {errors.password && <span className='text-sm text-red-500'>password must required</span>} */}
    </div>

        {/* button */}
    
    <div className='flex justify-around mt-8'>
        <button className='bg-pink-500  text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Submit</button>
        {/* <p>Not Registred? <Link to="/signup" className='underline text-blue-500 cursor-pointer'>Signup</Link>{""} </p> */}
    </div>

    </form>

  </div>
</div>
    </>
  )
}

export default Contact
