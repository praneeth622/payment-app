import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log('Form submitted:', formData);
  };
  return (
  <div className="flex justify-center items-center h-screen mx-3 ">
  <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-12 pt-6 pb-6 mb-4">
    <div className="mb-4 font-bold text-black-700 text-2xl text-center"> SignUp Page </div>
    <div className="text-slate-500 text-md pt-1 px-4 pb-4">
    Please Enter Required Information to Sign Up
    </div>
    <div className="mb-6 w-80">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
        First Name
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="firstName"
        type="text"
        placeholder="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
    </div>
    <div className="mb-4 ">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
        Last Name
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="lastName"
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        Email
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="email"
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
        type="password"
        placeholder="********"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
    </div>
    <div className="flex items-center justify-between">
    <button
        className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        type="submit"
    >
        Sign Up
    </button>
    </div>
    <div className="py-2 text-sm flex justify-center">
      <div>
        Alerady registered ?, 
      </div>
      <Link className="pointer underline pl-1 cursor-pointer" to='/signin'>
        Sign In
      </Link>
    </div>

  </form>
  </div>
)
}

export default Signup