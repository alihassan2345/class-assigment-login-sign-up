import React from 'react';
import Link from 'next/link';

function Signup() {
  return (
    <div className="bg-gray-800 h-screen flex justify-center items-center">
      <div className="bg-white w-96 p-6 rounded-2xl shadow-lg">
        <h1 className="text-center font-bold text-3xl text-teal-600">Sign Up</h1>
        <div className="mt-5">
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="FirstName" className="block text-base mb-2 text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="FirstName"
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 rounded-md"
                placeholder="Enter First Name"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="LastName" className="block text-base mb-2 text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="LastName"
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 rounded-md"
                placeholder="Enter Last Name"
              />
            </div>
          </div>
          <div className="mt-3">
            <label htmlFor="Username" className="block text-base mb-2 text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="Username"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 rounded-md"
              placeholder="Enter Username"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="Email" className="block text-base mb-2 text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="Email"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 rounded-md"
              placeholder="Enter Email"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="Password" className="block text-base mb-2 text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="Password"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 rounded-md"
              placeholder="Enter Password"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="confirmPassword" className="block text-base mb-2 text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 rounded-md"
              placeholder="Confirm Password"
            />
          </div>
          <div className="mt-5">
            <button className="bg-teal-600 w-full text-white text-center py-2 rounded-md shadow-lg border-2 border-teal-600 hover:bg-white hover:text-teal-600 transition-all">
              Sign Up
            </button>
          </div>
          <div className="mt-3">
            <h1 className="text-center text-gray-500">
              Already have an account?{' '}
              <Link
                className="text-teal-600 font-semibold text-sm hover:underline hover:decoration-teal-600"
                href="/"
              >
                Log In
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
