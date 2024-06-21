import type { Metadata } from "next";
import "../globals.css";
// _app.js or _app.tsx


export const metadata: Metadata = {
    title: "Zeyad Tamer",
    description: "A Frontend Web Developer Based in Egypt ",
    
};

export default function RootLayout({children}:Children) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="icon"
                    href="favicon.svg"
                    sizes="32x32"
                />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
