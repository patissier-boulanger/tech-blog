import { IntroVideo } from '@/components/IntroVideo'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PostFrontMatter } from 'types/PostFrontMatter'

import Image from 'next/image'

const MAX_DISPLAY = 5

export const getStaticProps: GetStaticProps<{ posts: PostFrontMatter[] }> = async () => {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <IntroVideo />
      <div className="mb-12 space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="mb-7 font-sans text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          안녕하세요!
        </h1>
        <p className="font-serif text-lg leading-7 text-gray-500 dark:text-gray-400">
          프론트엔드 개발자 정주형의 개인 블로그입니다. 웹과 앱을 다룹니다. 개발중에 생각나는 모든
          주제를 다룹니다.
          <br />
          제가 관심 있는 키워드는 다음과 같습니다. 기술의 대중화, 개발자와 사용자 경험,
          자동화입니다.
          <br />
          열심히 놀고 열심히 일합니다.
        </p>
      </div>
      <h2 className="mb-7 font-sans text-5xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        Overview
      </h2>
      <div className="mb-24 grid w-full grid-cols-2 grid-rows-3 gap-6">
        <div className="row-span-3">
          <article>
            <div className="relative aspect-[1.6/1] w-full">
              <Image
                layout="fill"
                src={'https://picsum.photos/600'}
                alt="Pinned photo picture"
                objectFit="cover"
              />
            </div>
            <div className="mt-7 space-y-4">
              <dl>
                <dd className="text-base font-medium leading-6 text-gray-400 dark:text-gray-400">
                  published on 2022년 1월 3일
                </dd>
              </dl>
              <h2 className="font-serif text-3xl font-black leading-10 tracking-tight">
                한글한글 아름답게 컴포넌트를 아름답게 쓰고 있나요?
              </h2>
              <p className="prose max-w-none font-serif text-gray-500 dark:text-gray-400 ">
                산야에 그들의 하는 바로 투명하되 싶이 천자만홍이 쓸쓸하랴? 이상의 피가 사라지지
                같이, 쓸쓸한 보라. 노년에게서 오직 꾸며 인간이 뿐이다. 시들어 인생에 너의 같은
                원질이 듣는다. 인생의 옷을 우리 무엇을 크고 무한한 관현악이며, 있는가? 곧 그들은
                불어 운다.
              </p>
            </div>
          </article>
        </div>

        <div className="flex">
          <div className="relative h-full w-2/6">
            <article>
              <Image
                layout="fill"
                src={'https://picsum.photos/600'}
                alt="Pinned photo picture"
                objectFit="cover"
              />
            </article>
          </div>
          <div className="w-4/6 space-y-4 px-4">
            <h2 className="font-serif text-3xl font-black leading-10 tracking-tight">
              한글한글 아름답게 컴포넌트를 아름답게 쓰고 있나요?
            </h2>
            <dl>
              <dd className="flex flex-1 font-medium text-gray-400 dark:text-gray-400">
                published on 2022년 1월 3일 111
              </dd>
            </dl>
          </div>
        </div>

        <div className="flex">
          <div className="relative h-full w-2/6">
            <article>
              <Image
                layout="fill"
                src={'https://picsum.photos/600'}
                alt="Pinned photo picture"
                objectFit="cover"
              />
            </article>
          </div>
          <div className="w-4/6 space-y-4 px-4">
            <dl>
              <dd className="text-base font-medium text-gray-400 dark:text-gray-400">
                published on 2022년 1월 3일
              </dd>
            </dl>
            <h2 className="font-serif text-3xl font-black leading-10 tracking-tight">
              한글한글 아름답게 컴포넌트를 아름답게 쓰고 있나요?
            </h2>
          </div>
        </div>

        <div className="flex">
          <div className="relative h-full w-2/6">
            <article>
              <Image
                layout="fill"
                src={'https://picsum.photos/600'}
                alt="Pinned photo picture"
                objectFit="cover"
              />
            </article>
          </div>
          <div className="w-4/6 space-y-4 px-4">
            <dl>
              <dd className="text-base font-medium text-gray-400 dark:text-gray-400">
                published on 2022년 1월 3일
              </dd>
            </dl>
            <h2 className="font-serif text-3xl font-black leading-10 tracking-tight">
              한글한글 아름답게 컴포넌트를 아름답게 쓰고 있나요?
            </h2>
          </div>
        </div>
      </div>

      <h2 className="mb-7 font-sans text-5xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        최신 글
      </h2>
      <ul className="divide-y divide-onSurface-light dark:divide-gray-700">
        {!posts.length && 'No posts found.'}
        {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
          const { slug, date, title, summary, tags } = frontMatter
          return (
            <li key={slug} className="py-12">
              <article>
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{formatDate(date)}</time>
                    </dd>
                  </dl>
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <div>
                        <h2 className="font-serif text-3xl font-black leading-10 tracking-tight">
                          <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                            {title} 한글한글 아름답게 컴포넌트를 아름답게 쓰고 있나요?
                          </Link>
                        </h2>
                        <div className="flex flex-wrap">
                          {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                      </div>
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                        {summary}
                      </div>
                    </div>
                    <div className="text-base font-medium leading-6">
                      <Link
                        href={`/blog/${slug}`}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Read "${title}"`}
                      >
                        Read more &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          )
        })}
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
