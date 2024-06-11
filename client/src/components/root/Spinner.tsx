import React from 'react'

type SpinnerProps = {
    className?:String,
}

function Spinner({className}: SpinnerProps) {
    return (
        <div 
        
            className={`aspect-square animate-spin rounded-full border-black border-2 border-t-transparent border-r-transparent  ${className}`}
        />
    )
}

export default Spinner