import React from 'react'
import { Link } from 'react-router'


const Userspage = () => {
  return (
   <>
 
    <div className='h-screen bg-gray-100'>
        <button className='py-2 px-5 ml-[80px] bg-yellow-100 text-[16px] shadow-lg active:scale-[1.1] transition-all duration-[.3s] mt-[60px] text-black font-semibold rounded-sm'><Link to={'/'}> ⬅️ All Users</Link></button>

        <div className="container">
        <div className="box text-center mt-[30px]">
            <h1 className='text-black text-[22px] font-semibold'>New User</h1>   
            <h2 className='text-gray-400 font-semibold'>Use the below form to create a new account</h2>
        </div>
        <div className="inputs_filds ml-40 mr-40 mt-[50px]">
            <div className="name">
                <h4 className='text-green-800 font-semibold mb-[4px] text-[20px]'>Name</h4>
                <input className='w-full p-2 rounded-md bg-gray-200 border-[1px] border-gray-400' type="text" placeholder='Type your name' />
            </div>
            <div className="name mt-[20px]">
                <h4 className='text-green-800 font-semibold mb-[4px] text-[20px]'>Email</h4>
                <input className='w-full p-2 rounded-md bg-gray-200 border-[1px] border-gray-400' type="text" placeholder='@email' />
            </div>
        </div>
        </div>
    </div>
   
    </>
   
  )
}

export default Userspage