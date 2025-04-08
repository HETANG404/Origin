import type { Metadata } from "next";
import "./globals.css";



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
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
