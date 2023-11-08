import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";

const SignUp = () => {
    const [showPassword,setShowPassword] = useState(false);
    const [inputType,setInputType] = useState('password');

    /* to toggle password input type */
    const togglePassword=()=>{
        setShowPassword(!showPassword);
        setInputType(showPassword ? 'password':'text')
    }

    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();
    return (
      <div className="flex justify-center items-center min-h-screen bg-slate-200 dark:bg-gray-800 py-8">
        <div className="flex flex-col max-w-md md:w-9/12 p-6 rounded-md sm:p-10 bg-slate-100 dark:bg-slate-300 text-gray-900">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          </div>
          <form
            /* onSubmit={handleCreateUser} */
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name"
                  className="w-full px-3 py-2 border rounded-md border-amber-500 focus:outline-none bg-gray-200 text-gray-900"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Enter Your Email"
                  className="w-full px-3 py-2 border rounded-md border-amber-500 focus:outline-none bg-gray-200 text-gray-900"
                />
              </div>

              <div className="relative">
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                    Password
                  </label>
                </div>
                <input
                  type={inputType}
                  name="password"
                  id="password"
                  required
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-amber-500 focus:outline-none bg-gray-200 text-gray-900"
                />
                <div
                  className="absolute top-1/2 right-3 transform translate-y-1 cursor-pointer"
                  onClick={togglePassword}
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </div>
              </div>

              <div className="relative">
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                    Confirm Password
                  </label>
                </div>
                <input
                  type={inputType}
                  name="confirmpassword"
                  id="confirmpassword"
                  required
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-amber-500 focus:outline-none bg-gray-200 text-gray-900"
                />
                <div
                  className="absolute top-1/2 right-3 transform translate-y-1 cursor-pointer"
                  onClick={togglePassword}
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </div>
              </div>
              <div>
                <label htmlFor="gender" className="block text-sm mb-2">
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  {...register("gender")}
                  className="w-full px-3 py-2 border rounded-md border-amber-500 focus:outline-none bg-gray-200 text-gray-900"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Enter Your Address"
                  className="w-full px-3 py-2 border rounded-md border-amber-500 focus:outline-none bg-gray-200 text-gray-900"
                />
              </div>
              <div>
                <label htmlFor="image" className="block mb-2 text-sm">
                  Select Image:
                </label>
                <input
                  required
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="bg-amber-500 w-full rounded-md py-3 text-white"
              >
                {/* {loading ? (
                  <TbFidgetSpinner className="m-auto animate-spin" size={24} />
                ) : (
                  "Continue"
                )} */}
                Sign Up
              </button>
            </div>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Signup with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <div
            /*  onClick={handleGoogleSignIn} */
            className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
          >
            <FcGoogle size={32} />

            <p>Continue with Google</p>
          </div>
          <p className="px-6 text-sm text-center text-gray-400">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="hover:underline hover:text-rose-500 text-gray-600"
            >
              Login
            </Link>
            .
          </p>
        </div>
      </div>
    );
};

export default SignUp;