import Link from 'next/link'
import React from 'react'

function AdminPanel() {
    return (
        <section>
            <div className="container capitalize pt-40">
                <div className="flex flex-col items-center gap-7 text-center">
                    <h1 className='text-6xl sm:text-8xl font-ivy-mode-regular lg:w-4/5'>welcome to dashboard</h1>
                    <p className='font-robert text-xl'>damnit how do u got here</p>
                </div>

                <div className="flex font-robert mt-48 text-2xl justify-between items-center">
                    <Link href='admin-panel/skills'>skills</Link>
                    <Link href='admin-panel/infos'>infos</Link>
                    <Link href='admin-panel/projects'>projects</Link>
                </div>
                


            </div>
        </section>
    )
}

export default AdminPanel