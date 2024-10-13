import React from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import { useState } from 'react'

function Counter() {
    const [CounterOn, setCounterOn] = useState(false);
  return (
    <div className="counter-section">
 
        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>

            <div className='counter-container'>
            <div className='counter-One'>
            <h1 className='counter-number'> 
           {CounterOn && <CountUp start={0} end ={24} duration={1} delay={0}/> }+ 
             </h1>
            <p className='counter-text'> Courses Offered </p>            
            </div>
            <div className='counter-Two'>
            <h1 className='counter-number'> 
            {CounterOn && <CountUp start={0} end ={500} duration={1} delay={0}/> }+ 
             </h1>
            <p className='counter-text'>Students</p>            
            </div>
            <div className='counter-Two'>
            <h1 className='counter-number'> 
            {CounterOn && <CountUp start={0} end ={90} duration={1} delay={0}/> }+ 
             </h1>
            <p className='counter-text'>Camp Sessions</p>            
            </div>
            <div className='counter-Three'>
            <h1 className='counter-number'> 
            {CounterOn && <CountUp start={0} end ={300} duration={1} delay={0}/> }+ 
            </h1>
            <p className='counter-text'> Team Projects</p> 
            </div>
        </div>
           
   </ScrollTrigger>   </div>
  )
}

export default Counter