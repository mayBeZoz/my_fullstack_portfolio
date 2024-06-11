import { projectsRoute } from '@/services/api'
import { getService } from '@/services/getService'
import { useQuery } from 'react-query'

function useGetProject(id?:string) {
    const {data:response,isLoading,isSuccess,refetch} = useQuery({
        queryKey:['project',id],
        queryFn:async _ => getService(`${projectsRoute}/${id}`),
    })
    
    const project:Project |undefined = response?.data
    return {
        project,
        isLoading,
        isSuccess,
        refetch,
    }
}

export default useGetProject