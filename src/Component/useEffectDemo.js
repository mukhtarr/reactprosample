import React, { useEffect, useState } from 'react'

export default function UseEffectDemo() {
  const [name,setName] = useState()
  const [count,setCount] = useState(0)

  useEffect(()=>{
      console.log('UseEffect demo')
      document.title = `You clicked ${count} times`

  },[count])  
  return (
    <div>
        <input type="text" onChange={event=>setName(event.target.value)}/>
        <button onClick={()=> setCount(prevCount=> prevCount+1)}>Click {count} times</button>
    </div>
  )
}
