import React, { useEffect, useState } from 'react'
import Button from '../UI/button/Button'
import './Timer.scss'

export default function Timer() {
	const [isTimerWorking, setIsTimerWorking] = useState(false)
	const [reset, setReset] = useState(false)
	const [time, setTime] = useState({secs: 0, mins: 0, hours: 0})
	const [seconds, setSeconds] = useState(0)

	if (reset) {
		setIsTimerWorking(false)
		setSeconds(0)
		setReset(false)
	}
	
	useEffect(() => {
		if (isTimerWorking) {
			const interval = setInterval(() => setSeconds(prev => prev + 1), 1000)
			return () => clearInterval(interval)
		}
	}, [isTimerWorking])

	const formatTime = (time) => {
		if (time < 10) {
			return '0' + time
		}
		return time
	}

	useEffect( () => {
		setTime({
			hours: formatTime(Math.floor(seconds / 3600)),
			mins: formatTime(Math.floor(seconds / 60 % 60)),
			secs: formatTime(seconds % 60),
		})
	}, [seconds])

	return (
		<div className="timer">
			<div className='time'>
				<p className='time__value'>{time.hours}:</p>
				<p className='time__value'>{time.mins}:</p>
				<p className='time__value'>{time.secs}</p>
			</div>
			<div className="buttons">
				<Button 
					text='Start' 
					onClick={() => setIsTimerWorking(true)}
				></Button>
				<Button 
					text='Stop' 
					onClick={() => setIsTimerWorking(false)}
				></Button>
				<Button 
					text='Reset'
					onClick={() => setReset(true)}
				></Button>
			</div>
		</div>
  )
}

