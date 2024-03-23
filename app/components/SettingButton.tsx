import { TbSettingsFilled } from "react-icons/tb"

export const SettingButton = ({
  handleOpen,
}: {
  handleOpen: () => void,
}) => {
  return (
    <button onClick={handleOpen} className='flex items-center justify-center border border-slate-300 rounded-full w-8 h-8 text-xl text-black'>
      <TbSettingsFilled />
    </button>
  )
}