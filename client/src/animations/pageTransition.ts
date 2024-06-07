import gsap from "gsap"
type Params = {
    to:string,
    banner1:HTMLElement|null,
    banner2:HTMLElement|null,
    bannersParent:HTMLElement|null,
    setIsNavigating:(newState:boolean) => void,
    router:any
} 

export const pageTransition = async ({to,banner1,banner2,setIsNavigating,router}:Params) => {
    const tl = gsap.timeline()
    if (banner1 && banner2){
        setIsNavigating(true)
        await tl.set([banner1,banner2],{   
            width:'50%',
            height:0,
            // top:'50%',
            // left:'50%',
            // xPercent:-50,
            // yPercent:-50
        })
        await tl.to([banner1,banner2],{
            height:"60%",
            width:"60%",

        })
        await tl.to(banner2,{
            height:"50%",
            width:"50%",

        })

        //await router?.push(to)
        // tl.to([banner1,banner2],{
        //     scaleY:"100%",
        //     scaleX:"100%",
        //     stagger:.3,
        //     //...center
        // })
        setIsNavigating(false)
    }
    
}