import { useState } from 'react'

const VideoPlayer = () => {
  

  return (
    <div className='vBackground'>
      <video 
         src="./assets/churchVideo.mp4" 
         className="h-screen w-screen object-cover"
         loop
         autoPlay
         muted
      />
    </div>
  )
}

export default VideoPlayer
