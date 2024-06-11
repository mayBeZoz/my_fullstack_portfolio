import Image from '@/components/root/Image'
import { BASE_URL, projectsRoute } from '@/services/api'
import React from 'react'

type ProjectInfosViewerProps = {
    project:Project|undefined,
    randomProj:Project|null
} 

function ProjectInfosViewer({project,randomProj}:ProjectInfosViewerProps) {
    return (
        <div>
            <div className="flex mt-32">
                <div className="w-3/4 flex gap-16 flex-col">
                    <h2 className="text-8xl font-ivy-mode-regular">{project?.name}</h2>
                    <div className="flex text-lg font-robert gap-20 items-center">
                        
                        <div>
                            <p className="font-semibold mb-2 text-xl">date</p>
                            <p>{project?.date}</p>
                        </div>
                        <div>
                            <p className="font-semibold mb-2 text-xl">client</p>
                            <p>{project?.client}</p>
                        </div>

                    </div>
                </div>
                <div>
                    <p className='text-2xl font-robert'>technologies</p>

                    <div>
                        
                    </div>
                </div>
            </div>

            <p className="font-robert my-32 mx-auto w-[80%] sm:w-[350px] text-xl">{project?.description}</p>

            <a href={project?.deployURL}>
                <Image 
                    src={`${BASE_URL}${projectsRoute}/${project?._id}/upload-image`}
                    className='w-full md:w-2/3 aspect-[1.5/1] mx-auto'
                />
            </a>
        </div>
    )
}

export default ProjectInfosViewer