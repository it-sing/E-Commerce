"use client";
import { Button } from "flowbite-react";
import { useState } from "react";
import { MdCancel } from "react-icons/md";
const LoginForm = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleToggleForm = () => {
    setIsLoginForm((prev) => !prev);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section>
      
      <div className="flex justify-center items-center h-screen">
        
        {/* Login and Registration Form */}
        <div id="formContainer" className="w-1/3 bg-white p-8 rounded-lg shadow-lg">
        <div className=" flex justify-end">
          <Button className=" bg-white  " href="http://localhost:3000/" >
            <MdCancel className=" text-black"/>
          </Button>
        </div>
          <div id="loginForm" className={`${isLoginForm ? "" : "hidden"}`}>
            <h2 className="text-2xl font-poppins font-bold mb-6">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 font-medium font-roboto">
                  Email
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-8">
                <label htmlFor="username" className="block text-gray-700 font-medium font-roboto">
                  Password
                </label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-500"
                  placeholder="Enter your password"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
              >
                Login
              </button>
            </form>
            <div className="mt-4 text-center">
              <span className="text-gray-600">Or</span>
              
              <button
                onClick={handleToggleForm}
                className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600"
              >
                Switch to Register
              </button>
            </div>
          </div>
          <div id="registerForm" className={`${isLoginForm ? "hidden" : ""}`}>
            <h2 className="text-2xl font-bold mb-6">Register</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 font-medium font-roboto">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-500"
                  placeholder="Enter your username"
                />
              </div>
            <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 font-medium font-roboto">
                  Email
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-8">
                <label htmlFor="username" className="block text-gray-700 font-medium font-roboto">
                  Password
                </label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-500"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-8">
                <label htmlFor="username" className="block text-gray-700 font-medium font-roboto">
                  Comfirm Password
                </label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-500"
                  placeholder="Enter your comfirm password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600"
              >
                Register
              </button>
            </form>
            <div className="mt-4 text-center">
              <span className="text-gray-600">Already have an account?</span>
              <button
                onClick={handleToggleForm}
                className="mt-2 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
              >
                Switch to Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
