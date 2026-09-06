import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CustomCursor } from "@/components/custom-cursor";
import { ParticleNetwork } from "@/components/particle-network";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans", weight: ["400", "500", "600", "700"] });
const geistMono = Geist_Mono({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: { default: DATA.name, template: `%s | ${DATA.name}` },
  description: DATA.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background text-foreground font-sans antialiased relative cursor-none", geist.variable, geistMono.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <TooltipProvider delayDuration={0}>
            
            {/* Custom Magnetic Cursor */}
            <CustomCursor />
            
            {/* Base Background Colors */}
            <div className="fixed inset-0 z-[-2] bg-white dark:bg-[#050505] transition-colors duration-500"></div>
            
            {/* Soft Ambient Glow */}
            <div className="fixed left-0 right-0 top-[20%] z-[-1] m-auto h-[600px] w-[600px] rounded-full bg-primary/5 dark:bg-primary/10 blur-[150px] pointer-events-none"></div>

            {/* INTERACTIVE DISTRIBUTED NODE NETWORK */}
            <ParticleNetwork />
            
            {/* Main Content Wrapper */}
            <div className="relative z-10 max-w-3xl mx-auto py-12 pb-24 sm:py-24 px-6 md:px-8 min-h-screen">
              {children}
            </div>
            
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}