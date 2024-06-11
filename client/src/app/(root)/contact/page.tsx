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
                <div className='w-full gap-10 flex'>
                    <div className='w-1/2'>
                        <h4 className='text-[9em] flex flex-col uppercase font-ivy-mode-regular'>
                            <span>get in</span>
                            <span>touch</span>
                        </h4>
                        <div className="w-full bg-red-500 h-[100px]">

                        </div>
                    </div>
                    <form className='w-1/2 flex flex-col gap-10'>
                        <Input
                            setValue={setEmail}
                            type='email'
                            label='email'
                            value={email}
                            required={true}
                        /> 
                        <Input
                            setValue={setName}
                            type='text'
                            label='name'
                            value={name}
                            required={true}
                        /> 
                        <Textarea
                            setValue={setMessage}
                            label='message'
                            value={message}
                            required={true}
                        />

                        <button className='white_button !w-full' type="submit">
                            send
                        </button>
                    </form>
                </div>
                <div>

                </div>
            </div>
        </section>
    )
}

export default Contact