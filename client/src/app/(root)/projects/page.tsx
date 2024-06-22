'use client'
import Image from '@/components/root/Image'
import TransitionLink from '@/components/root/TransitionLink'
import useGetProjects from '@/hooks/useGetProjects'
import { BASE_URL, projectsRoute } from '@/services/api'
import { isEven } from '@/utils/isEven'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

type ProjectProps = {
    project:Project,
    order:number,

}

const Project = ({project,order}:ProjectProps) => {
    const {_id,name,subDescription} = project
    const isEvenNum = isEven(order)
    const href =`/projects/${_id}`
    return (
        <motion.section             
            animate={{opacity:1}}
            className='project w-full flex items-center'
            initial={{opacity:0}}
            style={{justifyContent:isEvenNum ? 'end' : 'start'}}
        >
            <div className='flex md:!w-[600px] gap-10 w-full flex-col'>
                <TransitionLink 
                    href={href} 
                >
                    <Image 
                        className='!w-full rounded-xl h-[300px] sm:h-[400px]' 
                        src={`${BASE_URL}${projectsRoute}/${_id}/upload-image`}
                    />                
                    
                </TransitionLink>
                <div className='flex flex-col gap-5'>
                    <TransitionLink href={href}>
                        <h5 className='title font-ivy-mode-regular text-4xl sm:text-5xl'>{name}</h5>
                    </TransitionLink>
                    <TransitionLink href={href}>          
                        <p className='font-robert text-lg'>{subDescription}</p>
                    </TransitionLink>
                </div>
            </div>
 
        </motion.section>
    )
}

const ProjectSkeleton = ({order}:{order:number}) => {
    const isEvenNum = isEven(order)

    return (
        <motion.section 
            exit={{opacity:0}}
            style={{justifyContent:isEvenNum ? 'end' : 'start'}}
            className='w-full flex items-center project'
        >
            <div className='flex md:!w-[600px] gap-10 w-full flex-col'>
                <span className='!w-full shimmer h-[300px] sm:h-[400px]'/>
                <div className='flex flex-col gap-5'>
                    <span className='!w-2/3 shimmer !h-6'/>
                    <span className='!w-1/3 shimmer !h-4'/>
                </div>
            </div>
        </motion.section>
    )
}
function ProjectsPage() {

    const {isLoading,projects} = useGetProjects(20,1)



    return (
        <div className='container capitalize pt-[100px]'>
            <h2 className='text-7xl md:text-9xl my-20 font-ivy-mode-regular'>all projects</h2>

            <div className="w-full flex gap-20 flex-col">
                <AnimatePresence>
                    {
                        isLoading? (
                            <>
                                <ProjectSkeleton order={1}/>
                                <ProjectSkeleton order={2}/>
                                <ProjectSkeleton order={3}/>
                                <ProjectSkeleton order={4}/>
                            </>
                        ) : 
                        <>
                            {
                                projects?.map((project,idx)=> 
                                    <Project 
                                        key={idx} 
                                        project={project} 
                                        order={idx+1}
                                    />
                                )
                            }
                        </>
                    }
                </AnimatePresence>
            </div>
        </div>
    )
}

export default ProjectsPage