

import { projectsRoute } from '@/services/api'
import { getService } from '@/services/getService'
import { useState } from 'react'
import { useQuery } from 'react-query'

function useGetProjects(initLimit:number,initPage:number) {
    const [limit,setLimit] = useState<number>(initLimit)
    const [page,setPage] = useState<number>(initPage)
    
 

    const {data:response,isLoading,isSuccess,refetch} = useQuery({
        queryKey:['projects',{page,limit}],
        queryFn:async _ => getService(`${projectsRoute}?page=${page}&limit=${limit}`),
    })

    const setPageOrder = (page:number) => {
        if (page > 0) {
            if (page <= response?.data?.total_pages) {
                setPage(page)
            }
        }
    }

    const data:Project[]|[] = response?.data?.projects
    const projects = data?.sort((a, b) => a.order - b.order)
    return {
        projects,
        isLoading,
        isSuccess,
        refetch,
        setLimit,
        setPageOrder,
        limit,
        page,
  
    }
}

export default useGetProjects