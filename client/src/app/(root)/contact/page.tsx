'use client'

import Input from '@/components/root/Input'
import Marquee from '@/components/root/Marquee'
import Textarea from '@/components/root/Textarea'
import React, { useState } from 'react'

function Contact() {

    const [email,setEmail] = useState<string>('')
    const [name,setName] = useState<string>('')
    const [message,setMessage] = useState<string>('')


    return (
        <section>
            <div className="container mt-[100px] pt-[80px] capitalize">
                <div className='w-full flex-col gap-10 flex'>
                    <div className='w-full'>
                        <div className='text-7xl xs:text-8xl leading-[70px] sm:text-9xl lg:text-[10em] sm:leading-[150px] flex flex-col uppercase font-ivy-mode-regular'>
                            <div className='flex gap-3'>
                                <div>
                                    <div>lets</div>
                                    <div>work</div>
                                </div>
                                <p className='text-sm w-[600px] ml-auto capitalize font-robert'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum iste reprehenderit odit suscipit facilis soluta natus distinctio, animi maxime? A repellat eum animi illum ipsa? Voluptatibus atque porro suscipit asperiores dolorem molestias consequatur sit itaque facilis, omnis cumque at, voluptate quisquam! Eos nam accusamus amet distinctio laudantium aut maxime nihil?</p>
                            </div>
                            <div>together</div>
                        </div>
                        
                    </div>
                    <div className="w-full"></div>
                </div>
                
            </div>
        </section>
    )
}

export default Contact