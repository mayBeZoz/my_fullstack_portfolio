'use client'

import Image from "@/components/root/Image"
import useGetSkills from "@/hooks/useGetSkills"
import { BASE_URL, skillsRoute } from "@/services/api"

function Skills() {

    const {skills,isLoading} = useGetSkills()

    return (
        <section>
            <div className="container">
                <h2 className='font-ivy-mode-regular mb-20 text-8xl sm:text-9xl capitalize'>my skills</h2>
                <div className="grid w-full gap-0 grid-cols-[repeat(auto-fit,minmax(170px,1fr))]">
                    {
                        isLoading ? 
                        <></> :
                        skills?.map((skill:Skill,idx:number) => (
                            <div key={idx} className="w-full relative gap-2 flex flex-col justify-center items-center p-5 aspect-square">
                                <span className="absolute top-0 left-0 w-full h-[1px] bg-white"/>
                                <Image
                                    className='aspect-square w-[100px] object-cover' 
                                    src={`${BASE_URL}${skillsRoute}/${skill._id}/upload-image`} 
                                />
                                <p className='font-robert text-center text-xl'>{skill.name}</p>
                            </div>
                        ))
                        
                    }
                </div>
            </div>
        </section>
    )
}

export default Skills