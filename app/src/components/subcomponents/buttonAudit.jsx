import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { createPortal } from 'react-dom'

const Button = ({ type, linkTo, text }) => {

  return (
    <>
        <a 
            className="solidgroup"
            target="_blank"
            href={linkTo}
        >
            {text}
        </a>
    </>
  )
}

export default Button