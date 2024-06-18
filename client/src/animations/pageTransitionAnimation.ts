import gsap from "gsap"

export const pageTransitionAnimation = ():GSAPTimeline => {
    const holder = '#transition_banners_holder'
    const banner1_holder = '#banner1_holder'
    const banner2_holder = '#banner2_holder'
    const banner1 = '#banner1'
    const banner2 = '#banner2'

    const tl = gsap.timeline({
        paused:true,
    })

    // setters
    tl.set(holder,{
        display:'block'
    })
    tl.set([banner1_holder,banner2_holder],{
        width:"70%",
        height:"75%"
    })
    //animations

    tl.to([banner1,banner2],{
        height:'100%',
        ease:"expo.inOut",
        stagger:{
            each:0.1
        },
        duration:.8
    })
    
    tl.to(banner1_holder,{
        scale:1.05,
        ease:"expo.inOut",
        duration:1
    },'<')

    tl.to([banner1_holder,banner2_holder],{
        height:'100%',
        width:'100%',
        ease:"expo.inOut",
        stagger:{
            each:0.1
        },
        duration:1.2

    },'<+0.2')
    
    return tl
}

