import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PostLayoutSectionContainer({ children }: Props) {
  return <div className="mx-auto my-10 max-w-3xl px-4 sm:px-6 xl:max-w-3xl xl:px-0">{children}</div>
}
