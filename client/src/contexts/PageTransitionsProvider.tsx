'use client'
import { pageTransition } from "@/animations/pageTransition";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useRef, useState } from "react";



const Context = createContext<PageTransitionsData>(undefined)




export default function PageTransitionsProvider ({children}:Children) {

    const [navigateTo,setNavigateTo] = useState<string>('')
    const banner1 = useRef<HTMLDivElement>(null)
    const banner2 = useRef<HTMLDivElement>(null)
    const bannersParent = useRef<HTMLDivElement>(null)
    const [isNavigating,setIsNavigating] = useState<boolean>(false)
    const router = useRouter()

    const contextData = {
        navigateTo,
        setNavigateTo
    }

    const startPageTransition = () => {
        pageTransition({
            to:navigateTo,
            banner1:banner1.current,
            banner2:banner2.current,
            bannersParent:bannersParent.current,
            setIsNavigating,
            router
        })
    }

    // useEffect(()=>{
    //     if (!isNavigating && navigateTo)
    //         startPageTransition()
    // },[navigateTo])

    
    return  (
        <>
            <Context.Provider value={contextData}>
                {children}

                {/* <div className="bg-yellow-400 w-full h-screen fixed top-0 left-0 " ref={bannersParent}>
                    <div className="justify-center flex items-center w-full h-full">
                        <span
                            ref={banner1}
                            className='h-screen absolute w-full z-[100] bg-red-800'
                            
                        />
                        <span
                            ref={banner2}
                            className='h-screen absolute w-full z-[101] bg-white'
                        />
                    </div>
                </div> */}
                    
            </Context.Provider>
        </>
    )
}


export const usePageTransitionProvider = () => useContext(Context)