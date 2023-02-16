import { useTheme } from 'next-themes'
import { useEffect, useRef, useState } from 'react'

export function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement>()

  const [mounted, setMounted] = useState(false)

  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) {
      return
    }

    if (resolvedTheme === 'dark') {
      fetch('http://localhost:3000/static/videos/introVideo_Dark.mp4')
        .then((response) => response.blob())
        .then((blob) => {
          videoRef.current.src = URL.createObjectURL(blob)
          videoRef.current.play()
        })
    } else {
      fetch('http://localhost:3000/static/videos/introVideo_Light.mp4')
        .then((response) => response.blob())
        .then((blob) => {
          videoRef.current.src = URL.createObjectURL(blob)
          videoRef.current.play()
        })
    }
  }, [mounted, resolvedTheme])

  return (
    <div className="min-h-[200px] flex-1">
      <div className="relative m-auto h-[350px] w-full sm:h-[600px] sm:w-[600px]">
        <video
          ref={videoRef}
          className="absolute object-contain"
          autoPlay={true}
          muted={true}
          loop={true}
          controls={false}
          playsInline={true}
        ></video>
      </div>
    </div>
  )
}
