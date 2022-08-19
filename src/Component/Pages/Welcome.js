import React, { useEffect, useState } from 'react'

export default function Welcome() {

const [roleinfo, setroleinfo] = useState()

useEffect(()=>{
  let roleinfo =  sessionStorage.getItem('role')
  setroleinfo(roleinfo)
 
},[])

  return (
    <div className='container mt-4'>
        <div className='row'>
            <div className='col-md-12'>
                <h1>Welcome Page - {roleinfo} </h1>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
            </div>
        </div>
    </div>
  )
}
