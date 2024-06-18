'use client'
import {ReactLenis} from "@studio-freight/react-lenis";
import 'react-toastify/dist/ReactToastify.css';

import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ToastContainer } from "react-toastify";
import PopUpProvider from "@/contexts/PopUpContext";

const queryClient = new QueryClient()

function RootTemplate({children}:Children) {

    return (
        <QueryClientProvider client={queryClient}>
            <ReactLenis root>
                <PopUpProvider>
                    {children}         
                </PopUpProvider>
                <ToastContainer />
            </ReactLenis>    
        </QueryClientProvider>
    )
}

export default RootTemplate