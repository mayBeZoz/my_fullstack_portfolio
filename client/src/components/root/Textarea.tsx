import React from 'react'
type TextareaProps = {
    placeholder?:string,
    value:string,
    setValue:(newVal:string) => void,
    className?:string,
    label?:string,
    required?:boolean
}
function Textarea({setValue,value,className,label,placeholder,required}:TextareaProps) {
    return (
        <div className="relative w-full">
            {label ? <label className='input_label'>{label}</label> : <></>}
            <textarea 
                className={`textarea ${className}`} 
                required={Boolean(required)}
                onChange={(e)=> setValue(e.target.value)}
                value={value}
                placeholder={placeholder}
                
            ></textarea>
        </div>
    )
}

export default Textarea