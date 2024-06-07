import TransitionLink from '@/components/(root)/TransitionLink'
import React from 'react'

const links = [
    {
        name:'projects',
        href:"/projects"
    },
    {
        name:'contact',
        href:"/contact"
    }
]
function Header() {


    return (
        <header className='w-full fixed top-0 left-0 h-[100px]'>
            <div className='relative w-full h-full'>
                <div className='w-full h-full absolute top-0 left-0  bg-black/10 blur-lg'/>
                <div className="container relative z-20 h-full flex items-center justify-between">
                    <div className='w-fit'>
                        <h1 className="text-3xl font-robert font-semibold">Zeyad.</h1>
                    </div>


                    <nav className=' mr-20'>
                        <ul className='flex font-robert gap-10 justify-between'>
                            {
                                links.map((link,key)=> (
                                    <li className='text-lg w-fit uppercase' key={key}>
                                        <TransitionLink href={link.href}>
                                            {link.name}
                                        </TransitionLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header