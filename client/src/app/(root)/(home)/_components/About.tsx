'use client'
import Image from '@/components/root/Image'
import { infoId } from '@/constants'
import { useGetInfo } from '@/hooks/useGetInfo'
import { BASE_URL, infosRoute } from '@/services/api'
import React from 'react'

function About() {
    const {info} = useGetInfo()
    console.log(info);
    
    return (
        <section className='w-full mt-32'>
            <div className='flex container gap-10'>
                <div className='h-[450px] w-[400px]'>
                    <Image 
                        className='grayscale w-full h-full bg-white/25' 
                        src={`${BASE_URL}${infosRoute}/${infoId}/upload-image`}
                    />
                </div>

                <div className='flex flex-1 mt-auto h-fit gap-10 flex-col'>
                    <h2 className='text-8xl ml-5 font-ivy-mode-regular capitalize'>
                        about
                    </h2>

                    <p className='text-xl font-robert'>
                        {
                            info?.about ? info?.about : <></>
                        }
                    </p>

                    <a href='' download={true} className='white_button'>
                        download resume
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About