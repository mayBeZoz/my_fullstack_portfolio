'use client'

import { usePageTransitionProvider } from "@/contexts/PageTransitionsProvider"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

type TransitionLinkProps = {
    href:string,
} & Children
function TransitionLink({href,children}:TransitionLinkProps) {
    
    const pagesTransitionProviderData:PageTransitionsData = usePageTransitionProvider()
    const togglePageOut = pagesTransitionProviderData?.togglePageOutTransition
    
    const router = useRouter()


    const handleNavigation = () => {
        pagesTransitionProviderData?.setTogglePageOutTransition(true)        
    }
    
    // useEffect(()=>{
    //     if (togglePageOut) {
    //         console.log(href)

    //         setTimeout(()=>{
    //             router.push(href)
    //         },1100)
    //     }
    // },[togglePageOut])
    
    return (
        <span onClick={handleNavigation}>
            {children}
        </span>
    )
}

export default TransitionLink