'use client'

import Input from "@/components/root/Input"
import LoadingButton from "@/components/root/LoadingButton"
import { useLogin } from "@/hooks/useLogin"
import { useState } from "react"

function Login() {

    const [email,setEmail] =  useState<string>('')
    const [password,setPassword] =  useState<string>('')

    const {mutate,isLoading} = useLogin(email,password)

    const handleSubmit = (e:any) => {
        e.preventDefault()
        console.log();
        
        mutate()
    }

    return (
        <section>
            <div className="container capitalize flex justify-center items-center h-screen">
                <form onSubmit={handleSubmit} className="flex w-full gap-10 xs:w-[400px] flex-col">
                    <Input
                        setValue={setEmail}
                        type="email"
                        value={email}
                        label="email"
                        required={true}
                    />

                    <Input
                        setValue={setPassword}
                        type="password"
                        value={password}
                        label="password"
                        required={true}
                    />

                    <LoadingButton 
                        isLoading={isLoading} 
                        type="submit" 
                        className="white_button !w-full"
                    >
                        login
                    </LoadingButton>
                </form>
            </div>
        </section>
    )
}

export default Login