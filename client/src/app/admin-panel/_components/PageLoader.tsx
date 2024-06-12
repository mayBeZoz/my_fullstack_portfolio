import Spinner from '@/components/root/Spinner'
import React from 'react'

function PageLoader() {
    return (
        <div className="h-screen w-full flex justify-center items-center">
            <Spinner className='w-[200px] border-4 border-white'/>
        </div>
    )
}

export default PageLoader