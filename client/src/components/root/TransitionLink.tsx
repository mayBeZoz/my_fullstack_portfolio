'use client'


import { pageTransitionAnimation } from "@/animations/pageTransitionAnimation"
import { usePathname, useRouter } from "next/navigation"

type TransitionLinkProps = {
    href:string,
    className?:string
} & Children
function TransitionLink({href,children,className}:TransitionLinkProps) {
    
    const router = useRouter()
    const pathname = usePathname()

    const handleNavigation = async () => {
        if (href !== pathname) {
            const tl:GSAPTimeline = pageTransitionAnimation()
            await tl.play()
            await router.push(href)
            tl.reverse()
        }
    }
    
    return (
        <div className={`cursor-pointer ${className}`} onClick={handleNavigation}>
            {children}
        </div>
    )
}

export default TransitionLink