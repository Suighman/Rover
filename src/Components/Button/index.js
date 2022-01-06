import React from 'react'
import classes from './style.module.css'

const Button = props => (
    <button
        {...props}
        type={props.type ? props.type : "button"}
        className={`${classes.Button} ${props.className} p-3`}>
        {props.children}
    </button>
)

export default Button
