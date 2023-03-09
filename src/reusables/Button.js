import React from 'react'

const Button = (props) => {
    return (
        <button class="btn">{props.title} {props.icon}</button>
    )
}

export default Button