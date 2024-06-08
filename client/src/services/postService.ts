import { BASE_URL, clientFetchErrObj } from "./api"

export const postService =  async (url:string,body:any) => {
    try {
        const res = await fetch(`${BASE_URL}${url}`,{
            method:"POST",
            body:JSON.stringify(body),
            headers:{
                'Content-Type':'application/json'
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