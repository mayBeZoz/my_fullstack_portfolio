import { getCookie, getCookies } from "cookies-next"
import { BASE_URL, clientFetchErrObj } from "./api"

export const postService =  async (url:string,body:any) => {
    const token = getCookies()['access-token'] || "no token in client"

    try {
        const res = await fetch(`${BASE_URL}${url}`,{
            method:"POST",
            body:JSON.stringify(body),
            headers:{
                'Content-Type':'application/json',
                token

            }
        })
        
        const data = await res.json()
        return data
        
    }catch (err) {
        return clientFetchErrObj
    }
}