'use client'

import { useEffect, useState } from "react"

export const Clock = () => {
  const [minutes, setMinutes] = useState<number>(0)
  const [seconds, setSeconds] = useState<number>(0)
  const [playing, setPlaying] = useState<boolean>(false)
  const [cicle, setCicle] = useState<number>(1)
  const [pause, setPause] = useState<boolean>(false)

  useEffect(() => {
   if (playing) {
    const timerCicle = setTimeout(() => {
      if (seconds === 59) {
        setMinutes((prevMinutes) => prevMinutes + 1)
        setSeconds(0)
      } else {
        setSeconds((prevSeconds) => prevSeconds + 1)
      }
    }, 10);
      if (minutes === 25) {
        if (cicle === 4) {
          setCicle(1)
        } else {
          setCicle((prevCicle) => prevCicle + 1)
        }
        setPause(true)
        setPlaying(false)
        setMinutes(0)
        setSeconds(0)
        clearTimeout(timerCicle)
      }
      return () => clearTimeout(timerCicle)
   } else {
      const timerPause = setTimeout(() => {
        if (seconds === 59) {
          setMinutes((prevMinutes) => prevMinutes + 1)
          setSeconds(0)
        } else {
          setSeconds((prevSeconds) => prevSeconds + 1)
        }
      }, 1000);
      if (cicle === 4) {
        if (minutes === 10) {
          setPause(false)
          setPlaying(false)
          setMinutes(0)
          setSeconds(0)
          clearTimeout(timerPause)
        } else if (minutes === 5) {
          setPause(false)
          setPlaying(false)
          setMinutes(0)
          setSeconds(0)
          clearTimeout(timerPause)
        }
      }
      return () => clearTimeout(timerPause)
   }
  }, [seconds, minutes, playing, pause, cicle])
  return (
    <section className='flex flex-col items-center w-full p-2 justify-center text-black text-lg font-bold'>
      <div className='grid grid-cols-3 px-2 w-full gap-2'>
        <p className="flex items-center justify-center">{minutes < 10 ? `0${minutes}` : minutes}</p>
        <p className="flex items-center justify-center">:</p>
        <p className="flex items-center justify-center">{seconds < 10 ? `0${seconds}` : seconds}</p>
      </div>
      <button onClick={() => setPlaying(!playing)} className='bg-blue-500 p-2 rounded-md'>{playing ? 'Pause' : 'Play'}</button>
    </section>
  )
}