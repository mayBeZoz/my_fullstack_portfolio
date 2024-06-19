'use client'

import gsap from "gsap"
import { ReactNode, cloneElement, isValidElement, useEffect, useRef } from "react"

function MagneticButton({children}:Children) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        const magnetic = ref.current
        if (magnetic) {
            const xTo = gsap.quickTo(magnetic,"x",{ease:'elastic.out',duration:1})
            const yTo = gsap.quickTo(magnetic,"y",{ease:'elastic.out',duration:1})

            magnetic.addEventListener('mousemove',(e)=>{
                const {height,width,left,top} = magnetic.getBoundingClientRect()
                const {clientX,clientY} = e

                const x = clientX - (left + width / 2) 
                const y = clientY - (top + height / 2) 
                xTo(x)
                yTo(y)
                
            })

            magnetic.addEventListener('mouseleave',()=>{
                xTo(0)
                yTo(0)
            })
        }
    },[])

    return (
        <div 
            ref={ref}
            className="w-fit"
        >
            {children}
        </div>
    )
}

export default MagneticButton