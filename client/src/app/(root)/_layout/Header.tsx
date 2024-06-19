import MagneticButton from '@/components/root/MagneticButton'
import TransitionLink from '@/components/root/TransitionLink'
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
        <header className='w-full backdrop-blur-md z-[100] fixed top-0 left-0 h-[100px]'>
            <div className='relative w-full h-full'>
                <div className="container relative z-20 h-full flex items-center justify-between">
                    <div className='w-fit'>
                        <TransitionLink href={'/'}>
                            <h1 className="text-2xl xs:text-3xl font-robert font-semibold">Zeyad.</h1>
                        </TransitionLink>
                    </div>


                    <nav>
                        <ul className='flex font-robert gap-10 justify-between'>
                            {
                                links.map((link,key)=> (
                                    <li className='text-sm xs:text-lg w-fit uppercase' key={key}>
                                        <MagneticButton>
                                            <TransitionLink href={link.href}>
                                                {link.name}
                                            </TransitionLink>
                                        </MagneticButton>
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