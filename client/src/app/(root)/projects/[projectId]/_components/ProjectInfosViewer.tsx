import Image from '@/components/root/Image'
import { BASE_URL, projectsRoute } from '@/services/api'
import { motion } from 'framer-motion'
import React from 'react'
import { BsGlobe2 } from 'react-icons/bs'
import { FaCode } from 'react-icons/fa'

type ProjectInfosViewerProps = {
    project:Project|undefined,
    randomProj:Project|null
} 

function ProjectInfosViewer({project,randomProj}:ProjectInfosViewerProps) {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}}>
            <div className="flex mt-32">
                <div className="w-full md:w-3/4 flex gap-16 flex-col">
                    <h2 className="text-7xl sm:text-8xl font-ivy-mode-regular">{project?.name}</h2>
                    <div className="flex text-lg flex-col gap-20 sm:flex-row font-robert justify-between items-start sm:items-end">
                        
                        <div className="gap-20 flex">
                            <div>
                                <p className="font-semibold mb-2 text-xl">date</p>
                                <p>{project?.date}</p>
                            </div>
                            <div>
                                <p className="font-semibold mb-2 text-xl">client</p>
                                <p>{project?.client}</p>
                            </div>
                        </div>

                        <div className='flex gap-5 items-end'>
                            <a href={project?.deployURL}>
                                <BsGlobe2 className='text-3xl duration-200 hover:text-zinc-300' />
                            </a>
                            <a href={project?.deployURL}>
                                <FaCode className='text-3xl duration-200 hover:text-zinc-300' />
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>

            <p className="font-robert my-32 w-[80%] sm:w-[400px] text-xl">{project?.description}</p>

            <a className='w-full block overflow-hidden rounded-xl md:w-2/3 aspect-[1.5/1] mx-auto' href={project?.deployURL} target='_blank'>
                <Image 
                    src={`${BASE_URL}${projectsRoute}/${project?._id}/upload-image`}
                    className='w-full'
                />
            </a>
        </motion.div>
    )
}

export default ProjectInfosViewer