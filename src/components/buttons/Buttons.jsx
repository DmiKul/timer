import React from 'react'
import Button from '../UI/button/Button'
import './Buttons.scss'

export default function Buttons() {
  return (
	<div className="buttons">
		<Button text='Start'></Button>
		<Button text='Stop'></Button>
		<Button text='Reset'></Button>
	</div>
  )
}
