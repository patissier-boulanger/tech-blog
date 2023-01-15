import { ReactNode } from 'react'

import siteMetadata, { github } from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'

import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { Icon } from './icon'

interface Props {
  children: ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3 font-serif text-base font-black"></div>
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <Link key={'Blog'} href={'/blog'} className="text-gray-900 dark:text-gray-100 sm:p-4">
              <Icon kind="blog" size={16} />
            </Link>
            <Link key={'About'} href={'/about'} className="text-gray-900 dark:text-gray-100 sm:p-4">
              <Icon kind="me" size={20} />
            </Link>
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
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
