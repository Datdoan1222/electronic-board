import React from 'react'
import './Button.scss'

export const Button = ({ children, ...props }) => {
    return (
        <button type='submit' className='button' {...props}>
            {children}
        </button>
    )
}

export const ButtonAdd = ({ children, ...props }) => {
    return (
        <button type='submit' className='btn-add' {...props}>
            {children}
        </button>
    )
}


export const ButtonLogout = ({ children, ...props }) => {
    return (
        <button className='btn-logout' {...props}>
            {children}
        </button>
    )
}

