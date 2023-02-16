import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'

import '@fontsource/inter/variable-full.css'

import { useEffect } from 'react'

import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import { Analytics } from '@vercel/analytics/react'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'

const env = process.env.NODE_ENV

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(
          function (registration) {
            if (env === 'development') {
              console.log('Service Worker registration successful with scope: ', registration.scope)
            }
          },
          function (err) {
            if (env === 'development') {
              console.log('Service Worker registration failed: ', err)
            }
          }
        )
      })
    }
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
