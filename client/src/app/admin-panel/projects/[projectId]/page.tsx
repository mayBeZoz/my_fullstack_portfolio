'use client'

import useGetProject from "@/hooks/useGetProject"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import PageLoader from "../../_components/PageLoader"
import LoadingButton from "@/components/root/LoadingButton"
import { useUpdateProject } from "../../_hooks/useUpdateProject"
import useDeleteProject from "../../_hooks/useDeleteProject"
import ImageUploadInput from "@/components/root/ImageUploadInput"
import { BASE_URL, projectsRoute } from "@/services/api"
import { postFormDataService } from "@/services/postFormDataService"
import BackButton from "../../_components/BackButton"
import ProjectInputs from "../_components/ProjectInputs"

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
    const [imageFromData,setImageFormData] = useState<FormData|undefined>()

    const [isButtonLoading,setIsButtonLoading] = useState<boolean>(false)

    const {isLoading,project} = useGetProject(projectId)
    const updateProject = useUpdateProject()
    const deleteProject = useDeleteProject()

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
            const res = await updateProject(projectId,{
                name,
                description,
                githubRepoURL,
                deployURL,
                date,
                client,
                order:+order,
                technologies,
                subDescription,
            })
            if (res.status_code === 1 && imageFromData) {
                await postFormDataService(`${projectsRoute}/${projectId}/upload-image`,imageFromData)
            }
            setIsButtonLoading(false)
        }
    }


    return (
        <section>
            {
                isLoading ? 
                <PageLoader/> :  
                <div className="container my-16 capitalize flex-col flex gap-10">
                    
                    <div className="w-full flex gap-20 flex-col md:flex-row">
                        <div className="md:w-1/2 w-full gap-20 flex flex-col">
                            <BackButton/>
                            <p className="text-8xl font-ivy-mode-regular">edit project</p>

                            <ImageUploadInput
                                imageFormData={imageFromData} 
                                setImageFormData={setImageFormData}
                                currImageURL={`${BASE_URL}${projectsRoute}/${projectId}/upload-image`}
                            />
                        </div>

                        <div className="flex flex-col w-full md:w-1/2 gap-10">
                            <ProjectInputs
                                client={client}
                                date={date}
                                description={description}
                                githubRepoURL={githubRepoURL}
                                name={name}
                                deployURL={deployURL}
                                order={order}
                                setClient={setClient}
                                setDate={setDate}
                                setDeployURL={setDeployURL}
                                setDescription={setDescription}
                                setGithubRepoURL={setGithubRepoURL}
                                setName={setName}
                                setOrder={setOrder}
                                setSubDescription={setSubDescription}
                                setTechnologies={setTechnologies}
                                subDescription={subDescription}
                                technologies={technologies}
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
                    <button
                        onClick={() => deleteProject(projectId||'')} 
                        className="white_button"
                    >
                        delete
                    </button>
                </div>
            }
        </section>
    )
}

export default ProjectControls