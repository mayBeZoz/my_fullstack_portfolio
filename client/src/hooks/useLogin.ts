import { useRouter } from "next/navigation"
import { useMutation } from "react-query"

const login = async (email:string,pwd:string) => {
    const res = await fetch('/api/auth/login',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            email:email,
            password:pwd
        })
    })

    return await res.json()
}

export function useLogin (email:string,password:string) {
    const router = useRouter()
    const {mutate,isLoading,isSuccess} = useMutation({
        mutationFn:async _ => login(email,password),
        onSuccess:(res)=>{            
            if (res.data && res.status_code >= 0) {
                console.log(res);
                router.push('/admin-panel')
            }
        },
        onError:()=>{
            console.log('login failed');
        },
    })
    return {mutate,isLoading,isSuccess}
}