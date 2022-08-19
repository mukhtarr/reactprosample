import React, { useState } from 'react'

export default function HOCDemo(OriginalComponent) {
   
    function NewComponent(props){
        const [count ,setCount] = useState(0)

        const incrementCount = ()=>{
               setCount(prevCount=> prevCount + 1)
        }

        return <OriginalComponent {...props} count={count} incrementCount={incrementCount}/>
    }
    return NewComponent

}
