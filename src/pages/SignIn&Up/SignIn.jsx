import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [inputType, setInputType] = useState("password");

    /* to toggle password input type */
    const togglePassword = () => {
      setShowPassword(!showPassword);
      setInputType(showPassword ? "password" : "text");
    };
    return (
      <div className="flex justify-center items-center min-h-screen dark:bg-gray-800 bg-slate-200">
        <div className="flex flex-col max-w-md md:w-9/12  p-6 rounded-md sm:p-10 dark:bg-gray-300 bg-slate-100 text-gray-900">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign In</h1>
            <p className="text-sm text-gray-400">
              Sign in to access your account
            </p>
          </div>
          <form
            /*   onSubmit={handleSignIn} */
            noValidate=""
            action=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  /* ref={emailRef} */
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 border rounded-md border-amber-500 focus:outline-none bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
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
            </div>

            <div>
              <button
                type="submit"
                className="bg-amber-500 w-full rounded-md py-3 text-white"
              >
                {/*  {loading ? (
                  <TbFidgetSpinner className="m-auto animate-spin" size={24} />
                ) : (
                  "Continue"
                )} */}
                Submit
              </button>
            </div>
          </form>
          <div className="space-y-1">
            <button
              /* onClick={handleRestPassword} */
              className="text-xs hover:underline hover:text-rose-500 text-gray-400"
            >
              Forgot password?
            </button>
          </div>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <div
            /* onClick={handleGoogleSignIn} */
            className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
          >
            <FcGoogle size={32} />

            <p>Continue with Google</p>
          </div>
          <p className="px-6 text-sm text-center text-gray-400">
            Don't have an account yet?{" "}
            <Link
              to="/signup"
              className="hover:underline hover:text-rose-500 text-gray-600"
            >
              Sign up
            </Link>
            .
          </p>
        </div>
      </div>
    );
};

export default SignIn;