import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 text-sm font-medium uppercase text-primary-400 hover:text-primary-300 dark:hover:text-primary-400">
        #{text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
