import React, { useState } from 'react'
import HOCDemo from './HOCDemo'

 function ClickCounter({incrementCount,count,message}) {
   
  return (
    <div>

        <button onClick={incrementCount}>Increment {count} times {message} </button>
    </div>
  )
}

export default HOCDemo(ClickCounter)
