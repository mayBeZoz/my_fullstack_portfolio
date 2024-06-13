import { skillsRoute } from '@/services/api'
import { patchService } from '@/services/patchService'
import { notify } from '@/utils/notify'
import { StatusCodes } from '@/utils/statusCodes'
import { useRouter } from 'next/navigation'

function useUpdateSkill() {
    const router = useRouter()
    return async (_id:string,newSkill:any) => {
        const res = await patchService(`${skillsRoute}/${_id}`,newSkill)
        if (res?.status_code >= 0){
            notify('skill Updated Successfully')
            router.push('/admin-panel/skills')
        }else if (res?.status_code === StatusCodes.validation) {
            notify('invalid data')
        }
        return res
    }
}

export default useUpdateSkill