'use client'

import { motion } from "framer-motion";
import { createContext, useContext, useState } from "react";



const Context = createContext<PageTransitionsData>(undefined)




export default function PageTransitionsProvider ({children}:Children) {

    const [togglePageInTransition,setTogglePageInTransition] = useState<boolean>(false)
    const [togglePageOutTransition,setTogglePageOutTransition] = useState<boolean>(false)

    const contextData = {
        togglePageInTransition,
        togglePageOutTransition,
        setTogglePageInTransition,
        setTogglePageOutTransition
    }
    
    return  (
        <>
            <Context.Provider value={contextData}>
                {children}
                {
                    togglePageInTransition?(
                    
                        <motion.div
                            // animate={{
                                
                            // }}
                            id='page-in-banner'
                            className='w-full fixed top-0 z-10 left-0 h-[100vh] bg-nightmare-black'
                        />
                    ):<></>
                }
                {
                    togglePageOutTransition?(
                        <motion.div
                            initial={{
                                scale:0
                            }}
                            animate={{
                                scale:1
                            }}
                            transition={{
                                duration:1,
                                ease:"easeIn"
                            }}
    
                            id='page-out-banner'
                            className='w-full fixed top-0 z-20 left-0 h-[100vh] bg-white'
                        
                        />
                    ):<></>
                }
            </Context.Provider>
        </>
    )
}


export const usePageTransitionProvider = () => useContext(Context)