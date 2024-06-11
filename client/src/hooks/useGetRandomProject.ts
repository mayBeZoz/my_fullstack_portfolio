import { useEffect, useState } from "react"
import useGetProjects from "./useGetProjects"
import { selectRandom } from "@/utils/selectRandom"

export const useGetRandomProject = (exceptionId?:string): Project | null => {
    const [randomProj,setRandomProj] = useState<Project|null>(null)

    const {
        projects,
        isLoading,
        isSuccess
    } = useGetProjects(30,1)

    useEffect(()=>{
        if (projects?.length) {
            if (exceptionId) {
                const acceptedProjects = projects.filter(proj => proj._id !== exceptionId)
                setRandomProj(selectRandom(acceptedProjects))
            }else {
                setRandomProj(selectRandom(projects))
            }
        }
    },[projects,isLoading,isSuccess])

    return randomProj
}