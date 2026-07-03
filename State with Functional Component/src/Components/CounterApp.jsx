import React, { useState } from 'react'

const CounterApp = () => {

    // let count=0

     const [count,setCount]=useState(0)

     function returnState()
     {
        return 100;
     }

     let [sample,setSample]=useState(returnState)

    function handleIncrease()
    {
        
        // console.log(count);
        setCount((prevCount) => prevCount+1);
        setCount((prevCount) => prevCount+1);
        setCount((prevCount) => prevCount+1);
        
    }
    function handleDecrease()
    {
        
        setCount((prevCount)=>{return prevCount-1});
        setCount((prevCount)=>{return prevCount-1});
        setCount((prevCount)=>{return prevCount-1});
        // console.log(count);
        
    }
  return (
    <div>
        <h1>Counter Application -{count} -{sample}</h1>
        <button onClick={handleIncrease}> ++ Increase</button>
        <button onClick={handleDecrease}> Decrease --</button>
    </div>
  )
}

export default CounterApp