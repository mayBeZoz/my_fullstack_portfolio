import { BASE_URL, clientFetchErrObj } from "./api"

export const patchService =  async (url:string,body:any) => {
    try {
        const res = await fetch(`${BASE_URL}${url}`,{
            method:"PATCH",
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