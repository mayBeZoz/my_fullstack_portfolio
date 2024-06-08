import { BASE_URL, clientFetchErrObj } from "./api"

export const deleteService =  async (url:string) => {
    try {
        const res = await fetch(`${BASE_URL}${url}`,{
            method:"DELETE",
        })
        const data =  await res.json()
        if (res.ok) {
            return data
        }
    }catch (err) {
        return clientFetchErrObj
    }
}