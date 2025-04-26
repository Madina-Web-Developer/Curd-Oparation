import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router'

const Layoutone = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Layoutone