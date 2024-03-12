'use client'
import { useState } from "react";
import { Clock } from "./components/Clock";
import { PomodoroContainer } from "./components/PomodoroContainer";
import { FocusState } from "./components/FocusState";
import { Buttons } from "./components/Buttons";

export default function Home() {
  const [minutes, setMinutes] = useState<number>(25);
  const [seconds, setSeconds] = useState<number>(0);
  const [cicle, setCicle] = useState<number>(1);
  const [focusTime, setFocusTime] = useState<boolean>(false);
  const [shortPause, setShortPause] = useState<boolean>(false);
  const [longPause, setLongPause] = useState<boolean>(false);
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
    setFocusTime(false);
    setShortPause(false);
    setLongPause(false);
    setDisabledPlay(false);
    setDisabledPause(false);
    setIsPlaying(false);
  }


  return (
    <main className="flex min-h-screen flex-col items-center gap-2 justify-between p-24">
      <PomodoroContainer>
        <FocusState focusTime={focusTime} shortPause={shortPause} longPause={longPause} />
        <Clock minutes={minutes} seconds={seconds} />
        <Buttons
          play={play}
          pause={pause}
          reload={reload}
          disabledPlay={disabledPlay}
          disabledPause={disabledPause} />
      </PomodoroContainer>
    </main>
  );
}
