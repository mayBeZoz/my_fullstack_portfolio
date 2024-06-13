import { getCookies } from "cookies-next"
import { BASE_URL, clientFetchErrObj } from "./api"

export const deleteService =  async (url:string) => {
    const token = getCookies()['access-token'] || "no token in client"

    try {
        const res = await fetch(`${BASE_URL}${url}`,{
            method:"DELETE",
            headers:{
                token
            }
        })
        const data =  await res.json()
        if (res.ok) {
            return data
        }
    }catch (err) {
        return clientFetchErrObj
    }
}