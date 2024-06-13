import { useTogglePopUp } from '@/hooks/useTogglePopUp'
import { skillsRoute } from '@/services/api'
import { deleteService } from '@/services/deleteService'
import { useRouter } from 'next/navigation'
import React from 'react'

function useDeleteSkill() {
    const togglePopUp = useTogglePopUp()
    const router = useRouter()

    const deleteProject = async (id:string) => {
        const res = await deleteService(`${skillsRoute}/${id}`)
        if (res?.status_code === 1) {
            togglePopUp({
                isPopUpOpen:false,
                message:'skill deleted successfully',
                title:"success",
                popUpType:'alert',
            })
            router.push('/admin-panel/skills')
        }
    }

    return (projectId:string) => {
        togglePopUp({
            isPopUpOpen:true,
            message:'are use sure about deleting the skill',
            title:"delete !",
            popUpType:'confirm',
            resolveFunc:() => deleteProject(projectId),
        })

    }
}

export default useDeleteSkill