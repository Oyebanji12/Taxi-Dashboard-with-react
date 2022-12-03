import React from 'react'
import "./faq.css"
import {AiOutlineArrowRight} from "react-icons/ai"
import {BsFillCalendarDayFill} from "react-icons/bs"
import {MdTimelapse} from "react-icons/md"
import {IoMdCash} from "react-icons/io"


const FAQ = () => {
    const faqs=[
        {icon: <BsFillCalendarDayFill />,
         text: "How to manage time and get good mark for trip",
        },
        {icon: <MdTimelapse />,
         text: "How to regulate transaction overtime",
        },
        {icon: <IoMdCash />,
         text: "Withdrawing money through ATM",

        },
    ]
  return (
    
    <div>
        
        <div className='faq-wrapper'>
            <div className='title'>
                <h2>Information for drivers</h2>
            </div>
            <div className='faq'>
            {faqs.map((faq, i)=>{
                return(
                    <div className='faq-item' key={i}>
                    <div className='info'>
                        {faq.icon}
                       <h4>{faq.text}</h4>  
                    </div>
                    
                    <AiOutlineArrowRight />
                    </div>
                )
            })}

        </div>
        </div>
    </div>
  )
}

export default FAQ