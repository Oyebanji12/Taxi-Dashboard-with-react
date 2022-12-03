import React from 'react'
import "./earning.css"
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';



const Earning = () => {
    const data = [
        {name: 'Page A',
         uv: 400,
         pv: 2400,
         amt: 2400,
        },
        {name: 'Page B',
        uv: 500,
        pv: 3400,
        amt: 3400,
       },
       {name: 'Page C',
       uv: 600,
       pv: 5400,
       amt: 5400,
      },
      {name: 'Page D',
      uv: 800,
      pv: 7400,
      amt: 7400,
     },
    ];


   

  return (
    <div>
        <div className='earning-wrapper'>
        <LineChart width={350} height={300} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
        
</div>
    </div>
  )
}

export default Earning