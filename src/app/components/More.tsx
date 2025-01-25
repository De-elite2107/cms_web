import React from 'react'
import { ClickButton } from './ClickButton'
import { Watch } from './SvgIcons/SvgIcons'
import Image from 'next/legacy/image'

import CardsComponents from './CardsComponents'
import Link from 'next/link'


const MoreSection2Data = [
    {
        imgSrc: '/assets/img1.jpg',
        title: 'Services',
        desc: ' The best place to start connecting with God at Daystar is in our Services.',
        hrefTitle: ' Service Time',
        href: '#',
        alt: 'first '

    },
    {
        imgSrc: '/assets/img4.jpg',
        title: 'Services',
        desc: ' The best place to start connecting with God at Daystar is in our Services.',
        hrefTitle: ' Service Time',
        href: '#',
        alt: 'second '

    },
    {
        imgSrc: '/assets/img4.jpg',
        title: 'Services',
        desc: ' The best place to start connecting with God at Daystar is in our Services.',
        hrefTitle: ' Service Time',
        href: '#',
        alt: 'third '

    },
    {
        imgSrc: '/assets/img4.jpg',
        title: 'Services',
        desc: ' The best place to start connecting with God at Daystar is in our Services.',
        hrefTitle: ' Service Time',
        href: '#',
        alt: 'forth '

    },
]
export default function More() {
    return (
        <>
            <section className='px-5 py-20'>
                {/* More info */}
                <div className='h-[300px] flex-col  flex items-center  md:flex-row'>
                    <div className="wrap flex flex-col justify-center  md:w-[500px] md:mx-auto md:flex md:flex-row items-center h-full">
                        <h1 className=' self-end md:self-center '> logo </h1>
                        <ClickButton icon={Watch} title='Click for more information ' href="/" style="flex  items-center justify-center space-x-2 rounded-full bg-white hover:bg-white/90 text-black/80 py-3 px-3 text-center mt-5  md:w-[80%] md:text-xl md:mx-auto md:mt-0 md:mx-auto md:py-4 md:px-5 md:space-x-0 md:text-sm" />
                    </div>
                </div>

                {/* What Gof can do through you   */}
                <div className="mt-20 px-5 grid grid-cols-1 gap-5 md:grid-cols-4" >
                    {
                        MoreSection2Data.map((data, index) => (
                            <>
                                <div className="wrap relative flex flex-col justify-center  " key={index}>
                                    <div className="relative rounded-full overflow-hidden shadow-2xl lg:h-40 lg:w-40 lg:self-center">
                                        <Image
                                            src={data.imgSrc}
                                            alt={data.alt}
                                            height={100}
                                            width={100}
                                            layout="responsive"
                                            objectFit='cover'
                                            objectPosition="center"
                                        />
                                    </div>

                                    <div className="text-center">
                                        <h1 className="my-4 font-bold text-lg md:text-xl">{data.title}</h1>
                                        <p className="my-4">{data.desc}</p>
                                        <Link href={data.href} className="text-red-400 hover:underline hover:font-bold hover:scale-105 hover:text-red-700 ">{data.hrefTitle}</Link>
                                    </div>
                                </div >
                            </>
                        ))
                    }
                </div>
            </section >
        </>
    )
}
