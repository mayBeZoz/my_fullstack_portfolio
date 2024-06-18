import TransitionLink from '@/components/root/TransitionLink'
import React from 'react'
import Marquee from 'react-fast-marquee'
import { IoMdArrowForward } from 'react-icons/io'

const GetInTouchButton = () => {
    return (
        <TransitionLink href='/contact'>
            <div className="relative w-[300px] flex justify-center items-center aspect-square">
                <IoMdArrowForward className='text-5xl md:text-7xl absolute top-0 right-0 -rotate-45' />

                <div className='w-[260px] flex justify-center duration-150 items-center rounded-full bg-white  aspect-square'>
                    <p className='text-nightmare-black duration-150 text-center font-ivy-mode-regular text-6xl'>get in touch</p>
                </div>
            </div>
        </TransitionLink>
    )
}
function Footer() {
    return (
        <footer className='flex-col mt-20 capitalize flex gap-10'>
            <div className="h-[40px]">
                <Marquee>

                </Marquee>
            </div>
            <div className="container h-full grid grid-cols-[repeat(300px,1fr)] gap-5 py-5">
                <GetInTouchButton/>
            </div>
        </footer>
    )
}

export default Footer