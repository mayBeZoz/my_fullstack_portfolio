import React from 'react'
import Header from './_layout/Header'
import PageTransitionsProvider from '@/contexts/PageTransitionsProvider'

function MainLayout({children}:Children) {
    return (
        <PageTransitionsProvider>
            <Header/>
            {children}

        </PageTransitionsProvider>
    )
}

export default MainLayout