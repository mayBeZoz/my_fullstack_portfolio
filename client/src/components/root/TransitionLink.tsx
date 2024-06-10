'use client'


import { pageTransitionAnimation } from "@/animations/pageTransitionAnimation"
import { usePathname, useRouter } from "next/navigation"

type TransitionLinkProps = {
    href:string,
} & Children
function TransitionLink({href,children}:TransitionLinkProps) {
    
    const router = useRouter()
    const pathname = usePathname()

    const handleNavigation = async () => {
        if (href !== pathname) {
            const tl:GSAPTimeline = pageTransitionAnimation()
            await tl.play()
            await router.push(href)
            await tl.reverse()
        }
    }
    
    return (
        <div className="cursor-pointer" onClick={handleNavigation}>
            {children}
        </div>
    )
}

export default TransitionLink