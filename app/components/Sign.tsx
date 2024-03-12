import Link from "next/link"
import { TbBrandGithubFilled } from "react-icons/tb"

export const Sign = () => {
  return (
    <section className='w-full flex items-center justify-center pt-2 sm:justify-end'>
      <span><TbBrandGithubFilled /></span><Link target="_blank" href={'https://github.com/MatiScavuzzo'}>MatiScavuzzo</Link>
    </section>
  )
}