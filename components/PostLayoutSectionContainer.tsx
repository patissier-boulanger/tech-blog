import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PostLayoutSectionContainer({ children }: Props) {
  return <div className="mx-auto my-10 max-w-3xl sm:px-6 xl:max-w-3xl">{children}</div>
}
