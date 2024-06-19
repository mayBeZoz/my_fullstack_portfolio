'use client'

import MagneticButton from "@/components/root/MagneticButton"
import TransitionLink from "@/components/root/TransitionLink"
import { useGetInfo } from "@/hooks/useGetInfo"
import { AnimatePresence, motion } from "framer-motion"
import { IoMdArrowForward } from "react-icons/io"
const GetInTouchButton = () => {
    return (
        <TransitionLink href='/contact'>
            <div className="relative w-[240px] flex justify-center items-center aspect-square">
                <IoMdArrowForward className='text-5xl md:text-6xl absolute top-0 right-0 -rotate-45' />

                <MagneticButton>
                    <div className='w-[200px] flex justify-center duration-150 items-center rounded-full bg-black  aspect-square'>
                        <p className='text-white duration-150 text-center font-ivy-mode-regular text-5xl'>get in touch</p>
                    </div>
                </MagneticButton>
            </div>
        </TransitionLink>
    )
}
function Footer() {
    const text = 'have an idea ?, something good you want bring to life ?, lets work on it !'
    const {info,isLoading} = useGetInfo()
    
    return (
        <footer className='mt-44 container rounded-2xl bg-white mb-10'>
            <div className="capitalize">
                <div className="w-full p-6 sm:p-12 pt-20  text-nightmare-black">
                    <div className="flex md:flex-row flex-col gap-5 items-center justify-between">
                        <h6 className='font-ivy-mode-regular text-8xl sm:text-9xl'>lets hack!</h6>
                        <GetInTouchButton/>
                    </div>
                    <span className='w-full h-[1px] bg-nightmare-black block my-7'/>
                    <div className="flex md:flex-row flex-col md:items-center md:justify-between font-robert gap-10">
                        <p className='w-3/4 md:w-[350px]'>{text}</p>
                        <ul className="flex md:w-[50%] flex-wrap md:justify-end gap-5">
                            <AnimatePresence>
                            {
                                isLoading?
                                Array(4).fill('').map((_,idx) => <motion.span exit={{opacity:0}} key={idx} className='w-[100px] shimmer h-[15px]'/>)
                                :
                                info?.socials.map((social,idx) => (
                                    <motion.li initial={{opacity:0}} animate={{opacity:1}} className="text-lg w-fit" key={idx}>
                                        <MagneticButton>
                                            <a href={social.href}>
                                                {social.name}
                                            </a>
                                        </MagneticButton>
                                    </motion.li>
                                ))
                            }
                            </AnimatePresence>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer