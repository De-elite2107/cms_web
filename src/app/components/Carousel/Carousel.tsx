import React from 'react'
import Image from 'next/legacy/image'
import { left } from '../SvgIcons/SvgIcons'

const imageData = [
    {
        title: ' First',
        imgSrc: '/assets/img1.jpg'
    },
    {
        title: ' Second',
        imgSrc: '/assets/img2.jpg'
    },
]



export default function Carousel() {



    const [current, setCurrent] = React.useState(0)

    const swipleft = () => {
        const isFirst = current === 0;
        const newIndex = isFirst ? imageData.length - 1 : current - 1;
        setCurrent(newIndex)
    }
    const swipRight = () => {
        const isFirst = current === 0;
        const newIndex = isFirst ? imageData.length - 1 : current - 1;
        setCurrent(newIndex)
    }

    // React.useEffect(() => {
    // setInterval(() => {
    /*  const isFirst = current === 0;
     const newIndex = isFirst ? imageData.length - 1 : current - 1;
     setCurrent(newIndex) */
    // }, 3000)
    // }, [current, setCurrent])


    return (
        <>
            <section className=' overflow-hidden mb-10' >
                <div className=" h-[400px] md:w-[600px] mx-auto  imgWrapper  relative min:h-full  md:m-auto rounded-lg  bg-red-200">
                    <div className='relative h-full rounded-lg overflow-hidden shadow-2xl'>
                        <Image
                            key={current}
                            src={imageData[current].imgSrc}
                            alt=" image 1"
                            layout="fill"
                            objectFit='cover'
                            objectPosition="center"
                        />

                        <span className='text-xl cursor-pointer absolute z-10 top-1/2 bg-white/90 rounded-full ml-2' onClick={swipleft}>{left}</span>
                        <span className='text-xl cursor-pointer absolute z-10 top-1/2 bg-white/90 rounded-full mr-2 right-0 rotate-180' onClick={swipRight}>{left}</span>

                        {/* navigator */}
                        <div className="navigatio absolute bottom-5 flex justify-center space-x-2 w-full">
                            {imageData.map((img, index) => (
                                <div key={index}
                                    onClick={swipleft}
                                    className={`${index == current ? ' bg-white h-1 w-5 ' : ' bg-white/70 h-1 w-5'} `}></div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
