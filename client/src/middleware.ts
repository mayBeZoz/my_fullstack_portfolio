import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server"
import { AUTH_ROUTES, PROTECTED_ROUTES } from "./lib/routes";

export async function middleware (req:NextRequest) {
    const accessToken = cookies().get('access-token')
    
    const pathname = req.nextUrl.pathname
    
    if (!accessToken) {
        if (PROTECTED_ROUTES.includes(pathname)) {
            return NextResponse.redirect(new URL('/', req.url))
        }
    }else {
        if (AUTH_ROUTES.includes(pathname)) {
            return NextResponse.redirect(new URL('/', req.url))
        }
    }

    return NextResponse.next()
}


export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"]
}