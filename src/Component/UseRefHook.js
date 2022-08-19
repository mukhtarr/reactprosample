import React, { useEffect, useRef } from 'react'

export default function UseRefHook() {
 
  const inputRef = useRef()  
  useEffect(()=>{
    console.log(inputRef.current)
    inputRef.current.focus()

  },[])  
  return (
    <div>
        <input
           type="text"
           placeholder="type something"
           ref={inputRef}
        />
    </div>
  )
}
