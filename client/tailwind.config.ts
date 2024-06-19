import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors:{
                "nightmare-black":'#000',
                'white':"#fff",
                
            },
            fontFamily: {
                'ivy-mode-regular':"var(--ivy-mode-regular)",
                'robert':'var(--robert-regular)'
            },
            container:{
                center:true,
                
            },
            screens:{
                xs:"410px"
            },
    
        
        },
    },
    plugins: [],
};
export default config;
