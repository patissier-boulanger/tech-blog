import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function IntroVideo() {
  const [mounted, setMounted] = useState(false)

  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-[200px] flex-1">
      <div className="relative m-auto h-[600px] w-[600px]">
        {mounted ? (
          <video
            className="absolute object-contain"
            src={
              theme === 'light'
                ? '/static/videos/introVideo_Light.mp4'
                : '/static/videos/introVideo_Dark.mp4'
            }
            autoPlay={true}
            muted={true}
            loop={true}
            controls={false}
            preload="auto"
          ></video>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}
