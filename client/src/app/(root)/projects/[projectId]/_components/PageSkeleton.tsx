import { motion } from 'framer-motion'
import React from 'react'

function PageSkeleton() {
    return (
        <motion.div exit={{opacity:0}}>
            <div className="flex mt-32">
                <div className="w-full md:w-3/4 flex gap-16 flex-col">
                    <span className="w-[90%] h-[80px] shimmer"/>
                    <div className="flex text-lg flex-col gap-20 sm:flex-row font-robert justify-between items-start sm:items-end">
                        
                        <div className="gap-20 flex">
                            <div>
                                <span className='shimmer mb-3 w-[110px] h-[20px]'/>
                                <span className='shimmer w-[110px] h-[20px]'/>
                            </div>
                            <div>
                                <span className='shimmer mb-3 w-[110px] h-[20px]'/>
                                <span className='shimmer w-[110px] h-[20px]'/>
                            </div>
                        </div>

                        <div className='flex gap-5 items-end'>
                            <span className='shimmer w-[30px] aspect-square'/>
                            <span className='shimmer w-[30px] aspect-square'/>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="w-full my-32 gap-4 flex-col flex">
                <span className="w-[80%] sm:w-[400px] h-[15px] shimmer"/>
                <span className="w-[80%] sm:w-[400px] h-[15px] shimmer"/>
                <span className="w-[80%] sm:w-[400px] h-[15px] shimmer"/>
                <span className="w-[80%] sm:w-[400px] h-[15px] shimmer"/>
            </div>

            <span className='w-full shimmer md:w-2/3 aspect-[1.5/1] mx-auto'/>
        </motion.div>
    )
}

export default PageSkeleton