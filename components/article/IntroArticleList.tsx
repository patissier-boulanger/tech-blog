import Link from '@/components/Link'
import formatDate from '@/lib/utils/formatDate'
import Tag from '@/components/Tag'
import { PostFrontMatter } from 'types/PostFrontMatter'

type IntroArticleListsProp = {
  posts: PostFrontMatter[]
}

export function IntroArticleLists({ posts }: IntroArticleListsProp) {
  /**
   * tailwind wordBreak 옵션은 3.2.0부터 추가되었습니다.
   * https://github.com/tailwindlabs/tailwindcss/releases/tag/v3.2.0
   */
  return (
    <>
      <ul>
        {!posts.length && 'No posts found.'}
        <div className="xl:grid xl:auto-rows-auto xl:grid-cols-2 xl:items-baseline xl:gap-8 xl:gap-y-6 xl:space-y-0">
          {posts.slice().map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="flex h-full w-full flex-col py-12">
                <article className="flex min-h-[14rem] flex-1 flex-col">
                  <Link href={`/blog/${slug}`} className="text-gray-800 dark:text-gray-100">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5">
                      <div>
                        <h2
                          className="min-h-[3rem] font-serif text-3xl font-bold leading-11 tracking-tight line-clamp-2 xl:min-h-[5.5rem]"
                          style={{ wordBreak: 'keep-all' }}
                        >
                          {title}
                        </h2>
                      </div>
                      <div className="prose max-w-none font-serif text-gray-800 line-clamp-4 dark:text-gray-300">
                        {summary}
                      </div>
                    </div>
                  </Link>
                </article>

                <div className="mt-12 flex flex-wrap">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              </li>
            )
          })}
        </div>
      </ul>
    </>
  )
}
