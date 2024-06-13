import React from 'react'
import { BsGlobe2 } from 'react-icons/bs'

function PageSkeleton() {
    return (
        <div>
            <div className="flex mt-32">
                <div className="w-3/4 flex gap-16 flex-col">
                    <span className="shimmer w-[500px] h-[50px]"/>
                    <div className="flex text-lg font-robert gap-20 items-center">
                        
                        <div>
                            <span className='!w-1/3 shimmer !h-4'/>
                            <span className='!w-1/3 shimmer !h-4'/>
                        </div>
                        <div>
                            <span ></span>
                            <p></p>
                        </div>

                    </div>
                </div>
                <div>
                    


                </div>
            </div>

            <span className=' shimmer !h-4  my-32 mx-auto w-[80%] sm:w-[350px]'/>

            <div 
                className='w-full shimmer md:w-2/3 aspect-[1.5/1] mx-auto'
            />
        </div>
    )
}

export default PageSkeleton