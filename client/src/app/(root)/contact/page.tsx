'use client'

import { useGetInfo } from '@/hooks/useGetInfo'

function Contact() {

    const {info,isLoading} = useGetInfo()

    return (
        <section>
            <div className="container mt-[200px] capitalize">
                <div className='w-full flex-col md:flex-row gap-10 lg:gap-16 md:gap-6 flex'>
                    <div className='w-full md:w-[65%]'>
                        <div className='text-7xl xs:text-8xl leading-[70px] sm:text-[7.5em] lg:text-9xl sm:leading-[150px] flex flex-col uppercase font-ivy-mode-regular'>
                            <div>get in</div>
                            <div className='w-fit mt-6 ml-auto'>touch!</div>
                        </div>
                        <a 
                            className='w-fit border-b text-2xl block border-white font-robert ml-auto mt-10 lowercase'
                            href={`mailto:${info?.contacts.email}`}
                        >
                            {info?.contacts.email}
                        </a>

                    </div>
                    <span className='w-full h-[1px] md:w-[2px] bg-white md:h-[400px] block'/>
                    <div className="w-full md:w-[35%] uppercase font-ivy-mode-regular text-5xl lg:text-6xl flex flex-col gap-10">
                        <a>linkedIn</a>
                        <a>github</a>
                        <a>whatsapp</a>
                        <a>facebook</a>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Contact