import React from 'react'

type InputProps = {
    type:'text'|'password'|'number'|'email',
    placeholder?:string,
    value:string,
    setValue:(newVal:string) => void,
    className?:string,
    label?:string,
    required?:boolean
}

function Input({setValue,label,required,type,value,className,placeholder}:InputProps) {
    return (
        <div className='relative w-full'>
            {
                label ? <label className='input_label'>{label}</label> : <></>
            }
            <input 
                onChange={(e)=> setValue(e.target.value)} 
                value={value}
                required={Boolean(required)}
                type={type}
                spellCheck={false}
                className={`${className} input`}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input