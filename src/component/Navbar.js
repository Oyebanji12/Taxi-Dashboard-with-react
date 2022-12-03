import React from 'react'
import {BiSearch} from "react-icons/bi"
import "./navbar.css"

const Navbar = () => {
  return (
    <div>
        <div className='nav'>
            <div className='title'>
                <h4>Hi Biodun,</h4> 
                
                <h1>Welcome to my <span>Taxi Dashboard</span></h1>
            </div>

            <div className='search'>
                <BiSearch  className='icon-2'/>
                <input type="text" placeholder='search' />
            </div>
        </div>


    </div>
  )
}

export default Navbar