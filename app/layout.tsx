import type {Metadata} from "next";
import {Geist_Mono, Manrope, Space_Grotesk} from "next/font/google";
import "./globals.css";
import Script from "next/script";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nedim Kevro | Frontend Developer",
  description: "Portfolio site for Nedim Kevro, a frontend developer focused on polished, scalable web experiences.",
  openGraph: {
    title: "Nedim Kevro | Frontend Developer",
    description: "Frontend developer portfolio featuring modern product work, polished UI systems, and scalable web experiences.",
    type: "website",
  },
};

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }

  function gtag(...args: any[]): void;
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <head>
        <meta name="description" content="Nedim Kevro - Frontend Developer Portfolio"/>
        <meta property="og:title" content="Nedim Kevro | Frontend Developer"/>
        <meta property="og:description" content="Specializing in clean, scalable React apps."/>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8VCZ0RRCN4"
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8VCZ0RRCN4');
          `}
        </Script>
      </head>
      <body
        className={`${spaceGrotesk.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        <div>{children}</div>
      </body>
    </html>
  );
}
