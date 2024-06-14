'use client'

import ImageUploadInput from "@/components/root/ImageUploadInput"
import Input from "@/components/root/Input"
import LoadingButton from "@/components/root/LoadingButton"
import useGetSkill from "@/hooks/useGetSkill"
import { BASE_URL, skillsRoute } from "@/services/api"
import { postFormDataService } from "@/services/postFormDataService"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import useUpdateSkill from "../../_hooks/useUpdateSkill"
import PageLoader from "../../_components/PageLoader"
import useDeleteSkill from "../../_hooks/useDeleteSkill"

function SkillControls() {
    const [name,setName] = useState<string>('')
    const [imageFormData,setImageFormData] = useState<FormData|undefined>()
 
    const params = useParams() 
    const skillId = params?.skillId as string | undefined

    const [isButtonLoading,setIsButtonLoading] = useState<boolean>(false)
    const {skill,isLoading} = useGetSkill(skillId||'')
    const updateSkill = useUpdateSkill()
    const deleteSkill = useDeleteSkill()


    useEffect(()=>{

        console.log(skill);
        
        if (skill) {
            setName(skill.name)
        }
    },[skill,isLoading])


    const handleUpdateSkill = async () => {
        setIsButtonLoading(true)
        const res = await updateSkill(skillId||'',{name})
        
        if (res?.status_code === 1 && imageFormData) {
            await postFormDataService(`${skillsRoute}/${skillId}/upload-image`,imageFormData)
        }
        setIsButtonLoading(false)
    }
    
    
    return (
        <section>
            {
                isLoading ?
                <PageLoader/> :
                <div className="container capitalize flex gap-20 flex-col">
                    <p className="text-8xl font-ivy-mode-regular">edit skill</p>
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
                            currImageURL={`${BASE_URL}${skillsRoute}/${skillId}/upload-image`}
                        />
                    </div>

                    <div className="flex flex-col gap-5">
                        <LoadingButton
                            isLoading={isButtonLoading}
                            onClick={handleUpdateSkill}
                            type="submit"
                            className="white_button !w-full"
                        >
                            save changes
                        </LoadingButton>
                        <button onClick={_=>deleteSkill(skillId||'')} className="white_button">
                            delete
                        </button>
                    </div>
                </div>
            }
        </section>
    )
}

export default SkillControls