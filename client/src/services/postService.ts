import { getCookie } from "cookies-next"
import { BASE_URL, clientFetchErrObj } from "./api"

export const postService =  async (url:string,body:any) => {
    
    try {
        const res = await fetch(`${BASE_URL}${url}`,{
            method:"POST",
            body:JSON.stringify(body),
            headers:{
                'Content-Type':'application/json',
                'token':getCookie('access-token')||''

            }
        })
        
        const data = await res.json()
        return data
        
    }catch (err) {
        return clientFetchErrObj
    }
}