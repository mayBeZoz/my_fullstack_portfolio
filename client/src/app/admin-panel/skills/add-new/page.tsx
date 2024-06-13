'use client'

import ImageUploadInput from "@/components/root/ImageUploadInput"
import Input from "@/components/root/Input"
import LoadingButton from "@/components/root/LoadingButton"
import { useState } from "react"
import useAddSkill from "../../_hooks/useAddSkill"
import { postService } from "@/services/postService"
import { postFormDataService } from "@/services/postFormDataService"
import { skillsRoute } from "@/services/api"

function AddNewSkill() {
    
    const [name,setName] = useState<string>('')
    const [imageFormData,setImageFormData] = useState<FormData|undefined>()

    const [isButtonLoading,setIsButtonLoading] = useState<boolean>(false)
    const addSkill = useAddSkill()


    const handleAddSkill = async () => {
        setIsButtonLoading(true)
        const res = await addSkill({name})
        console.log(res);
        
        if (res.status_code === 1 && imageFormData) {
            const skill =  res.data
            await postFormDataService(`${skillsRoute}/${skill._id}/upload-image`,imageFormData)
        }
        setIsButtonLoading(false)
    }
    
    
    return (
        <section>
            <div className="container capitalize flex gap-20 flex-col">
                <p className="text-8xl font-ivy-mode-regular">edit project</p>
                <div className="flex-col gap-10 flex">
                    <Input
                        setValue={setName}
                        value={name}
                        type="text"
                        label="name"    
                    />

                    <ImageUploadInput
                        imageFormData={imageFormData}
                        setImageFormData={setImageFormData}
                    />
                </div>

                <LoadingButton
                    isLoading={isButtonLoading}
                    onClick={handleAddSkill}
                    type="submit"
                    className="white_button !w-full"
                >
                    add skill
                </LoadingButton>
            </div>
        </section>
    )
}

export default AddNewSkill