import React from 'react'

type HereButton = {
    title: string
}



const HereButton = ({ title }: HereButton) => {
    return (
        <a type='button' className='cursor-mouse px-6 py-2 border-2 border-[#9024ce]'>{title}</a>
    )
}



export default function Vision() {
    return (
        <>
            <section className=" py-20 ">
                {/* Vision  */}
                <div className="mb-20 vision flex flex-col  space-y-10 justify-center items-center ">
                    <HereButton title='OUR VISION' />

                    <p className='font-light text-xs md:text-sm text-gray-400 text-center w-[80%]'>Daystar Christian Centre was established on the firm foundation of God’s word given to His servants, Sam & Nike Adeyemi in November 18, 1995, to empower individuals to discover, develop, release and maximize our potentials in God through the word. By the grace of God, Daystar Christian Centre remains committed to executing this mandate through weekly worship gatherings and community outreaches; and God stays faithful to supporting the ministry by a steady increase in our numbers and impact.
                        There is a community for everyone who comes, irrespective of whatever stage of life you are in, there are opportunities to serve and be served, alongside a dedicated team of God’s servants to guide you in your spiritual journey.</p>
                    <div className='divider h-1 w-[100px] bg-[#9024ce] '></div>
                </div>
                {/* Mission  */}

                <div className=" mb-20 mission flex flex-col  space-y-10 justify-center items-center ">
                    <HereButton title='OUR MISSION' />

                    <p className='font-light text-xs md:text-sm text-gray-400 text-center w-[80%]'>Daystar Christian Centre was established on the firm foundation of God’s word given to His servants, Sam & Nike Adeyemi in November 18, 1995, to empower individuals to discover, develop, release and maximize our potentials in God through the word. By the grace of God, Daystar Christian Centre remains committed to executing this mandate through weekly worship gatherings and community outreaches; and God stays faithful to supporting the ministry by a steady increase in our numbers and impact.
                        There is a community for everyone who comes, irrespective of whatever stage of life you are in, there are opportunities to serve and be served, alongside a dedicated team of God’s servants to guide you in your spiritual journey.</p>
                    <div className='divider h-1 w-[100px] bg-[#9024ce] '></div>
                </div>
                {/* Core Values */}
                <div className=" mb-20 CoreValues flex flex-col  space-y-10 justify-center items-center ">
                    <HereButton title='CORE VALUES' />

                    <p className='font-light text-xs md:text-sm text-gray-400 text-center w-[80%]'>Daystar Christian Centre was established on the firm foundation of God’s word given to His servants, Sam & Nike Adeyemi in November 18, 1995, to empower individuals to discover, develop, release and maximize our potentials in God through the word. By the grace of God, Daystar Christian Centre remains committed to executing this mandate through weekly worship gatherings and community outreaches; and God stays faithful to supporting the ministry by a steady increase in our numbers and impact.
                        There is a community for everyone who comes, irrespective of whatever stage of life you are in, there are opportunities to serve and be served, alongside a dedicated team of God’s servants to guide you in your spiritual journey.</p>
                </div>

                //TODO: Leaving this f
                {/* History */}
                {/* Pastor section */}
            </section>
        </>
    )
}
