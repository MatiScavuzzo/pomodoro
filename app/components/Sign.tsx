import { TbBrandGithubFilled } from "react-icons/tb"

export const Sign = ({
  srcGitHub = 'https://github.com/MatiScavuzzo',
  username = 'MatiScavuzzo'
}: {
  srcGitHub?: string,
  username?: string,
}) => {
  return (
    <section className='flex items-center justify-center w-full pt-2 sm:justify-end'>
      <span><TbBrandGithubFilled /></span><a target="_blank" href={srcGitHub}>{username}</a>
    </section>
  )
}