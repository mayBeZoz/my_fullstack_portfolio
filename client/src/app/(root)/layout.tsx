import React from 'react'
import Header from './_layout/Header'
import PageTransitionsProvider from '@/contexts/PageTransitionsProvider'
import Footer from './_layout/Footer'

function MainLayout({children}:Children) {
    return (
        <PageTransitionsProvider>
            <Header/>
            {children}
            <Footer/>
        </PageTransitionsProvider>
    )
}

export default MainLayout