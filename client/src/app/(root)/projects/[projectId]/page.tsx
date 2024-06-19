'use client'

import useGetProject from "@/hooks/useGetProject"
import { useGetRandomProject } from "@/hooks/useGetRandomProject"
import { useParams } from "next/navigation"
import PageSkeleton from "./_components/PageSkeleton"
import ProjectInfosViewer from "./_components/ProjectInfosViewer"
import { AnimatePresence } from "framer-motion"



function ProjectPage() {
    const params = useParams() 
    const projectId = params?.projectId as string | undefined
    
    const {project,isLoading,isSuccess} = useGetProject(projectId)
    
    const randomProj = useGetRandomProject(project?._id)
    
    
    

    return (
        <section>
            <div className="container capitalize pt-[100px] flex flex-col">
                <AnimatePresence>
                    {
                        !isLoading ?
                        <ProjectInfosViewer 
                            project={project} 
                            randomProj={randomProj}
                        /> : <PageSkeleton/>
                    }
                </AnimatePresence>
            </div>
        </section>
    )
}

export default ProjectPage