import { SiAcademia, SiGithub, SiMedium } from 'react-icons/si'
import { GrMail } from 'react-icons/gr'
import { BsPersonFill } from 'react-icons/bs'

type IconPropType = {
  size: 16 | 18 | 20 | 24
  kind: 'blog' | 'github' | 'medium' | 'mail' | 'me'
  color?: string
}

const Component = {
  blog: SiAcademia,
  github: SiGithub,
  medium: SiMedium,
  mail: GrMail,
  me: BsPersonFill,
}

export function Icon({ size, kind, color }: IconPropType) {
  const IconComponent = Component[kind]

  return (
    <div className={`text-${color}`}>
      <span className="sr-only">{kind}</span>
      <IconComponent size={size} />
    </div>
  )
}
