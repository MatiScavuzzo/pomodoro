export const FocusState = ({
  focusTime, shortPause, longPause
}: {
  focusTime: boolean,
  shortPause: boolean,
  longPause: boolean,
}) => {
  return (
    <section className='w-full grid grid-rows-3 gap-2 sm:grid-cols-3 sm:grid-rows-1'>
      <div className={`${focusTime ? 'bg-black text-slate-300' : ''} border text-center font-bold border-slate-300 rounded-2xl w-full p-2`}>Focus Time</div>
      <div className={`${shortPause ? 'bg-black text-slate-300' : ''} border text-center font-bold border-slate-300 rounded-2xl w-full p-2`}>Short Pause</div>
      <div className={`${longPause ? 'bg-black text-slate-300' : ''} border text-center font-bold border-slate-300 rounded-2xl w-full p-2`}>Long Pause</div>
    </section>
  )
}