'use client'

import { checkImageURL } from "@/utils/checkImgURL"
import { useEffect, useState } from "react"

type ImageProps = {
    src:string,
    className?:string,
    alt?:string,
    style?: React.CSSProperties,
}

function Image({src,className,alt,style}:ImageProps) {

    const [imgURL,setImgURL] = useState<string>('')
    const resolveImgUrl = () => setImgURL(src)


    useEffect(()=>{
        checkImageURL(src,resolveImgUrl)
    },[])

    return (
        !imgURL ? 
        <div 
            style={style}
            className={`shimmer ${className}`}
        /> : 
        <img 
            src={imgURL} 
            style={style} 
            alt={alt} 
            className={className} 
        />
    )
}

export default Image