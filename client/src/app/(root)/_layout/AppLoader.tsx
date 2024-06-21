'use client'

import { appLoaderAnimation } from "@/animations/appLoaderAnimation"
import { useEffect } from "react"


const TextHolder = () => (
    <div id='app_loader_text_holder' className='text-3xl uppercase font-robert'>
        <p className="opacity-0">a creative</p>
        <p className="opacity-0">web developer</p>
    </div>
)


const PercentHolder = () => (
    <div className=' mx-auto flex flex-col gap-5 sm:w-[400px] w-full'>
        <div id="app_loader_percent_holder" className="flex opacity-0 items-center text-3xl font-ivy-mode-regular justify-between">
            <div id="app_loader_percent">0</div>
            <div>%</div>
        </div>
        <span id="app_loader_percent_bar" className="h-[2px] w-0 bg-white block"/>
    </div>
)
function AppLoader() {

    useEffect(()=>{
        appLoaderAnimation()
    },[])

    return (
        <section 
            id='app_loader' 
            className='w-full h-screen text-white fixed top-0 left-0 z-[5000]'
        >
            <div className="relative w-full h-full">
                <span 
                    id="app_loader_overlay" 
                    className="absolute top-0 left-0 bg-zinc-900 w-full h-full z-0"
                />

                <div id="app_loader_content" className="container h-full relative z-20 flex flex-col justify-between py-12">
                    <TextHolder/>

                    <PercentHolder/>
                    
                    <div>
                        <h2 id="#app_loader_logo" className='text-8xl opacity-0 xs:text-9xl w-fit ml-auto font-bold capitalize font-robert'>zeyad.</h2>
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default AppLoader