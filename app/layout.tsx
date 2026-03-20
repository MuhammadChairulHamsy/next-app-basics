// "use client"


import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import type { Metadata } from 'next'



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'My Blog',
  description: '...',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [state, setState] = useState(0);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>

        <Navbar/>
        </div>
        {/* <div  className="px-44">
          <h1>Layout {state}</h1>
          <button onClick={() => setState(state + 1)}>Klik</button>
        </div> */}
      
        <div>

        {children}
        </div>
      </body>
    </html>
  );
}
