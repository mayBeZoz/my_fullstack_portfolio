'use client'

import { createContext, useContext, useState } from "react";
import PopUp from "../components/contexts/PopUp";

const Context = createContext<PopUpProviderData>(undefined)


export default function PopUpProvider ({children}:Children) {
    
    const [popUpData,setPopUpData] = useState<PopUpData>({
        title:'',
        isPopUpOpen:false,
        message:'',
        popUpType:'confirm',
        resolveFunc:null
    })
    
    return (
        <Context.Provider value={{
            popUpData,
            setPopUpData
        }}>
            {children}
            <PopUp/>
        </Context.Provider>
    )
}

export const usePopUpProvider = () => useContext(Context)