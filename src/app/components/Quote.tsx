import React from 'react'
export default function Quote() {
  return (
    <>
      <div className="container mx-auto py-10 text-center  md:py-14 relative -z-50 md:w-3/4">
        <h2 className='mb-5 md:text-3xl font-bold'> WELCOME TO THE CHURCH</h2>

        <div className="welcomeMessage px-5 flex flex-col ">
          <span className='text-4xl font-bold text-gray-500 md:text-6xl self-start '>
            &quot;
          </span>
          <p className='text-xs md:text-lg '>
            God has given us a mandate to raise role models, and He has indeed been faithful, backing our dedication and hard work with a great harvest of transformed lives. It is top priority for us that you partake of wholesome worship, edifying messages to build you up and positive interactions. We invite you to tour our website and get to know us a bit better - our service times, locations and membership. There are also links should you wish to support our ministry by giving. We look forward to having the pleasure of hosting you and your family soon, either in person at one of our campuses or virtually.
            In Christ, <b>Sam & Nike Adeyemi.</b>
          </p>
          <span className='text-4xl font-bold text-gray-500 md:text-6xl self-end '>
            &quot;
          </span>

        </div>

      </div>
    </>
  )
}
