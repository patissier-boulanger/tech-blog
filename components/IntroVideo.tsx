export function IntroVideo() {
  return (
    <div className="min-h-[200px] flex-1">
      <video
        className="m-auto w-[600px]"
        src="/static/videos/introVideo_Light.mp4"
        autoPlay={true}
        muted={true}
        loop={true}
        controls={false}
        preload="auto"
      ></video>
    </div>
  )
}
