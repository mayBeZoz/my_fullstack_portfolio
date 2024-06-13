'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'

function BackButton() {
    const router = useRouter()
    
    const handleClick = () => {
        router.back()
    }
    return (
        <div onClick={handleClick} className='!h-[50px] flex justify-center items-center aspect-square white_button !p-2'>
            <IoIosArrowBack  className='text-5xl'/>
        </div>
    )
}

export default BackButton