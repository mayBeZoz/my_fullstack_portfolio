'use client'

import { useParams } from "next/navigation"
import { useState } from "react"
import PageLoader from "../../_components/PageLoader"
import LoadingButton from "@/components/root/LoadingButton"
import ImageUploadInput from "@/components/root/ImageUploadInput"
import { BASE_URL, projectsRoute } from "@/services/api"
import { postFormDataService } from "@/services/postFormDataService"
import BackButton from "../../_components/BackButton"
import ProjectInputs from "../_components/ProjectInputs"
import useAddProject from "../../_hooks/useAddProject"

function AddNewProject() {
 
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

    const addProject = useAddProject()

    const handleAddProject = async () => {
        setIsButtonLoading(true)
        const res = await addProject({
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
        console.log(res);
        
        if (res.status_code === 1 && imageFromData) {
            const project = res.data
            await postFormDataService(`${projectsRoute}/${project._id}/upload-image`,imageFromData)
        }
        setIsButtonLoading(false)
        
    }


    return (
        <section>
            <div className="container my-16 capitalize flex-col flex gap-10">
                
                <div className="w-full flex gap-20 flex-col md:flex-row">
                    <div className="md:w-1/2 w-full gap-20 flex flex-col">
                        <BackButton/>
                        <p className="text-8xl font-ivy-mode-regular">add new project</p>

                        <ImageUploadInput
                            imageFormData={imageFromData} 
                            setImageFormData={setImageFormData}
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
                    onClick={handleAddProject}
                >
                    add project
                </LoadingButton>
            </div>
            
        </section>
    )
}

export default AddNewProject