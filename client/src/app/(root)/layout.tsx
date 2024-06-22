
import React from 'react'
import Header from './_layout/Header'
import Footer from './_layout/Footer'
import AppLoader from './_layout/AppLoader'

function MainLayout({children}:Children) {

    return (
        <>
            {/* <AppLoader/> */}
            <Header/>
            {children}
            <Footer/>
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
        </>
    )
}

export default MainLayout