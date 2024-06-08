import { useState } from "react"
import { useQuery } from "react-query"


export const useGetData = ({
    limit,
    page,
    queryFn,
    queryKey
}:UseGetDataOptions) : UseGetDataResult => {
    const [currLimit,setCurrLimit] = useState<number>(limit||10)
    const [currPage,setCurrPage] = useState<number>(page||1)

    const {data,refetch,isLoading,isSuccess} = useQuery({
        queryFn,
        queryKey:[...queryKey,{currPage,currLimit}],
    })

    return {
        setCurrLimit,
        setCurrPage,
        response:data,
        isLoading,
        isSuccess,
        refetch,
        currLimit,
        currPage,
    }
}