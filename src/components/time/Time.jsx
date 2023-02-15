import React, { useEffect, useState } from 'react'
import './Time.scss'

export default function Time() {
	// const[hours, setHours] = useState(0)
	// const[minutes, setMinutes] = useState(0)
	// const[seconds, setSeconds] = useState(0)
	const [seconds, setSeconds] = useState(0)
	const [time, setTime] = useState({secs: 0, mins: 0, hours: 0})
 
	useEffect(() => {
		const interval = setInterval(() => setSeconds(prev => prev + 1), 1000)
		return () => clearInterval(interval)
	}, [])

	const formatTime = (time) => {
		if (time < 10) {
			return '0' + time
		}
		return time
	}

	useEffect( () => {
		console.log(seconds)
		setTime({
			hours:formatTime(Math.floor(seconds / 3600)),
			mins: formatTime(Math.floor(seconds / 60 % 60)),
			secs: formatTime(seconds % 60),
		})
	}, [seconds])

	return (
	<div className='time'>
		<p className='time__value'>{time.hours}:</p>
		<p className='time__value'>{time.mins}:</p>
		<p className='time__value'>{time.secs}</p>
	</div>
  )
}

