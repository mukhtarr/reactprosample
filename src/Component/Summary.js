import React from 'react'
import CallbackButton from './CallbackButton'

export default function Summary(props) {

    let {index,name} = props

  return (
    <>
    <td>{index+1}</td>
    <td>{name}</td>
    <td>
       
        <CallbackButton
        theme= 'primary'
        text='Promote'
        callback={()=> props.promoteCallback(name)}
        >
        </CallbackButton>

        <CallbackButton
        theme= {45}
        text= {true}
        callback={()=> props.promoteCallback(name)}
        >
        </CallbackButton>
    </td>
    </>
  )
}
