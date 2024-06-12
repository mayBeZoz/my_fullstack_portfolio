'use client'

import useGetProject from "@/hooks/useGetProject"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import PageLoader from "../../_components/PageLoader"
import Input from "@/components/root/Input"
import LoadingButton from "@/components/root/LoadingButton"
import { useUpdateProject } from "../../_hooks/useUpdateProject"
import Textarea from "@/components/root/Textarea"

function ProjectControls() {

    const params = useParams() 
    const projectId = params?.projectId as string | undefined

    const [name,setName] = useState<string>('')
    const [description,setDescription] = useState<string>('')
    const [githubRepoURL,setGithubRepoURL] = useState<string>('')
    const [deployURL,setDeployURL] = useState<string>('')
    const [date,setDate] = useState<string>('')
    const [client,setClient] = useState<string>('')
    const [subDescription,setSubDescription] = useState<string>('')
    const [order,setOrder] = useState<string>('')
    const [technologies,setTechnologies] = useState<Skill[]>([])
    const [isButtonLoading,setIsButtonLoading] = useState<boolean>(false)


    const {isLoading,project} = useGetProject(projectId)
    const updateProject = useUpdateProject()

    useEffect(()=>{
        if (!isLoading && project) {
            setName(project.name)
            setClient(project.client)
            setDescription(project.description)
            setGithubRepoURL(project.githubRepoURL)
            setDeployURL(project.deployURL)
            setDate(project.date)
            setOrder(project.order.toString())
            setTechnologies(project.technologies)
            setSubDescription(project.subDescription)
        }
    },[project,isLoading])

    const handleUpdateProject = async () => {
        if (!isLoading && projectId) {
            setIsButtonLoading(true)
            await updateProject(projectId,{
                name,
                description,
                githubRepoURL,
                deployURL,
                date,
                client,
                order,
                technologies,
            })
            setIsButtonLoading(false)
        }
    }


    return (
        <section>
            {
                isLoading ? 
                <PageLoader/> : 
                <div className="container my-16 capitalize flex-col flex gap-10">
                    
                    <div className="w-full flex gap-10 flex-col md:flex-row">
                        <div className="sm:w-1/2 w-full flex flex-col">
                            <p className="text-8xl font-ivy-mode-regular">edit project</p>
                        </div>

                        <div className="flex flex-col w-full md:w-1/2 gap-10">
                            <Input 
                                label="name" 
                                setValue={setName} 
                                value={name}
                                type="text"
                                required={true}
                            />
                            <Input 
                                label="github repo URL" 
                                setValue={setGithubRepoURL} 
                                value={githubRepoURL}
                                type="text"
                                required={true}
                            />
                            <Input 
                                label="deloyment url" 
                                setValue={setDeployURL} 
                                value={deployURL}
                                type="text"
                                required={true}
                            />
                            <Input 
                                label="date" 
                                setValue={setDate} 
                                value={date}
                                type="text"
                                required={true}
                            />
                            <Input 
                                label="client" 
                                setValue={setClient} 
                                value={client}
                                type="text"
                                required={true}
                            />        
                            <Input 
                                label="order" 
                                setValue={setOrder} 
                                value={order}
                                type="number"
                                required={true}
                            />
                            
                            <Input
                                type="text" 
                                label="sub description" 
                                setValue={setSubDescription} 
                                value={subDescription}
                                required={true}
                            />
                            <Textarea 
                                label="description" 
                                setValue={setDescription} 
                                value={description}
                                required={true}
                            />
                        </div>
                    </div>
                    <LoadingButton
                            type="submit" 
                            className="white_button !w-full"
                            isLoading={isButtonLoading}
                            onClick={handleUpdateProject}
                        >
                            save changes
                    </LoadingButton>
                </div>
            }
        </section>
    )
}

export default ProjectControls