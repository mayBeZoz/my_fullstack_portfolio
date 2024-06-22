'use client'

import Image from "@/components/root/Image"
import useGetSkills from "@/hooks/useGetSkills"
import { BASE_URL, skillsRoute } from "@/services/api"
import { AnimatePresence, motion } from "framer-motion"

type SkillProps = {
    skill:Skill
} 


const SkillSkeleton = () => {
    return (
        <motion.div exit={{opacity:0}} className="skill_box">
            <span className="skill_top_border"/>
            <span className="skill_bottom_border"/>
            
            <span className="skill_left_border"/>
            <span className="skill_right_border"/>
            

            <span
                className='skill_image shimmer duration-300 aspect-square relative z-10 w-[100px] object-contain' 
            />
            <p className='skill_title capitalize opacity-0 duration-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-robert text-center text-xl'>loading...</p>
        </motion.div>
    )
}


const Skill = ({skill}:SkillProps) => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} className="skill_box">
            <span className="skill_top_border"/>
            <span className="skill_bottom_border"/>
            
            <span className="skill_left_border"/>
            <span className="skill_right_border"/>
            

            <Image
                className='skill_image duration-300 aspect-square relative z-10 w-[100px] object-contain' 
                src={`${BASE_URL}${skillsRoute}/${skill._id}/upload-image`} 
            />
            <p className='skill_title opacity-0 duration-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-robert text-center text-xl'>{skill.name}</p>
        </motion.div>
    )
}
function Skills() {

    const {skills,isLoading} = useGetSkills()

    return (
        <section>
            <div className="container">
                <h2 className='font-ivy-mode-regular mb-20 text-8xl sm:text-9xl capitalize'>my skills</h2>
                <div className="grid w-full gap-0 grid-cols-[repeat(auto-fit,minmax(170px,1fr))]">
                    <AnimatePresence>
                        {
                            isLoading ? 
                            Array(10).fill('').map((_,idx:number) => <SkillSkeleton key={idx}/>) :
                            skills?.map((skill:Skill,idx:number) => <Skill key={idx} skill={skill}/>)
                            
                        }
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}

export default Skills