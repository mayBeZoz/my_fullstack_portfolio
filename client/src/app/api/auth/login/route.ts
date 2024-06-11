import { loginRoute } from "@/services/api"
import { postService } from "@/services/postService"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST (req:Request) {
    const {email,password} = await req.json()
    const cookie = cookies()

    const loginRes = await postService(loginRoute,{email,password})
    const data = loginRes.data 

    if (data) {
        if (data.token) {
            cookie.set('access-token',data.token)
            console.log(data.token);
        }
    }

    return new NextResponse(JSON.stringify(loginRes),{status:200})
    


}