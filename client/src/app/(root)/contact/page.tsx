'use client'

import { useGetInfo } from '@/hooks/useGetInfo'
import { AnimatePresence, motion } from 'framer-motion'



function Contact() {

    const {info,isLoading} = useGetInfo()

    return (
        <section className='pt-[200px] flex items-center'>
            <div className="container capitalize">
                <div className='w-full flex-col md:flex-row gap-10 lg:gap-16 md:gap-5 flex'>
                    <div className='w-full md:w-[65%]'>
                        <div className='text-7xl xs:text-9xl leading-[70px] sm:text-[7.5em] lg:text-9xl sm:leading-[150px] flex flex-col uppercase font-ivy-mode-regular'>
                            <div>get in</div>
                            <div className='w-fit mt-6 ml-auto'>touch!</div>
                        </div>
                        <AnimatePresence>
                            {
                                isLoading ?
                                    <motion.span className='shimmer w-[250px] ml-auto mt-10  h-[20px]' exit={{opacity:0}}/>
                                :
                                <motion.a 
                                    className='w-fit border-b text-2xl block border-white font-robert ml-auto mt-10 lowercase'
                                    href={`mailto:${info?.contacts.email}`}
                                    initial={{opacity:0}}
                                    animate={{opacity:1}}
                                >
                                    {info?.contacts.email}
                                </motion.a>
                            }
                        </AnimatePresence>

                    </div>
                    <span className='w-full h-[1px] md:w-[1px] bg-white md:h-[400px] block'/>
                    <div className="w-full md:w-[35%] flex flex-col gap-10">
                        <AnimatePresence>
                            {
                                isLoading ? 
                                Array(4).fill('').map((_,idx) =>(
                                    <motion.span key={idx} className='shimmer w-[250px] h-[50px]' exit={{opacity:0}}/>
                                ))
                                
                                :
                                info?.socials.map((social:Social,idx:number) => (
                                    <motion.a 
                                        className='uppercase w-fit hover:text-white/70 duration-200 font-ivy-mode-regular text-5xl lg:text-6xl'
                                        key={idx}
                                        href={social.href}
                                        target='_blank'
                                        initial={{opacity:0}}
                                        animate={{opacity:1}}
                                    >
                                        {social.name}
                                    </motion.a>
                                ))
                                
                            }
                        </AnimatePresence>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Contact