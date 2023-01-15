import Link from '@/components/Link'
import formatDate from '@/lib/utils/formatDate'
import Tag from '@/components/Tag'
import { PostFrontMatter } from 'types/PostFrontMatter'

const MAX_DISPLAY = 7

type IntroArticleListsProp = {
  posts: PostFrontMatter[]
}

export function IntroArticleLists({ posts }: IntroArticleListsProp) {
  return (
    <>
      <ul>
        {!posts.length && 'No posts found.'}
        <div className="xl:grid xl:auto-rows-auto xl:grid-cols-2 xl:items-baseline xl:gap-8 xl:gap-y-6 xl:space-y-0">
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="flex h-full w-full flex-col py-12">
                <article className="flex min-h-[14rem] flex-1 flex-col">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{formatDate(date)}</time>
                    </dd>
                  </dl>
                  <div className="space-y-5">
                    <div>
                      <h2 className="min-h-[3rem] font-serif text-3xl font-black leading-10 tracking-tight line-clamp-2">
                        <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                          {title}
                        </Link>
                      </h2>
                    </div>
                    <div className="prose max-w-none font-serif text-gray-800 line-clamp-4 dark:text-gray-700 ">
                      {summary}
                    </div>
                  </div>
                </article>

                <div className="flex flex-wrap">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              </li>
            )
          })}
        </div>
      </ul>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primaryVariant-light hover:text-primary-600 dark:text-primaryVariant-dark dark:hover:text-primary-400"
            aria-label="all posts"
          >
            더 보기
          </Link>
        </div>
      )}
    </>
  )
}
