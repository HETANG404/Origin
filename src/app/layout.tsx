import type { Metadata } from "next";
import "@/styles/globals.css";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

 export const metadata: Metadata = {
  title: 'Pixel + Geist Theme Switcher',
  description: 'Dark/Light theme with font change',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="flex mini-h-screen flex-col">
              <Header />
      
                {children}
                
              <Footer />

      </body>
    </html>
  );
}
