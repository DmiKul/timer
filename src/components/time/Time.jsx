import React from 'react'
import './Time.scss'

export default function Time() {
	const time = {hours: 0, minutes: 0, seconds: 0}
	//todo: time formatting
	return (
	<div className='time'>
		<p className='time__value'>{time.hours}:</p>
		<p className='time__value'>{time.minutes}:</p>
		<p className='time__value'>{time.seconds}</p>
	</div>
  )
}
