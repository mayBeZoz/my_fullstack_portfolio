import { getCurrYear } from '@/utils/getCurrYear'
import React from 'react'

function Hero() {

    const description = 'zeyad tamer an egyptian developer is passionate in programing and web devlopment'
    return (
        <section className='h-screen capitalize pt-[100px]'>
            
            <div className="container justify-center relative flex flex-col h-full">
                <div className='lg:ml-10'>
                    <div className='w-fit flex flex-col'>
                        <p className='hero_title'>zeyad tamer</p>
                        <p className='hero_title'>a creative web</p>
                        <div className='flex-col-reverse sm:flex-row flex gap-5'>
                            <p className='sm:text-lg font-robert w-[230px] lg:w-[300px] sm:text-right mt-12'>{description}</p>
                            <p className='hero_title text-right italic'>developer</p>
                        </div>
                    </div>
                </div>

                <div className='absolute font-robert font-thin w-full bottom-2 flex justify-between items-end'>
                    <p className='xs:block hidden text-sm'>{`all rights © reserved ${getCurrYear()}`}</p>
                    <p className='xs:block hidden text-sm'>based in egypt, cairo</p>
                </div>
            </div>

        </section>
    )
}

export default Hero