import { projectsRoute } from '@/services/api'
import { getService } from '@/services/getService'
import { useQuery } from 'react-query'

function useGetProjects(limit:number,page:number) {
    const {data:response,isLoading,isSuccess,refetch} = useQuery({
        queryKey:['projects',{page,limit}],
        queryFn:async _ => getService(`${projectsRoute}?page=${page}&limit=${limit}`),
    })
    
    const data:Project[]|[] = response?.data?.projects
    const projects = data?.sort((a, b) => a.order - b.order)
    return {
        projects,
        isLoading,
        isSuccess,
        refetch,
    }
}

export default useGetProjects