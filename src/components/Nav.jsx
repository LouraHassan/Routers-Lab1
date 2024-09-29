import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar bg-[#4F29B7] text-white">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-4 shadow text-black">
            <Link to='/info' className='my-4 font-semibold'>Info Page</Link>
            <Link to='/login' className='my-4 font-semibold'>SignUp Page</Link>
        </ul>
      </div>
      <a className="btn btn-ghost text-xl">JS Bootcamp</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      <Link to='/info' className='mx-4'>Info Page</Link>
      <Link to='/login' className='mx-4'>SignUp Page</Link>
      </ul>
    </div>
    <div className="navbar-end">
    </div>
  </div>
  )
}

export default Nav
