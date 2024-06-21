export const skewWithBlur = {
    from: {
        skewX:-45,
        yPercent:100,
        filter:"blur(10px)",
        opacity:0
    },
    to:{        
        skewX:0,
        yPercent:0,
        filter:"blur(0px)",
        opacity:1,
        duration:1,
        stagger:{
            each:0.3
        },
        ease:'ease.inOut'
        
    }
    
}
