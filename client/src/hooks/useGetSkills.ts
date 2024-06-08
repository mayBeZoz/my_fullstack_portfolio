import { skillsRoute } from '@/services/api'
import { getService } from '@/services/getService'
import { useQuery } from 'react-query'

function useGetSkills() {

    const {data,isLoading,isSuccess,refetch} = useQuery({
        queryKey:['skills'],
        queryFn:async _ => getService(skillsRoute)
    })
    return {
        data,
        isLoading,
        isSuccess,
        refetch
    }
    

}

export default useGetSkills