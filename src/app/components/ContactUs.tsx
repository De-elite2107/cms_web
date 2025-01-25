import React from 'react'
import Newsletter from './Newsletter'

export default function ContactUs() {
    return (
        <>
            <div>

                <section className=" bg-[url('/assets/map_black.jpeg')] bg-cover bg-no-repeat bg-top px-5 py-10 h-auto">
                    <h1 className='text-center my-10 text-white font-bold  text-2xl'>CONTACT US </h1>

                    <form action="" className=' flex flex-col md:flex-row'>
                        <div className='  md:w-[90%] md:mx-auto md:flex md:flex-col md:items-center'>
                            <div className=" md:grid md:grid-cols-2 md:gap-5 relative w-full md:w-[80%]">
                                <div className="flex  md:flex-1 flex-col justify-center space-y-5 relative">
                                    <input type="text" placeholder='YOUR NAME *' className='text-sm rounded-3xl p-4 hover:first-letter:border-red-300 border-2 outline-none  md:w-full' />
                                    <input type="email" placeholder=' YOUR EMAIL *' className='text-sm rounded-3xl p-4 hover:first-letter:border-red-300 border-2 outline-none' />
                                    <input type="text" placeholder=' SUBJECT*' className='text-sm rounded-3xl p-4 hover:first-letter:border-red-300 border-2 outline-none ' />
                                </div>
                                <textarea placeholder='YOUR MESSAGE' className='text-sm rounded-xl px-4 py-3 hover:first-letter:border-red-300 border-2 outline-none mt-5 md:mt-0 md:text-md lg:text-lg mx-auto w-full' rows={4} />
                            </div>

                            <button type='submit' className='self-center md:w-fit rounded-md bg-red-600 hover:bg-red/60  px-4 py-3 w-full mt-4 mb-5 md:text-white lg:px-10 hover:bg-red-800 md:font-light '>SEND MESSAGE</button>
                        </div>
                    </form>

                </section>




                {/* Adding newsletter component here  */}
                <Newsletter />
            </div>
        </>
    )
}
