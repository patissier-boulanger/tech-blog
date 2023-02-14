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
      <div className="relative m-auto h-[350px] w-full sm:h-[600px] sm:w-[600px]">
        {mounted ? (
          theme === 'light' ? (
            <video
              className="absolute object-contain"
              src={'/static/videos/introVideo_Light.mp4'}
              autoPlay={true}
              muted={true}
              loop={true}
              controls={false}
              playsInline={true}
            ></video>
          ) : (
            <video
              className="absolute object-contain"
              src={'/static/videos/introVideo_Dark.mp4'}
              autoPlay={true}
              muted={true}
              loop={true}
              controls={false}
              playsInline={true}
            ></video>
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}
