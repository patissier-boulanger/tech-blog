import { ReactNode } from 'react'

import siteMetadata from '@/data/siteMetadata'

import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import ThemeSwitch from './ThemeSwitch'
import { Icon } from './icon'

interface Props {
  children: ReactNode
}

/**
 * NOTE
 * 차후에 blog 글이 늘어날 경우 링크 추가
 */
const LayoutWrapper = ({ children }: Props) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex flex-col justify-between py-10 sm:flex-row sm:items-center">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex flex-col items-start justify-between">
                <div className="mr-3 font-serif text-base font-bold text-gray-800 dark:text-gray-400">
                  정주형의 블로그
                </div>
                <address>
                  <a
                    className="font-serif text-gray-500 dark:text-gray-400"
                    rel="author noreferrer"
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=juhyoung.jung1992@gmail.com"
                    target="_blank"
                  >
                    Write Dev Articles
                  </a>
                </address>
              </div>
            </Link>
          </div>
          <div className="flex items-center space-x-4 text-base leading-5 sm:space-x-0">
            {/* <Link key={'Blog'} href={'/blog'} className="text-gray-900 dark:text-gray-100 sm:p-4">
              <Icon kind="blog" size={16} />
            </Link>
            <Link key={'About'} href={'/about'} className="text-gray-900 dark:text-gray-100 sm:p-4">
              <Icon kind="me" size={20} />
            </Link> */}
            <a
              className="text-gray-900 dark:text-gray-100 sm:p-4"
              rel="author noreferrer"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=juhyoung.jung1992@gmail.com"
              target="_blank"
            >
              <Icon kind="mail" size={20} />
            </a>
            <a
              className="text-gray-900 dark:text-gray-100 sm:p-4"
              target="_blank"
              rel="noopener noreferrer"
              href={'https://www.naver.com'}
            >
              <Icon kind="github" size={20} />
            </a>
            <a
              className="text-gray-900 dark:text-gray-100 sm:p-4"
              target="_blank"
              rel="noopener noreferrer"
              href={'https://www.naver.com'}
            >
              <Icon kind="medium" size={20} />
            </a>
            <ThemeSwitch />
            {/* <MobileNav /> */}
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
