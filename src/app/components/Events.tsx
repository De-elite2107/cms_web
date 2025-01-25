import React from 'react'
import Carousel from './Carousel/Carousel'

export default function Events() {
    return (
        <>
            <section className='Container px-5'>
                <h1 className="my-8 font-bold text-2xl ml-20 "> Event ..</h1>

                <div className="Carousel-ShowCase">
                    <Carousel />
                </div>
            </section>
        </>
    )
}
