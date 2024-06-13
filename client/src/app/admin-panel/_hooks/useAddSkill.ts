import { skillsRoute } from "@/services/api"
import { postService } from "@/services/postService"
import { notify } from "@/utils/notify"
import { StatusCodes } from "@/utils/statusCodes"
import { useRouter } from "next/navigation"

export default function useAddSkill () {
    const router = useRouter()
    return async (newSkill:any) => {
        const res = await postService(skillsRoute,newSkill)
        if (res?.status_code >= 0){
            notify('Skill addded Successfully')
            router.push('/admin-panel/skills')
        }else if (res?.status_code === StatusCodes.validation) {
            notify('invalid data')
        }
        return res
    }
}