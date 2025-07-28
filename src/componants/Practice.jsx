import React, { useState } from 'react'

export const Practice = () => {
    const [num , setNaum] = useState(0);
    const increment = () => {
        setNaum(num+1)
    }
    const decrement = () => {
        if(num > 0){
            
            setNaum(num-1)
        }else {
            setNaum(0)
        }
    }
  return (
    <div>
        <button onClick={increment}>+</button>
        <span>{num}</span>
        <button onClick={decrement}>-</button>
    </div>
  )
}
