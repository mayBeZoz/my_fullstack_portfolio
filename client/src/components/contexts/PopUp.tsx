'use client'


import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { usePopUpProvider } from '../../contexts/PopUpContext'

function PopUp() {

    const popUpProviderData:PopUpProviderData = usePopUpProvider()
    const {message,title,isPopUpOpen,popUpType,resolveFunc} = popUpProviderData?.popUpData as PopUpData

    const hidePopUp = () => {
        popUpProviderData?.setPopUpData({
            ...popUpProviderData.popUpData,
            isPopUpOpen:false,
        })        
        
    }


    const handleResolveFunc = async () => {
        if (resolveFunc) {
            await resolveFunc()
            hidePopUp()
        }
    }

    return (
 
        <AnimatePresence>
            {
                isPopUpOpen ?        
                <motion.div
                    initial={{opacity:0}}
                    exit={{opacity:0}}
                    key='popUp'
                    animate={{opacity:1}}
                    className="fixed z-[600] capitalize top-0 left-0 w-full h-screen"
                >
                    <div className="relative flex justify-center items-center w-full h-full">
                        <div className="w-full h-screen absolute top-0 left-0 bg-black/40 backdrop-blur-sm z-10"/>
        
                        <div className="z-20 w-[90%] flex flex-col justify-center gap-10 items-center p-5 h-[300px] bg-zinc-900 border-zinc-700 border-2 rounded-2xl md:!w-[550px]">
        
                            <div className="flex flex-col gap-5 text-center">
                                <h5 className='text-3xl font-robert'>{title}</h5>
                                <p className='text-lg font-robert'>{message}</p>
                            </div>

                            <div className="flex gap-5">
                                {
                                    popUpType === 'alert' ? 
                                    <button 
                                        onClick={hidePopUp}                                    
                                        className='white_button rounded-lg'
                                    >
                                        continue
                                    </button>
                                    : 
                                    <>
                                        <button 
                                            onClick={hidePopUp}
                                            className="white_button rounded-lg"
                                        >
                                            cancel
                                        </button>
                                        <button 
                                            onClick={handleResolveFunc}
                                            className="white_button rounded-lg"
                                        >
                                            continue
                                        </button>
                                    </>

                                }
                            </div>

                        </div>
                    </div>
                </motion.div> : <></>
            }
        </AnimatePresence>
    )
}

export default PopUp