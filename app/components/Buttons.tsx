import { TbPlayerPause, TbPlayerPlay, TbReload } from "react-icons/tb"

export const Buttons = ({
  play,
  pause,
  reload,
  disabledPlay,
  disabledPause
}: {
  play: () => void,
  pause: () => void,
  reload: () => void,
  disabledPlay: boolean,
  disabledPause: boolean,
}) => {
  return (
    <section className="w-full grid grid-cols-3 gap-2">
      <button onClick={pause} disabled={disabledPause} className="text-3xl p-1 border border-slate-300 rounded-2xl"><TbPlayerPause className="w-full" /></button>
      <button onClick={play} disabled={disabledPlay} className="text-3xl p-1 border border-slate-300 rounded-2xl"><TbPlayerPlay className="w-full" /></button>
      <button onClick={reload} className="text-3xl p-1 border border-slate-300 rounded-2xl"><TbReload className="w-full" /></button>
    </section>
  )
}