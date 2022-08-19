import React, { useState } from 'react'
import HOCDemo from './HOCDemo'

 function HoverCounter({incrementCount,count,message}) {
 
  return (
    <div>

        <button onClick={incrementCount}>Increment {count } times {message} </button>
    </div>
  )
}

export default HOCDemo(HoverCounter)
