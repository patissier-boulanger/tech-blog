import { IntroArticleLists } from '@/components/article'
import { IntroVideo } from '@/components/IntroVideo'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PostFrontMatter } from 'types/PostFrontMatter'

export const getStaticProps: GetStaticProps<{ posts: PostFrontMatter[] }> = async () => {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <IntroVideo />
      <div className="mt-7 flex items-center">
        <h2 className="mr-2 pb-4 font-sans text-5xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Articles
        </h2>
        <div className="h-0.5 flex-1 bg-gray-300"></div>
      </div>
      <IntroArticleLists posts={posts} />
    </>
  )
}
