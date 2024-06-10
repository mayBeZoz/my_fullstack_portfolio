'use client'
import Image from '@/components/root/Image'
import Skeleton from '@/components/root/Skeleton'
import { isEven } from '@/hooks/isEven'
import useGetProjects from '@/hooks/useGetProjects'
import { BASE_URL, projectsRoute } from '@/services/api'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

type ProjectProps = {
    project:Project,
    order:number,

}

const Project = ({project,order}:ProjectProps) => {
    const {_id,name,subDescription} = project
    const isEvenNum = isEven(order)

    return (
        <motion.section             
            animate={{opacity:1}}
            className='w-full flex items-center'
            initial={{opacity:0}}
            style={{justifyContent:isEvenNum ? 'end' : 'start'}}
        >
            <Link 
                href={`/projects/${_id}`} 
                className='flex md:!w-[600px] gap-10 w-full flex-col'
            >
                <Image 
                    className='!w-full h-[300px] sm:h-[400px]' 
                    src={`${BASE_URL}${projectsRoute}/${_id}/upload-image`}
                />                
                <div className='flex flex-col gap-5'>
                    <h5 className='font-ivy-mode-regular text-4xl sm:text-5xl'>{name}</h5>
                    <p className='font-robert text-lg'>{subDescription}</p>
                </div>
            </Link>
            
        </motion.section>
    )
}

const ProjectSkeleton = ({order}:{order:number}) => {
    const isEvenNum = isEven(order)

    return (
        <motion.section 
            exit={{opacity:0}}
            style={{justifyContent:isEvenNum ? 'end' : 'start'}}
            className='w-full flex items-center'
        >
            <div className='flex md:!w-[600px] gap-10 w-full flex-col'>
                <Skeleton className='!w-full h-[300px] sm:h-[400px]'/>
                <div className='flex flex-col gap-5'>
                    <Skeleton className='!w-2/3 !h-6'/>
                    <Skeleton className='!w-1/3 !h-4'/>
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
                        true? (
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