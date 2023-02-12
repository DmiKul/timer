import React from 'react'
import './Button.scss'

export default function Button({text}) {
  return (
	<button className='button'>{text}</button>
  )
}
