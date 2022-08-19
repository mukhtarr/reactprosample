import React from 'react'
import propTypes from 'prop-types'

export default function CallbackButton(props) {

    let {theme, text} = props

  return (
    <div>
        <button
    className= {`btn btn-${theme}`}
    onClick = {props.callback}
    >
        {text}
    </button>
    </div>
  )
}

// Default value to PROPS

CallbackButton.defaultProps = {
    theme:'danger',
    text:'Default Button'
}

// Set Typecheck for PROPS
CallbackButton.propTypes = {
    theme: propTypes.string,
    text: propTypes.string,
    callback:propTypes.func,
}
