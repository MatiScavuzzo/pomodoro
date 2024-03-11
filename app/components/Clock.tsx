export const Clock = ({ minutes, seconds }: { minutes: number, seconds: number }) => {
  return (
    <section className='flex flex-col items-center w-4/5 sm:w-1/2 p-2 justify-center text-black text-5xl sm:text-8xl font-bold'>
      <div className='grid grid-cols-3 px-2 w-full gap-2'>
        <p className="flex items-center justify-center">{minutes < 10 ? `0${minutes}` : minutes}</p>
        <p className="flex items-center justify-center">:</p>
        <p className="flex items-center justify-center">{seconds < 10 ? `0${seconds}` : seconds}</p>
      </div>
    </section>
  )
}