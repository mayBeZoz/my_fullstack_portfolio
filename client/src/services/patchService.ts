import { cookies } from "next/headers"
import { BASE_URL, clientFetchErrObj } from "./api"
import { getCookie, getCookies } from "cookies-next"

export const patchService =  async (url:string,body:any) => {

    const token = getCookies()['access-token'] || "no token in client"

    try {
        const res = await fetch(`${BASE_URL}${url}`,{
            method:"PATCH",
            body:JSON.stringify(body),
            headers:{
                'Content-Type':'application/json',
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