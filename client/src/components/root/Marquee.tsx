'use  client'

import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'


type MarqueeProps = {
    items:any[],
    direction:'left'|'right',
    duration?:number,
    tracking?:number

}

function Marquee({items,duration,tracking,direction}:MarqueeProps) {
    const itemsRefArray = useRef<(null|HTMLDivElement)[]>([])
    const itemsLen = itemsRefArray.current.length

    useEffect(()=>{
        itemsRefArray.current.forEach((item,idx) => {
            const width = item?.getBoundingClientRect().width
            const dur = duration || 10
            const track = tracking || 2

            const delay = (dur/(itemsLen/track))*(itemsLen - (idx+1))*-1
            gsap.fromTo(item,{
                [direction]:'100%',
            },{
                [direction]:`-${width}px`,
                duration:dur,
                delay,
                ease:'none',
                repeat:-1
            })
        })
    },[])

    return (
        <div className='w-full h-full overflow-hidden'>
            <div className="relative flex w-full h-full">
                {
                    items.map((item,index)=> (
                        <div
                            key={index} 
                            ref={(el) => {itemsRefArray.current[index] = el}}
                            className='absolute top-0 whitespace-nowrap'
                        >
                            {item}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Marquee