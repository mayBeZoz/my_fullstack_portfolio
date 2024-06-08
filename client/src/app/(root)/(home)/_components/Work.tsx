'use client'

import useGetProjects from '@/hooks/useGetProjects'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { IoMdArrowForward } from 'react-icons/io'

const WorkItemSkeleton = () => (
    <motion.div exit={{opacity:0}} className='work_item'>
        <div className='flex gap-16'>
            <div key='skeleton1' className='h-[30px] bg-white/25 rounded-md w-[200px] shimmer'/>
            <div className='flex flex-col mt-auto gap-2'>
                <div key='skeleton2' className='h-[10px] bg-white/25 rounded-md w-[100px] shimmer'/>
                <div key='skeleton3' className='h-[10px] bg-white/25 rounded-md w-[160px] shimmer'/>
            </div>
        </div>  
        <span className='w-full h-[2px] absolute bottom-0 left-0 bg-white/25 shimmer'/>      
    </motion.div>
)


const WorkItem = ({item}:{item:Project}) => {
    return (
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            className='w-full'
        >
            <Link href={`/projects/${item._id}`} className='work_item duration-300 hover:opacity-80'>
                <div className="flex items-center capitalize gap-16">
                    <p className='font-ivy-mode-regular text-2xl md:text-3xl lg:text-5xl'>{item.name}</p>
                    <p className='font-robert text-sm w-[120px] sm:block hidden'>{item.subDescription}</p>
                </div>
                <IoMdArrowForward className='-rotate-45 text-5xl md:text-7xl' />

                <span className='w-full h-[2px] absolute bottom-0 left-0 bg-white '/>      
            </Link>
        </motion.div>
    )
}
function Work() {
    const {projects,isLoading,isSuccess} = useGetProjects()
    
    return (
        <section className='my-80'>
            <div className='container flex flex-col'>
                <h2 className='text-8xl capitalize font-ivy-mode-regular mb-32'>my work</h2>

                <div className='w-full flex flex-col items-center md:w-[80%] ml-auto'>
                    <div className='w-full flex mb-20 flex-col'>
                        <AnimatePresence>
                            {
                                (!isLoading && isSuccess) ? (
                                    projects?.map((item:Project,key:number)=> (
                                        <WorkItem item={item} key={key}/>
                                    ))
                                ) : (
                                    <>
                                        {
                                            Array(10).fill('').map((_,idx)=> (
                                                <WorkItemSkeleton key={idx}/>
                                            ))
                                        }
                                        
                                    </>
                                )
                            }
                        </AnimatePresence>
                        
                    </div>
                    <Link href='/projects' className="white_button">
                        see more work
                    </Link>
                </div>
                
            </div>
        </section>
    )
}

export default Work