import React from 'react'

const Button = (props) => {
    return (
        <button class="btn" role="button">{props.title} {props.icon}</button>
    )
}

export default Button