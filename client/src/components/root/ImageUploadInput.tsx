'use client'

import React, { useState } from 'react'
import { BiSolidImage } from 'react-icons/bi'
import { ulid } from 'ulid'

type ImageUploadInput = {
    imageFormData:FormData|undefined,
    setImageFormData:(newState:FormData) => void,
    currImageURL?:string
}
function ImageUploadInput({imageFormData,setImageFormData,currImageURL}:ImageUploadInput) {

    const [currImageSrc,setCurrImageSrc] = useState<string|undefined>(currImageURL)

    const handleInputFiles = (e:any) => {
        const file = e.target.files[0]
        
       if (file) {
            const data = new FormData()
            data.append("image",file)
            setImageFormData(data)
            console.log(data);
            
            
            const reader = new FileReader()
            reader.onload = (e:any) => {
                setCurrImageSrc(e.target.result)
            }

            reader.readAsDataURL(file)
       }
    }
    


    const randomId = ulid()
    return (
        <div className='w-full'>
            
            <label htmlFor={randomId}>
                <div className="w-full cursor-pointer flex justify-center items-center h-[300px] border-4 border-zinc-700 rounded-2xl bg-zinc-900">
                    
                    {
                        currImageSrc? 
                        <img src={currImageSrc} className=' h-full object-cover'/>
                        :
                        <BiSolidImage className='text-9xl text-zinc-600'/>
                    }

                </div>
            </label>

            <input 
                onChange={handleInputFiles} 
                type="file" 
                className='hidden' 
                id={randomId} 
                multiple={false}
                accept=".png, .jpeg, .jpg, .webp"
            />
        </div>
    )
}

export default ImageUploadInput