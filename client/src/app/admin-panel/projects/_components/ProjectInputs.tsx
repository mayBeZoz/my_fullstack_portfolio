import Input from '@/components/root/Input'
import Textarea from '@/components/root/Textarea'
import React from 'react'


type ProjectInputsProps = {
    name:string,
    description:string,
    githubRepoURL:string,
    deployURL:string,
    date:string,
    client:string,
    subDescription:string,
    order:string,
    technologies:Skill[],
    setName:(newState:string) => void,
    setDescription:(newState:string) => void,
    setGithubRepoURL:(newState:string) => void,
    setDeployURL:(newState:string) => void,
    setDate:(newState:string) => void,
    setClient:(newState:string) => void,
    setSubDescription:(newState:string) => void,
    setOrder:(newState:string) => void,
    setTechnologies:(newState:Skill[]) => void,
}
function ProjectInputs({
    client,
    date,
    deployURL,
    description,
    githubRepoURL,
    name,
    order,
    subDescription,
    setClient,
    setDate,
    setDeployURL,
    setDescription,
    setGithubRepoURL,
    setName,
    setOrder,
    setSubDescription,
    setTechnologies,
    technologies
}:ProjectInputsProps) {
    return (
        <>
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
        </>
    )
}

export default ProjectInputs