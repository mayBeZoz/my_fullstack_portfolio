import { infoId } from "@/constants"
import { infosRoute } from "@/services/api"
import { getService } from "@/services/getService"
import { useQuery } from "react-query"

export const useGetInfo = () => {
    const id = infoId
    const {data:response,isLoading,isSuccess,refetch} = useQuery({
        queryKey:['infos',id],
        queryFn:async _ => getService(`${infosRoute}/${id}`),
    })
    const info:Info|null = response?.data
    return {
        info,
        isLoading,
        isSuccess,
        refetch,
    }
}