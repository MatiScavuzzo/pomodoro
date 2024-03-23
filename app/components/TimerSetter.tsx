import { TbX } from "react-icons/tb";

export const TimerSetter = ({
  isSetting,
  focusMinutes,
  shortPauseMinutes,
  longPauseMinutes,
  handleFocusMinutes,
  handleShortPauseMinutes,
  handleLongPauseMinutes,
  handleClose,
}: {
  isSetting: boolean,
  focusMinutes: number[],
  shortPauseMinutes: number[],
  longPauseMinutes: number[],
  handleFocusMinutes: (arg0: number) => void,
  handleShortPauseMinutes: (arg0: number) => void,
  handleLongPauseMinutes: (arg0: number) => void,
  handleClose: () => void,
}) => {
  const focusMinutesHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    return handleFocusMinutes(parseInt(e.target.value));
  }

  const shortPauseMinutesHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    return handleShortPauseMinutes(parseInt(e.target.value));
  }

  const longPauseMinutesHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    return handleLongPauseMinutes(parseInt(e.target.value));
  }

  return (
    <section className={`${isSetting ? 'absolute top-1/5 sm:top-1/6 md:top-1/3 right-1/5 p-4 border border-slate-300 bg-black text-white w-2/3 md:w-3/4 rounded-2xl' : 'hidden'}`}>
      <div className='relative w-full p-4 grid grid-rows-3 sm:gap-2 sm:grid-cols-2 sm:grid-rows-2 md:grid-rows-1 md:grid-cols-3'>
        <button onClick={handleClose} className='absolute flex items-center justify-center rounded-full top-0 right-0 border border-slate-300 bg-white w-8 h-8 text-xl text-black'>
          <TbX />
        </button>
        <div className='flex flex-col items-center gap-2 justify-center'>
          <h3 className='text-xl'>Focus</h3>
          <select className="p-2 rounded-lg bg-white text-black" onChange={focusMinutesHandler} name="focus" id="focus">
            {focusMinutes.map((minute, index) => <option key={index} value={minute}>{minute} minutes</option>)}
          </select>
        </div>
        <div className='flex flex-col items-center gap-2 justify-center'>
          <h3 className='text-xl'>Short Pause</h3>
          <select className="p-2 rounded-lg bg-white text-black" onChange={shortPauseMinutesHandler} name="shortPause" id="shortPause">
            {shortPauseMinutes.map((minute, index) => <option key={index} value={minute}>{minute} minutes</option>)}
          </select>
        </div>
        <div className='flex flex-col sm:col-span-2 md:col-span-1 items-center gap-2 justify-center'>
          <h3 className='text-xl'>Long Pause</h3>
          <select className="p-2 rounded-lg bg-white text-black" onChange={longPauseMinutesHandler} name="longPause" id="longPause">
            {longPauseMinutes.map((minute, index) => <option key={index} value={minute}>{minute} minutes</option>)}
          </select>
        </div>
      </div>
    </section>
  )
}