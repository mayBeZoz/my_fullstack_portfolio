'use client'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()

function RootTemplate({children}:Children) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default RootTemplate