import { projectsRoute } from "@/services/api"
import { postService } from "@/services/postService"
import { notify } from "@/utils/notify"
import { StatusCodes } from "@/utils/statusCodes"

export default function useAddProject () {
    return async (newProject:any) => {
        const res = await postService(projectsRoute,newProject)
        if (res?.status_code >= 0){
            notify('Project addded Successfully')
        }else if (res?.status_code === StatusCodes.validation) {
            notify('invalid data')
        }
        return res
    }
}