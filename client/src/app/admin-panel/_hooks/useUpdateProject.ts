import { projectsRoute } from "@/services/api";
import { patchService } from "@/services/patchService";
import { notify } from "@/utils/notify";
import { StatusCodes } from "@/utils/statusCodes";
import { useRouter } from "next/navigation";



export const useUpdateProject = () => {
    const router = useRouter()
    return async (_id:string,newProject:any) => {
        const res = await patchService(`${projectsRoute}/${_id}`,newProject)
        if (res?.status_code >= 0){
            notify('Project Updated Successfully')
            router.push('/admin-panel/projects')
        }else if (res?.status_code === StatusCodes.validation) {
            notify('invalid data')
        }
        return res
    }
}