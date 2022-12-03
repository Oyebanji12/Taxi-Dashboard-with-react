import React from 'react'
import "./profile.css"
import image from "../component/bb.jpg"
import {CiLocationOn} from "react-icons/ci"

const Profile = () => {
  return (
    <div>
        <div className='profile-wrapper'>
            <div className='image'>
                <img src={image} alt=""  className='img'/>
            </div>
            <div className='title'>
                <h2>THomas Patey</h2>
                <span><CiLocationOn /> New York, USA </span> 
            </div>
            <div className='info'>
                <div className='container'>
                    <h5>Days at work</h5>
                    <h3>28</h3>
                </div>
                <div className='container'>
                    <h4>Rides</h4>
                    <h3>423</h3>
                </div>
                <div className='container'>
                    <h5>Hours</h5>
                    <h3>73</h3>
                </div>

            </div>

        </div>


    </div>
  )
}

export default Profile