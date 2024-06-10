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
            </ReactLenis>    
        </QueryClientProvider>
    )
}

export default RootTemplate