import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box dark:bg-slate-900 dark:text-white">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    <h3 className="font-bold text-lg">Login </h3>
    {/* for email  */}
    <div className='flex flex-col mt-4 space-y-2'>
        <span>Email</span>
        <input type="email" placeholder='enter your email' className='w-80 py-1 outline-none px-3 border rounded-md' {...register("email", { required: true })} />
        {errors.email && <span className='text-sm text-red-500'>email must required</span>}
    </div>

    {/* for password */}
    <div className='flex flex-col mt-4 space-y-2'>
        <span>Password</span>
        <input type="password" placeholder='********' className='w-80 py-1 outline-none px-3 border rounded-md' {...register("password", { required: true })} />
        {errors.password && <span className='text-sm text-red-500'>password must required</span>}
    </div>

        {/* button */}
    
    <div className='flex justify-around mt-8'>
        <button className='bg-pink-500  text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
        <p>Not Registred? <Link to="/signup" className='underline text-blue-500 cursor-pointer'>Signup</Link>{""} </p>
    </div>

    </form>

  </div>
</dialog>
    </div>
  )
}

export default Login
