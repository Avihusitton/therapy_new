import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <HelmetProvider>
            <div className="min-h-screen bg-[#FDF8F0] text-[#4C4A49] flex flex-col" dir="rtl" lang="he">
                <Header />
                <main className="flex-grow pt-20">
                    {children}
                </main>
                <Footer />
            </div>
        </HelmetProvider>
    );
}
