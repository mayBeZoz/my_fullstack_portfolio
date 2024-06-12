import { isEven } from '@/utils/isEven';
import Link from 'next/link';
import React from 'react'

function NotFoundPage() {

    const chars = '40'.repeat(100).split('')
    

    return (
        <section className='w-full capitalize flex justify-center items-center relative h-screen'>
            <div className="pointer-events-none select-none gap-5 opacity-30 flex z-10 w-full h-full">
                {
                    Array(80).fill(0).map((_,index)=> {
                        
                        return(
                            <div 
                                style={{marginTop:isEven(index)?'-20px':'0px'}}
                                className='flex gap-3 flex-col' 
                                key={index}
                            >
                                {
                                    chars.map((char,idx) => (
                                        <div className='font-ivy-mode-regular text-2xl' key={idx}>
                                            {char}
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    })
                }
            </div>

            <div className='z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed flex flex-col items-center gap-10'>
                <h2 className='text-9xl font-ivy-mode-regular'>404</h2>
                <p className='font-robert text-lg'>damnit you re lost!</p>

                <Link href='/' className='white_button'>
                    go to home page
                </Link>
            </div>
        </section>
    )
}

export default NotFoundPage