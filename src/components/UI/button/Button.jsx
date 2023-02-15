import React from 'react'
import './Button.scss'

export default function Button({text, ...props}) {
  return (
	<button className='button' {...props}>{text}</button>
  )
}
