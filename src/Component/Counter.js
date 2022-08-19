import React, { useState } from 'react'

export default function Counter() {

    const incrementCounter = ()=> {
      setcount(count+1)
    }

    const incrementFive = () => {
      setcount(count+5)
    }

   const result = useState()
   console.log(result)

    const [count, setcount] = useState(5)

  return (
    <div>
        <hr/>
        Count: {count}
        <hr/>
        <button className='btn btn-danger' onClick={incrementCounter}>INC by 1</button> 
        <hr/>
        <button className='btn btn-warning' onClick={incrementFive}>INC by 5</button>
        <hr/>
    </div>
  )
}
