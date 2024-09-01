import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit =async (data) => {
    const userInfo={
      email : data.email,
      password: data.password,
      }
      await axios
      .post("http://localhost:4001/user/login",userInfo)
      .then((res)=>{
        console.log(res.data)
        if(res.data){
          toast.success('login Successfully');
        }
        localStorage.setItem("Users",JSON.stringify(res.data.user))
      }).catch((err)=>{
        console.log(err.response.data.message);
        toast.error("error:" +err.response.data.message);
      })
  }

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>
            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 space-y-2">
              <label className="mr-10" htmlFor="email">Email</label>
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
              <label className="mr-3" htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: "Password is required" })}
              />
              <br/>
              {errors.password && <span className="text-sm text-red-600">{errors.password.message}</span>}
            </div>
            <div className="flex justify-around mt-6">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
              >
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}
