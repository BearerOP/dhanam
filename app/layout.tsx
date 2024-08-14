"use client";
import React, { useState, useEffect } from 'react';
import { Manrope } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/themeprovider';
import Footer from '@/components/footer';
import MinimalLoader from '@/components/loader';

const manrope = Manrope({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setIsLoading(false), 1000); // Adjust the delay as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className={`${manrope.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {isLoading ? (
            <div className='h-screen w-full flex justify-center items-center'>

              <MinimalLoader />
            </div>
          ) : (
            <>
              <Toaster />
              {children}
              <Footer />
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}