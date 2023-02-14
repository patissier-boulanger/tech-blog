import Link from '@/components/Link'
import { Icon } from './icon'

interface Props {
  totalPages: number
  currentPage: number
}

export default function Pagination({ totalPages, currentPage }: Props) {
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="m-auto w-2/5 space-y-2 pt-10 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-30" disabled={!prevPage}>
            <Icon kind="arrowLeft" size={20} />
          </button>
        )}
        {prevPage && (
          <Link href={currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}`}>
            <Icon kind="arrowLeft" size={20} />
          </Link>
        )}
        <span className="text-gray-700 dark:text-gray-400">
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            <Icon kind="arrowRight" size={20} />
          </button>
        )}
        {nextPage && (
          <Link className="text-gray-700" href={`/blog/page/${currentPage + 1}`}>
            <Icon kind="arrowRight" size={20} />
          </Link>
        )}
      </nav>
    </div>
  )
}
