import { ClickButton } from './ClickButton';
import React from 'react'
import VideoPlayer from './VideoBackground'
import { motion as m } from 'framer-motion'

import { Watch, location } from './SvgIcons/SvgIcons'
import { BannerPlace } from './animation/animations';

export default function Banner() {
  return (
    <>
      <div className="wrapper h-screen overflow-hidden">
        <div className="absolute flex items-center h-screen w-screen justify-center">
          <div className="wrap">

            <div className="text text-white text-center ">
              <m.h1
                variants={BannerPlace}
                initial="hide"
                animate="show"
                transition={{ duration: 2.5, type: "spring", stiffness: 100 }}
                className='text-4xl md:text-6xl font-light mb-5 md:mb-6 '>
                A PLACE FOR YOU
              </m.h1>
              <div className="desc mb-8 text-md md:text-2xl"> Join us this weekend </div>
            </div>

            <div className="btn flex flex-col md:flex-row md:items-center  md:space-x-2 md:w-[500px] md:mx-auto z-50">
              <ClickButton icon={location} title='Find a location' href="/" style=" flex  items-center justify-center space-x-5 rounded-full bg-primary text-white py-2 px-2 text-center md:w-[70%] md:mx-auto md:py-4 md:px-5  md:space-x-0 md:text-sm cursor-pointer " />
              <ClickButton icon={Watch} title='Find a location' href="/" style=" flex  items-center justify-center space-x-5 rounded-full bg-primary text-white py-2 px-2 text-center mt-5 md:w-[70%] md:text-xl md:mx-auto md:mt-0 md:mx-auto md:py-4 md:px-5 md:space-x-0 md:text-sm" />
            </div>
          </div>
        </div>
        <VideoPlayer />
      </div>
    </>
  )
}
