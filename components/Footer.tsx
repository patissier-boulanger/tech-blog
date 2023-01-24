import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 mb-5 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
        </div>
        <div className="mb-2 flex flex-col items-center justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400 sm:flex-row">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <div>Copyright by Juhyoung JUNG. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
