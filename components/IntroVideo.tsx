import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function IntroVideo() {
  const [mounted, setMounted] = useState(false)

  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    console.log('video fetch started')
    fetch('http://localhost:3000/static/videos/introVideo_Dark.mp4').then((res) => {
      console.log(res, 'blob?')
    })
  }, [])

  return (
    <div className="min-h-[200px] flex-1">
      <div className="relative m-auto h-[350px] w-full sm:h-[600px] sm:w-[600px]">
        <button
          onClick={() => {
            fetch('http://localhost:3000/static/videos/introVideo_Dark.mp4').then((res) => {
              console.log(res, 'blob?')
            })
          }}
        ></button>
        {/* {mounted ? (
          resolvedTheme === 'light' ? (
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
        )} */}
      </div>
    </div>
  )
}
