import React from 'react'
import { Link } from 'react-router'


const Home = () => {
  return (
    <>
    <div className='h-screen bg-gray-200'>
    <div className="container">
        <button className='py-2 px-4 bg-sky-200 text-[16px] active:scale-[1.1] shadow-lg transition-all duration-[.3s] mt-[60px] text-black font-semibold rounded-sm'><Link to={'/users'}>New Users 👤</Link></button>

        <div className="row py-3 px-8 bg-slate-500 mt-[30px]">
          <div className="all_name font-medium flex justify-between items-center text-white text-[17px]">
            <h3>Name</h3>
            <h3>Email</h3>
            <h3>Gender</h3>
            <h3>Status</h3>
            <h3>Action</h3>
          </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Home