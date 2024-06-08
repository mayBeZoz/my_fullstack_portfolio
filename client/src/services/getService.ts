import { BASE_URL, clientFetchErrObj } from "./api"

export const getService = async (url:string) => {
    try {
        const res = await fetch(`${BASE_URL}${url}`)
        const data =  await res.json()
        if (res.ok) {
            return data
        }
    }catch (err) {
        return clientFetchErrObj
    }
}