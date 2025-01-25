import React, { lazy } from 'react'


const Cards = lazy(() => import('./CardsComponents'))

export default function HopeCards() {
  return (
    <>
      <div className="wrapper  relative z-0">
        <div className="Container px-5">

          <div className="top text-center">
            <h1 className='text-lg md:text-lg lg:text-xl font-bold mb-3'>HOPE FOR TODAY</h1>
            <p className=' italic font-light text-gray-500'>Inspiring resources to become a better you.</p>
          </div>
          <div className="CardWrapper grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 mt-5">
            <Cards imgSrc="/assets/img1.jpg" text="Get Inspired:Message Series" alt=" Get inspired" mainStyle="flex flex-col bg-white overflow-hidden shadow-md" topStyle='' btmStyle=' py-4  px-2 ' textStyle='text-md text-red-700 md:text-lg lg:text-xl' />
            <Cards imgSrc="/assets/img2.jpg" text="Get Inspired:Message Series" alt=" Get inspired" mainStyle="flex flex-col bg-white overflow-hidden shadow-md" topStyle='' btmStyle=' py-4  px-2 ' textStyle='text-md text-red-700 md:text-lg lg:text-xl' />
            <Cards imgSrc="/assets/img3.jpg" text="Get Inspired:Message Series" alt=" Get inspired" mainStyle="flex flex-col bg-white overflow-hidden shadow-md" topStyle='' btmStyle=' py-4  px-2 ' textStyle='text-md text-red-700 md:text-lg lg:text-xl' />
            <Cards imgSrc="/assets/img4.jpg" text="Get Inspired:Message Series" alt=" Get inspired" mainStyle="flex flex-col bg-white overflow-hidden shadow-md" topStyle='' btmStyle=' py-4  px-2 ' textStyle='text-md text-red-700 md:text-lg lg:text-xl' />
          </div>
        </div>
      </div>
    </>
  )
}
