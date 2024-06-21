import gsap from "gsap";
import { skewWithBlur } from "./animations";

const exitAnimation = (tl:GSAPTimeline) => {
    const contentHolder = document.getElementById('app_loader_content')
    const loaderOverlay = document.getElementById('app_loader_overlay')
    const loader = document.getElementById('app_loader')

    tl.fromTo(contentHolder,{
        opacity:1
    },{
        opacity:0,
        duration:1
    })
    tl.fromTo(loaderOverlay,{
        height:'100vh'
    },{
        height:'0vh',
        duration:1,
        ease:"circ.inOut",
    })
    tl.set(loader,{display:'none'})
}

export const appLoaderAnimation = async () => {
    
    const texts = document.querySelectorAll('#app_loader_text_holder p');
    const percent = document.getElementById('app_loader_percent')  as HTMLElement
    const percentHolder = document.getElementById('app_loader_percent_holder')
    const progressBar = document.getElementById('app_loader_percent_bar') as HTMLElement
    const logo = document.getElementById('#app_loader_logo')
    const tl = gsap.timeline()
    
    tl.fromTo(texts,skewWithBlur.from,skewWithBlur.to)
    tl.fromTo(logo,skewWithBlur.from,skewWithBlur.to)
    tl.fromTo(percentHolder,skewWithBlur.from,skewWithBlur.to,0)

    let currentPercent = 0
    const incInterval = setInterval(()=>{
        if (currentPercent !== 100) {
            currentPercent+=1
            percent.innerText = String(currentPercent)
            progressBar.style.width = `${currentPercent}%`
        }else {
            clearInterval(incInterval)
            exitAnimation(tl)
        }
    },50)
    
}




