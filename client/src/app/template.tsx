'use client'
import {ReactLenis} from "@studio-freight/react-lenis";

import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()

function RootTemplate({children}:Children) {

    return (
        <QueryClientProvider client={queryClient}>
            <ReactLenis root>
                {children} 
                <div id='transition_banners_holder' className='w-full z-[400] h-screen hidden fixed top-0 left-0'>
                    <div className="relative w-full flex justify-center items-center h-full">
                        <div className='absolute flex' id='banner1_holder'>
                            <div 
                                className='w-full outline-8  h-0 bg-zinc-200'
                                id='banner1'
                            />
                        </div>
                        <div className='absolute' id='banner2_holder'>
                            <div 
                                className='w-full h-0 bg-black'
                                id='banner2'
                            />
                        </div>
                    </div>
                </div> 
            </ReactLenis>    
        </QueryClientProvider>
    )
}

export default RootTemplate