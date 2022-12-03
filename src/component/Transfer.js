import React from 'react'
import "./transfer.css"
import avatarimage from "../component/aa.jpg"
import {AiOutlineArrowRight} from "react-icons/ai"

const Transfer = () => {
    const transactions=[
        {
            image: avatarimage,
            name: "kashi vasna",
            time: 'Today 19:34',
            amount: '$76',
        },
        {
            image: avatarimage,
            name: "Joyce Fashek",
            time: 'Yesterday 8:14',
            amount: '$56',
        },
        // {
        //     image: avatarimage,
        //     name: "Henry wells",
        //     time: 'Today 22:12',
        //     amount: '$76',
        // },
    ]
  return (
    <div>
        <div className='transfer-wrapper'>
            <div className='title'>
                <h2>Your transfer</h2>
            </div>
            
                {transactions.map((transaction, i)=>{
                    return(
                        <div key={i}>
                            <div className='transaction'>
                                <div className='transaction-title-image'>
                                <img src={transaction.image} alt="" className='img' />
                                </div>
                                <div className='transaction-title-details'>
                                    <h3>{transaction.name}</h3>
                                    <h5>{transaction.time}</h5>
                                    <span>{transaction.amount}</span>
                                    
                                </div>
                            </div>
                        </div>
                    )
                })}

            
            <a href="" className='view'>
            View all <AiOutlineArrowRight />
        </a>

        </div>
    </div>
  )
}

export default Transfer