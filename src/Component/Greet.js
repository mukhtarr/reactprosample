import React from 'react'

export default function Greet({name, age, address}) {

    //Destructure props object
    // let {name, age, address} = props
  return (
    <div>
       Welcome Mr. {name} , you are {age} years old , your address is {address}
    </div>
  )
}
