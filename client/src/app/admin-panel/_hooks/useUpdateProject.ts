import { projectsRoute } from "@/services/api";
import { patchService } from "@/services/patchService";



export const useUpdateProject = () => {
    return async (_id:string,newProject:any) => {
        const res = await patchService(`${projectsRoute}/${_id}`,newProject)
        console.log(res);
        
    }
}