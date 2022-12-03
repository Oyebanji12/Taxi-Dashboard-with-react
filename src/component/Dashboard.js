import React from 'react'
import Analytic from './Analytic'
import Earning from './Earning'
import FAQ from './FAQ'
import Navbar from './Navbar'
import Profile from './Profile'
import Transfer from './Transfer'
import "./dashboard.css"

const Dashboard = () => {
  return (
    <div>
        <div className='dashboard'>
        <Navbar />
        <div className='grid'>
            <div className='row-one'>
                <Analytic />
                <FAQ />
            </div>
            <div className='row-two'>
                <Earning />
                <Transfer />
                <Profile />
            </div>

        </div>

    </div>
    </div>
  )
}

export default Dashboard