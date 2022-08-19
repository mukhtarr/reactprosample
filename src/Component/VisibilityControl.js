import React from 'react'

export default function VisibilityControl(props) {
  return (
    <div>
         <input
           type="checkbox"
           checked={props.isChecked}
           onChange={event=>props.callback(event.target.checked)} //props.callback(true)
         />
         <label>
             Show {props.description}
         </label>

    </div>
  )
}
