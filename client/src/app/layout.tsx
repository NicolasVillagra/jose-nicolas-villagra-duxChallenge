import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import 'primereact/resources/themes/lara-light-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';               
import 'primeicons/primeicons.css';                            
import 'primeflex/primeflex.css';
import "./globals.css";
import AppSidebar from "@/components/molecules/SideBar";
import Navbar from "@/components/molecules/navBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dux",
  description: "Dux challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Estructura principal */}
        <div className="min-h-screen flex flex-column">
          {/* Navbar (fija arriba) */}
         <Navbar/>

          {/* Contenedor de Sidebar + Contenido */}
          <div className="flex flex-grow-1">
            {/* Sidebar (fija a la izquierda) */}
            <AppSidebar/>

            {/* Contenido dinámico (páginas) */}
            <main className="p-4 flex-grow-1 ml-15rem ">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
