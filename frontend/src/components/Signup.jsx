import React from 'react'
import { Link } from "react-router-dom";
import Login from './Login';
import { useForm } from "react-hook-form";
import axios from "axios";
function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
      const userInfo={
      username: data.username,
      email : data.email,
      password: data.password,
      }
      await axios
      .post("http://localhost:4001/user/signup",userInfo)
      .then((res)=>{
        console.log(res.data)
        if(res.data){
          alert("signup sucessful")
          toast.success("signup sucessful");
        }
        localStorage.setItem("Users",JSON.stringify(res.data.user))
      }).catch((err)=>{
        console.log(err.response.data.message);
        toast.error("error:" +err);
      })
    };
  return (
    <>
<div className="flex h-screen items-center justify-center bg-gradient-to-br from-indigo-500">
      <div className="w-[600px]">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    <h3 className="font-bold text-lg">SignUp</h3>
    <div className="mt-4 space-y-2">
              <span>Name</span>
              <br/>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("username", { required: true })}/>
                <br/>
                {errors.username && <span className="text-sm text-red-600">This field is required</span>}
            </div> 
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
            <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: "Email is required" })}
              />
              <br/>
              {errors.email && <span className="text-sm text-red-600">{errors.email.message}</span>}
              </div>
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })} />
                <br/>
                {errors.password && <span className="text-sm text-red-600">This field is required</span>}
            </div>
            <div className="flex justify-around mt-6">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Signup
              </button>
              <p>
                Have account?{" "}
                <button to= "/" className="underline text-blue-500 cursor-pointer" onClick={()=>document.getElementById("my_modal_3").showModal()}> 
                  Login
                  </button>{" "}
                  <Login/>
              </p>
            </div>
            </form>
          </div>
        </div>
    </div>
    </>
  )
}

export default Signup