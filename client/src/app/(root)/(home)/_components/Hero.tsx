import { getCurrYear } from '@/utils/getCurrYear'
import React from 'react'

function Hero() {

    const description = '* zeyad tamer an egyptian developer is passionate in programing and web devlopment'
    return (
        <section className='h-screen capitalize pt-[200px]'>
            
            <div className="container relative flex flex-col h-full">
                <div className='ml-10'>
                    <div className=' w-fit flex flex-col'>
                        <p className='hero_title'>a creative</p>
                        <p className='hero_title'>frontend web</p>
                        <div className='flex gap-5'>
                            <p className='text-xl font-robert w-[250px] text-right mt-12'>{description}</p>
                            <p className='hero_title italic'>developer</p>
                        </div>
                    </div>
                </div>


                <div className='absolute font-robert font-thin w-full bottom-2 flex justify-between items-end'>
                    <p className='text-sm'>{`all rights © reserved ${getCurrYear()}`}</p>
                    <p className='text-lg'>based in egypt, cairo</p>
                </div>
            </div>

        </section>
    )
}

export default Hero