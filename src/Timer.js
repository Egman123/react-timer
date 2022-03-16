import React from 'react'
import {useState, useEffect} from "react"

function Timer() {
 
    const [count, setCount] = useState(0);
    const [min, setMin] = useState(0)
    const [hour, setHour] = useState(0)
    const [numberOn, setNumberOn] = useState(true)

    useEffect(() => {
       let interval = null;
       if(numberOn) {
           interval = setInterval(() => {
               setCount(prevCount => prevCount + 1)
               if(count === 60) {
                 setCount(0);
                 setMin(prevCount => prevCount + 1)
               }
           }, 1000)
       }else {
           clearInterval(interval)
       }
       return () => clearInterval(interval)
    }, [numberOn, count])

    const reset = () => {
        setCount(0);
        setNumberOn(false);
        setMin(0);

    }

    const dec = () => {
        if (count > 0) {
            setCount(prevCount => prevCount - 1)
        }
    }

  return (
    <div className='Timer'>
     
       
        {numberOn && <button onClick={ () => setNumberOn(false)}>Stop</button>}
         <button onClick={ reset}>reset</button>
        {!numberOn && <button onClick={() => setNumberOn(true)}>start</button>}
        <button onClick={dec}>-</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button> 
         <div className='Count'>{count}</div>
         <div className='Min'>:{min}</div>
         <div className='Hour'>:{hour}</div>
    </div>
  )
}

export default Timer
