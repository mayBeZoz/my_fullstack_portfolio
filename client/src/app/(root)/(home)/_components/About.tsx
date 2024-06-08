import Image from '@/components/root/Image'
import React from 'react'

function About() {
    return (
        <section className='w-full mt-32'>
            <div className='flex container gap-10'>
                <div className='h-[450px] w-[400px]'>
                    <Image className='grayscale w-full h-full bg-white/25' src="https://web.telegram.org/f5d74787-3b48-445a-b631-2429f114a446" alt="" />
                </div>

                <div className='flex flex-1 mt-auto h-fit gap-10 flex-col'>
                    <h2 className='text-8xl ml-5 font-ivy-mode-regular capitalize'>about</h2>

                    <p className='text-lg font-robert'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolores soluta maxime molestias, repellat modi temporibus aspernatur impedit iure vitae nisi non a veniam similique expedita saepe sit ex, dolor eum minima eveniet sequi! Libero maxime eveniet voluptatibus soluta cupiditate.</p>

                    <a href='' download={true} className='white_button'>
                        download resume
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About