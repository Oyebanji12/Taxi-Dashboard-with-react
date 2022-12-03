import React from 'react'
import { useEffect, useState } from 'react'
import {FaAddressBook, FaTaxi} from "react-icons/fa"
import {MdDashboard, MdSpaceDashboard} from "react-icons/md"
import {GiTwirlCenter} from "react-icons/gi"
import {BsFillChatRightDotsFill} from "react-icons/bs"
import {AiOutlineSetting} from "react-icons/ai"
import {FiLogOut} from "react-icons/fi"
import {GiHamburgerMenu} from "react-icons/gi"
import {VscChromeClose} from "react-icons/vsc"
import "./sidebar.css"



const Sidebar = () => {
    
  return (
    <>
    <div className='section'>
        <div className='top'>
            <div className='brand'>
                <FaTaxi  className='icon-1'/>
                <span className='taxi'>My Taxi</span>
            </div>
            <div className='toggle'>
                
            </div>
            <div className='links'>
                <ul>
                    <li>
                    <a href="#"><MdDashboard />
                    <span>Dashboard</span>
                    </a> 
                    </li>
                    <li>
                    <a href="#"><MdSpaceDashboard />
                    <span>Riders</span>
                    </a> 
                    </li>
                    <li>
                    <a href="#"><FaAddressBook />
                    <span>Payment Details</span>
                    </a> 
                    </li>
                    <li>
                    <a href="#"><AiOutlineSetting />
                    <span>Setting</span>
                    </a> 
                    </li>
                    <li>
                    <a href="#"><GiTwirlCenter />
                    <span>Learning Center</span>
                    </a> 
                    </li>
                    <li>
                    <a href="#"><BsFillChatRightDotsFill />
                    <span>FAQs</span>
                    </a> 
                    </li>
                </ul>
            </div>
        </div>
        <div className='logout'>
            <a href="#">
                <FiLogOut />
                <span className=''>Logout</span>
            </a>

        </div>
    </div>
    

    
    </>
  )
}



export default Sidebar