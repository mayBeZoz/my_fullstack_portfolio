'use client'
import Image from '@/components/root/Image'
import Skeleton from '@/components/root/Skeleton'
import { infoId } from '@/constants'
import { useGetInfo } from '@/hooks/useGetInfo'
import { BASE_URL, infosRoute } from '@/services/api'
import React from 'react'

function About() {
    const {info,isLoading} = useGetInfo()
    
    return (
        <section className='w-full mt-32'>
            <div className='flex md:flex-row flex-col container gap-10'>
                <div className='hidden lg:block lg:w-[350px] h-[400px]'>
                    <Image 
                        className='grayscale object-cover w-full h-full bg-white/25' 
                        src={`${BASE_URL}${infosRoute}/${infoId}/upload-image`}
                    />
                </div>

                <div className='flex flex-1 mt-auto h-fit gap-10 flex-col'>
                    <h2 className='section_heading'>about</h2>

                    <p className='text-sm sm:text-xl font-robert'>
                        {
                            !isLoading ? 
                            info?.about : 
                            <span className='w-full flex flex-col gap-5'>
                                <Skeleton/>
                                <Skeleton/>
                                <Skeleton />
                                <Skeleton/>
                                <Skeleton width={300}/>
                            </span>
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