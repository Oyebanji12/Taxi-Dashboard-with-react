import React from 'react'
import {AiOutlineCalendar} from "react-icons/ai"
import {BsFillBarChartLineFill} from "react-icons/bs"
import {BiGroup} from "react-icons/bi"
import {FiActivity} from "react-icons/fi"
import "./analytic.css"

const Analytic = () => {
  return (
    <div>
    <div className='analytic-wrapper'>
        <div className='analytic'>
            <div className='content'>
                <h5>Spent this month</h5>
                <h2>$682.5</h2>
            </div>
            <div className='logo'>
                <BsFillBarChartLineFill />
            </div>
        </div>

        <div className='analytic'>
            <div className='logo'>
            <FiActivity />
            </div>
            <div className='content'>
                <h5>Earning</h5>
                <h2>$432.8</h2>
            </div>
        </div>

        <div className='analytic'>
            <div className='logo'>
                <BiGroup />
            </div>
            <div className='content'>
                <h5>New client</h5>
                <h2>$321</h2>
            </div>
        </div>

        <div className='analytic'>
            <div className='logo'>
                <AiOutlineCalendar />
            </div>
            <div className='content'>
                <h5>Activity</h5>
                <h2>$652</h2>
            </div>
        </div>


    </div>
    </div>
  )
}

export default Analytic