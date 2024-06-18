'use client'

import TransitionLink from '@/components/root/TransitionLink'
import useGetProjects from '@/hooks/useGetProjects'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { IoMdArrowForward } from 'react-icons/io'

const WorkItemSkeleton = () => (
    <motion.div exit={{opacity:0}} className='work_item'>
        <div className='flex gap-16'>
            <span className='skeleton !h-[30px] !w-[200px]'/>
            <div className='flex flex-col mt-auto gap-2'>
                <span className='skeleton !w-[100px]'/>
                <span className='skeleton !w-[180px]'/>
            </div>
        </div>  
        <span className='w-full h-[2px] absolute bottom-0 left-0 bg-white/25 shimmer'/>      
    </motion.div>
)


const WorkItem = ({item}:{item:Project}) => {
    return (
        <motion.div 
            initial={{opacity:0}}
            exit={{opacity:0}}
            animate={{opacity:1}}
            className='w-full work_item'
        >
            <TransitionLink href={`/projects/${item._id}`} className='work_item duration-300 hover:opacity-80'>
                <div className="flex items-center capitalize gap-16">
                    <p className='font-ivy-mode-regular text-3xl lg:text-5xl'>{item.name}</p>
                    <p className='font-robert text-sm w-[120px] sm:block hidden'>{item.subDescription}</p>
                </div>
                <IoMdArrowForward className='-rotate-45 text-5xl md:text-7xl' />

                <span className='w-full h-[2px] absolute bottom-0 left-0 bg-white '/>      
            </TransitionLink>
        </motion.div>
    )
}
function Work() {
    const {projects,isLoading,isSuccess} = useGetProjects(10,1)
    
    return (
        <section className='my-80'>
            <div className='container flex flex-col'>
                <h2 className='section_heading sm:mb-32 mb-10'>my work</h2>

                <div className='w-full flex flex-col items-center md:w-[80%] ml-auto'>
                    <div className='w-full flex mb-20 flex-col'>
                        <AnimatePresence>
                            {
                                (!isLoading && isSuccess) ? (
                                    projects?.map((item:Project,key:number)=> (
                                        <WorkItem item={item} key={key}/>
                                    ))
                                ) : (       
                                    Array(6).fill('').map((_,idx)=> (
                                        <WorkItemSkeleton key={idx}/>
                                    ))  
                                )
                            }
                        </AnimatePresence>
                        
                    </div>
                    <TransitionLink href='/projects' className="white_button">
                        see more work
                    </TransitionLink>
                </div>
                
            </div>
        </section>
    )
}

export default Work