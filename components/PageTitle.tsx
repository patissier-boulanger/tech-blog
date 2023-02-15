import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageTitle({ children }: Props) {
  /**
   * tailwind wordBreak 옵션은 3.2.0부터 추가되었습니다.
   * https://github.com/tailwindlabs/tailwindcss/releases/tag/v3.2.0
   */
  return (
    <h1
      style={{ wordBreak: 'keep-all' }}
      className="font-sans text-4xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14"
    >
      {children}
    </h1>
  )
}
