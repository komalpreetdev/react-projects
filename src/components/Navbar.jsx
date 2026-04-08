import React from 'react'
import logo from '../assets/logo.png'
import { Nav } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { FaCartShopping } from 'react-icons/fa6'

const Navbar = () => {
    return (
        <div className='bg-black'>
        <div className='container-fluid m-auto'>
            <ul className='p-2 Navbar flex items-center justify-between navbar mb-0 px-4'>
                <div className='flex-1 pt-2'>
                    <Link to="/"><img src={logo} className='w-50' /></Link>
                </div>

                <div>
                    <Nav className='flex item-center'>
                        <NavLink to='/'><li className='px-2'>Home</li></NavLink>
                    </Nav>
                </div>

                <div  className='flex-1 text-right'>

                    <input type="text" placeholder='Search' className='bg-gray-700 p-1 rounded-xl text-white pl-2 mr-5'/>
                    <button className='py-1 px-2 default-bg text-white rounded-xl px-4 cursor-pointer'>Login</button>
                    <button className='ml-5 '><FaCartShopping className='text-white text-2xl relative top-1'/></button>
                </div>
            </ul>
        </div>
        </div>
    )
}

export default Navbar
