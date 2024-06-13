import { skillsRoute } from '@/services/api'
import { getService } from '@/services/getService'
import { useQuery } from 'react-query'

function useGetSkill(id:string) {
    const {data:response,isLoading,isSuccess,refetch} = useQuery({
        queryKey:['skills',id],
        queryFn:async _ => getService(skillsRoute)
    })


    const skill:Skill = response?.data.find((skill:Skill) => skill._id === id)
    return {
        skill,
        isLoading,
        isSuccess,
        refetch
    }
}

export default useGetSkill