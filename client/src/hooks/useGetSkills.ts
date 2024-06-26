import { skillsRoute } from '@/services/api'
import { getService } from '@/services/getService'
import { useQuery } from 'react-query'

function useGetSkills() {

    const {data:response,isLoading,isSuccess,refetch} = useQuery({
        queryKey:['skills'],
        queryFn:async _ => getService(skillsRoute)
    })


    const skills:Skill[] = response?.data
    return {
        skills,
        isLoading,
        isSuccess,
        refetch
    }
    

}

export default useGetSkills