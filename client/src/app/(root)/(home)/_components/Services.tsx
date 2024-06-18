'use client'

import { useGetInfo } from "@/hooks/useGetInfo"

function Services() {

    const {info,isLoading} = useGetInfo()

    return (
        <section>
            <div className="container">
                <h2 className='font-ivy-mode-regular mb-20 text-8xl sm:text-9xl capitalize'>services</h2>
                <div className="grid w-full sm:w-[550px] gap-5 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
                    {
                        isLoading ? 
                        <></> :
                        info?.services.map((service:Service,idx:number) => (
                            <div key={idx} className="w-full capitalize">
                                <div className="flex font-ivy-mode-regular items-center gap-5">
                                    <span className="text-8xl h-[60px]">*</span>
                                    <h6 className="text-5xl">{service.name}</h6>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Services