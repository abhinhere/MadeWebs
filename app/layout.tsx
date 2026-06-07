import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import LenisProvider from "./Components/LenisProvider";
import CustomCursor from "./Components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MadeWebs | Creative Digital Agency",
  description: "MadeWebs is a creative digital agency specializing in premium web design, high-performance eCommerce development, custom branding, and result-driven digital marketing solutions.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
              window.scrollTo(0, 0);

              document.addEventListener('dragstart', function(e) {
                if (e.target.tagName === 'IMG') e.preventDefault();
              });
              document.addEventListener('contextmenu', function(e) {
                if (e.target.tagName === 'IMG') e.preventDefault();
              });
            `,
          }}
        />
      </head>
      <body className="flex flex-col bg-[#078fcd] min-h-screen">
        <LenisProvider>
          <CustomCursor />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
