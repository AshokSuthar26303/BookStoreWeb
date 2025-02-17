import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "./Login";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const location=useLocation();
  const navigate=useNavigate();
  const from = location.state?.from?.pathname || "/"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:4001/user/signup", userInfo) //data is stored in this variable
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          // alert("Signup Successfull");
          toast.success('signup successfully');
          navigate(from,{replace:true})

        }
        localStorage.setItem("Users", JSON.stringify(res.data.user)); //stored the data in browser localstorage in json formate like name:"Ashok"eyc...
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          // alert("Error" + err.response.data.message);
          toast.error("Error" + err.response.data.message);
          <Navigate to='/'/>
        }
      });
    // console.log(data);
  };
  return (
    <>
      <div className="flex  h-screen items-center justify-center ">
        <div
          id="my_modal_3 "
          className="border modal-box p-5 dark:bg-slate-900 dark:text-white rounded-md"
        >
          <div>
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
              <h3 className="font-bold text-lg">Signup</h3>
              {/* name */}
              <div className="flex flex-col mt-4 space-y-2">
                <span>Name</span>
                <input
                  type="text"
                  placeholder="enter your fullname"
                  className="w-80 py-1 outline-none px-3 border rounded-md"
                  {...register("fullname", { required: true })}
                />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    fullname must be required
                  </span>
                )}
              </div>

              {/* for email  */}
              <div className="flex flex-col mt-4 space-y-2">
                <span>Email</span>
                <input
                  type="email"
                  placeholder="enter your email"
                  className="w-80 py-1 outline-none px-3 border rounded-md"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    email must required
                  </span>
                )}
              </div>

              {/* for password */}
              <div className="flex flex-col mt-4 text-black space-y-2">
                <span>Password</span>
                <input
                  type="password"
                  placeholder="********"
                  className="w-80 py-1 outline-none px-3 border rounded-md"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    password must required
                  </span>
                )}
              </div>

              {/* button */}

              <div className="flex justify-around mt-8">
                <button className="bg-pink-500  text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Signup
                </button>
                <p>
                  Have account?{" "}
                  <button
                    //   to="/"
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                  {""}
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
