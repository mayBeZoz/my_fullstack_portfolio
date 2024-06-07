'use client'
import { usePageTransitionProvider } from "@/contexts/PageTransitionsProvider"

type TransitionLinkProps = {
    href:string,
} & Children
function TransitionLink({href,children}:TransitionLinkProps) {
    
    const pagesTransitionProviderData:PageTransitionsData = usePageTransitionProvider()


    const handleNavigation = () => {
        pagesTransitionProviderData?.setNavigateTo(href)
    }
    
    return (
        <div className="cursor-pointer" onClick={handleNavigation}>
            {children}
        </div>
    )
}

export default TransitionLink