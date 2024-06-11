'use client'

import Spinner from "./Spinner"

type LoadingButtonProps = {
    className?:string,
    children:any,
    isLoading:boolean,
    onClick?:()=>void,
    type:'button'|"reset"|"submit"
}
function LoadingButton({children,onClick,type,isLoading,className}:LoadingButtonProps) {
    const handleButtonClick = () => {
        if (!isLoading) {
            onClick && onClick()
        }
    }

    return (
        <button 
            disabled={isLoading} 
            className={`${className} flex justify-center items-center`}
            type={type}
            style={{pointerEvents:isLoading ? 'none' : 'initial'}}
            onClick={handleButtonClick}
        >
            {
                isLoading ? <Spinner className='h-[30px]'/> : children
            }
        </button>
    )
}

export default LoadingButton