'use client'
import { useEffect, useState } from 'react';
import { FocusState } from './FocusState';
import { Clock } from './Clock';
import { Buttons } from './Buttons';
import { Sign } from './Sign';

export const PomodoroContainer = ({
  srcGitHub = 'https://github.com/MatiScavuzzo',
  username = 'MatiScavuzzo'
}: {
  srcGitHub?: string,
  username?: string,
}) => {
  const [focusTime, setFocusTime] = useState<boolean>(true);
  const [shortPause, setShortPause] = useState<boolean>(false);
  const [longPause, setLongPause] = useState<boolean>(false);
  const [minutes, setMinutes] = useState<number>(25);
  const [seconds, setSeconds] = useState<number>(0);
  const [cicle, setCicle] = useState<number>(1);
  const [disabledPlay, setDisabledPlay] = useState<boolean>(false);
  const [disabledPause, setDisabledPause] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const play = () => {
    setIsPlaying(true);
    setDisabledPlay(true);
  }
  const pause = () => {
    setIsPlaying(false);
    setDisabledPause(true);
    setDisabledPlay(false);
  }
  const reload = () => {
    setMinutes(25);
    setSeconds(0);
    setCicle(1);
    setFocusTime(true);
    setShortPause(false);
    setLongPause(false);
    setDisabledPlay(false);
    setDisabledPause(false);
    setIsPlaying(false);
  }

  const handleFocusTime = () => {
    const timer = setTimeout(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else if (minutes > 0) {
        setMinutes((prevMinutes) => prevMinutes - 1);
        setSeconds(59);
      }
    }, 1000);
    if (minutes === 0 && seconds === 0) {
      clearTimeout(timer);
      setFocusTime(false);
      setIsPlaying(false);
      setDisabledPlay(false);
      if (cicle % 4 === 0) {
        setLongPause(true);
        setCicle(1);
        setMinutes(15);
      } else {
        setShortPause(true);
        setCicle((prevCicle) => prevCicle + 1);
        setMinutes(5);
      }
    }
  }

  const handlePauseTime = () => {
    const timer = setTimeout(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else if (minutes > 0) {
        setMinutes((prevMinutes) => prevMinutes - 1);
        setSeconds(59);
      }
    }, 1000);
    if (minutes === 0 && seconds === 0) {
      clearTimeout(timer);
      setFocusTime(true);
      setIsPlaying(false);
      setDisabledPlay(false);
      if (shortPause) {
        setShortPause(false);
      } else {
        setLongPause(false);
      }
      setMinutes(25);
    }
  }

  useEffect(() => {
    if (isPlaying && focusTime) {
      handleFocusTime();
    } else if (isPlaying && !focusTime) {
      handlePauseTime();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying, seconds, minutes, focusTime])
  return (
    <main className="flex flex-col items-center justify-between h-auto gap-2 p-4 sm:p-24">
      <div className='flex flex-col items-center w-full px-6 pt-6 pb-2 text-black bg-white rounded-2xl justify'>
        <FocusState focusTime={focusTime} shortPause={shortPause} longPause={longPause} />
        <Clock minutes={minutes} seconds={seconds} />
        <Buttons
          play={play}
          pause={pause}
          reload={reload}
          disabledPlay={disabledPlay}
          disabledPause={disabledPause} />
        <Sign srcGitHub={srcGitHub} username={username} />
      </div>
    </main>
  )
}