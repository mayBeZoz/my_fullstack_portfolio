'use client'

import useGetSkills from '@/hooks/useGetSkills'
import Link from 'next/link'
import React from 'react'
import PageLoader from '../_components/PageLoader'
import { BASE_URL, skillsRoute } from '@/services/api'
import Image from '@/components/root/Image'

function SkillsPanel() {

    const {skills,isLoading} = useGetSkills()

    return (
        <section>
            {
                isLoading ? 
                <PageLoader/> : 
                <div className="my-24 capitalize container">
                    <h1 className="text-8xl font-ivy-mode-regular mb-36">all skills</h1>
                    <Link href='/admin-panel/skills/add-new' className="white_button">add new</Link>
                    <div className="w-full mt-24 p-[2px] flex gap-[2px] bg-zinc-900 flex-col sm:grid sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
                        {
                            skills?.map((skill:Skill,idx:number) => (
                                <Link 
                                    href={`/admin-panel/skills/${skill._id}`} 
                                    key={idx} 
                                    className='w-full bg-nightmare-black hover:bg-zinc-400/30 duration-200 aspect-square flex-col flex justify-center p-4 items-center gap-2'
                                >
                                    <Image 
                                        className='aspect-square h-[150px]' 
                                        src={`${BASE_URL}${skillsRoute}/${skill._id}/upload-image`} 
                                    />
                                    <p className='font-robert text-xl'>{skill.name}</p>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            }
        </section>
    )
}

export default SkillsPanel