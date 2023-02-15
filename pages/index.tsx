import { GetStaticProps, InferGetStaticPropsType } from 'next'

import { IntroArticleLists } from '@/components/article'
import { IntroVideo } from '@/components/IntroVideo'
import Pagination from '@/components/Pagination'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { PostFrontMatter } from 'types/PostFrontMatter'
import { POSTS_PER_PAGE } from '@/constants/constants'

export const getStaticProps: GetStaticProps<{
  posts: PostFrontMatter[]
  pagination: { currentPage: number; totalPages: number }
}> = async () => {
  const posts = await getAllFilesFrontMatter('blog')
  const pageNumber = 1
  const displayPosts = posts.slice(POSTS_PER_PAGE * (pageNumber - 1), POSTS_PER_PAGE * pageNumber)

  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { posts: displayPosts, pagination } }
}

export default function Home({
  posts,
  pagination,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <IntroVideo />
      <div className="mt-7 flex items-center">
        <h2 className="mr-2 pb-4 font-sans text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Articles
        </h2>
        <div className="h-0.5 flex-1 bg-gray-300"></div>
      </div>
      <IntroArticleLists posts={posts} />
      <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
    </>
  )
}
