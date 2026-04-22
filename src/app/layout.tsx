import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Angeny Solutions LLC | Electrical Contracting",
  description: "Reliable residential and commercial electrical contracting services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">    
          {/* Google Analytics */}
      <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D29G2RTH9G"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D29G2RTH9G');
          `}
        </Script>
      <body className="min-h-screen flex flex-col bg-slate-950 text-slate-50">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        
      </body>
    </html>
  );
}