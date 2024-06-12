
import React from 'react'
import Header from './_layout/Header'
import Footer from './_layout/Footer'

function MainLayout({children}:Children) {

    return (
        <>
            <Header/>
            {children}
            <Footer/>

            
        </>
    )
}

export default MainLayout