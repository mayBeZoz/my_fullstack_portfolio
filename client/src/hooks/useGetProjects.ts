import { projectsRoute } from '@/services/api'
import { getService } from '@/services/getService'
import { useQuery } from 'react-query'
import { useGetData } from './useGetData'

function useGetProjects() {
    const {
        response,
        isLoading,
        isSuccess,
        refetch,
        currLimit,
        currPage,
        setCurrLimit,
        setCurrPage
    } = useGetData({
        queryKey:['projects'],
        queryFn:async _ => getService(projectsRoute),

    })
    
    const data:Project[]|[] = response?.data?.projects
    const projects = data?.sort((a, b) => a.order - b.order)
    return {
        projects,
        isLoading,
        isSuccess,
        refetch
    }
}

export default useGetProjects