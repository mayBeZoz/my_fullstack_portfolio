import { getCookies } from "cookies-next"
import { BASE_URL, clientFetchErrObj } from "./api"

export const postFormDataService = async (url:string,formData:FormData) => {
    const token = getCookies()['access-token'] || "no token in client"

    try {
        const res = await fetch(`${BASE_URL}${url}`,{
            method:"POST",
            body:formData,
            headers:{
                token

            }
        })
        
        const data = await res.json()
        return data
        
    }catch (err) {
        return clientFetchErrObj
    }
}