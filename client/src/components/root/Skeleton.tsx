import React from 'react'
type SkeletonProps = {
    width?:number,
    height?:number,
    className?:string 
}
function Skeleton({width,height,className}:SkeletonProps) {
    return (
        <span 
        style={{
            width:width&&`${width}px`,
            height:height&&`${height}px`
        }}
        className={` 
        h-[10px] bg-white/25 block
        rounded-md w-full shimmer ${className}`}/>
    )
}

export default Skeleton