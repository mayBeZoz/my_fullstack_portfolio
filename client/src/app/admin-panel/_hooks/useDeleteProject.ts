import { useTogglePopUp } from "@/hooks/useTogglePopUp"
import { projectsRoute } from "@/services/api"
import { deleteService } from "@/services/deleteService"
import { useRouter } from "next/navigation"


function useDeleteProject() {
    const togglePopUp = useTogglePopUp()
    const router = useRouter()

    const deleteProject = async (id:string) => {
        const res = await deleteService(`${projectsRoute}/${id}`)
        if (res?.status_code === 1) {
            togglePopUp({
                isPopUpOpen:false,
                message:'project deleted successfully',
                title:"success",
                popUpType:'alert',
            })
            router.push('/admin-panel/projects')
        }
    }

    return (projectId:string) => {
        togglePopUp({
            isPopUpOpen:true,
            message:'are use sure about deleting the project',
            title:"delete !",
            popUpType:'confirm',
            resolveFunc:() => deleteProject(projectId),
        })

    }
}

export default useDeleteProject