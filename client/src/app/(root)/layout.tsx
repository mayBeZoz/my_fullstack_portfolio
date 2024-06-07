import React from 'react'
import Header from './_layout/Header'
import PageTransitionsProvider from '@/contexts/PageTransitionsProvider'
import ReactLenis from '@studio-freight/react-lenis/types'

function MainLayout({children}:Children) {
    return (
        <PageTransitionsProvider>
            <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
                <Header/>
                {children}
            </ReactLenis>

        </PageTransitionsProvider>
    )
}

export default MainLayout