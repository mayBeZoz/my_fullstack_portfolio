'use client'

import useGetProjects from "@/hooks/useGetProjects"
import PageLoader from "../_components/PageLoader"
import { BASE_URL, projectsRoute } from "@/services/api"
import { isEven } from "@/utils/isEven"
import { motion } from "framer-motion"
import Image from "@/components/root/Image"
import Link from "next/link"

type ProjectProps = {
    project:Project,
    order:number,

}
const Project = ({project,order}:ProjectProps) => {
    const {_id,name,subDescription} = project
    const isEvenNum = isEven(order)

    return (
        <motion.div             
            animate={{opacity:1}}
            className='w-full'
            initial={{opacity:0}}
        >
            <Link 
                href={`/admin-panel/projects/${_id}`} 
                className='flex w-full gap-10 flex-col'
            >
                <Image
                    className='!w-full h-[300px] sm:h-[400px]' 
                    src={`${BASE_URL}${projectsRoute}/${_id}/upload-image`}
                />                
                <div className='flex flex-col gap-5'>
                    <h5 className='font-ivy-mode-regular text-4xl sm:text-5xl'>{name}</h5>
                    <p>{subDescription}</p>
                </div>
            </Link>
            
        </motion.div>
    )
}
function ProjectsPanel() {

    const {
        isLoading,
        limit,
        page,
        projects,
        refetch,
        setLimit,
        setPageOrder
    } = useGetProjects(10,1)



    return (
        <section>
            <div className="container">
                {
                    isLoading ? 
                    <PageLoader/> : 
                    <div className="my-24">
                        <h1 className="text-8xl font-ivy-mode-regular mb-36">all projects</h1>
                        <Link href='/admin-panel/projects/add-new' className="white_button">add new</Link>
                        <div className="w-full mt-24 flex flex-col sm:grid sm:grid-cols-[repeat(auto-fit,minmax(500px,1fr))] gap-10">
                            {
                                projects?.map((proj:Project,idx:number) => (
                                    <Project order={idx} key={idx} project={proj}/>
                                ))
                            }
                        </div>
                        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] mt-24 gap-5">
                            
                            
                            <button
                                onClick={()=>setPageOrder(page-1)}
                                className="white_button !w-full"
                            >
                                prev page
                            </button>
                            <button
                                onClick={()=>refetch()}
                                className="white_button !w-full"
                            >
                                refetch
                            </button>
                            <button
                                onClick={()=>setPageOrder(page+1)}
                                className="white_button !w-full"
                            >
                                next page
                            </button>
                        </div>
                    </div>
                }
            </div>


        </section>
    )
}

export default ProjectsPanel