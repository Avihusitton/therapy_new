// [Category A: UI / Design / Layout]
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'בית', path: '/' },
        { name: 'טיפול אישי', path: '/therapy' },
        { name: 'זוגיות', path: '/couples' },
        { name: 'מילואימניקים', path: '/reservists-workshops' },
        { name: 'אודות', path: '/about' },
        { name: 'צור קשר', path: '/contact' },
    ];

    const closeMenu = () => setIsOpen(false);

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
                scrolled 
                    ? 'bg-white/90 dark:bg-brand-secondary/90 backdrop-blur-md shadow-sm py-3' 
                    : 'bg-transparent py-5'
            }`}
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center gap-6 md:gap-12">
                    {/* Mobile Menu Toggle (Now on the Right) */}
                    <button 
                        className="md:hidden text-brand-text order-first" 
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "סגור תפריט" : "פתח תפריט"}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
                    </button>

                    <Link href="/" className="text-xl font-light text-brand-text dark:text-brand-text hover:opacity-80 transition-opacity shrink-0">
                        אביהו סיטון
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={`text-sm font-light transition-colors hover:text-brand-primary ${
                                    router.pathname === link.path ? 'text-brand-primary font-normal' : 'text-brand-text'
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* New Mobile Quick Links - Right Aligned */}
                <div className="md:hidden mt-2 overflow-x-auto no-scrollbar flex items-center justify-start gap-3 pb-1 scroll-smooth">
                    {navLinks.map((link, index) => (
                        <React.Fragment key={link.path}>
                            {index > 0 && (
                                <span className="text-brand-border/40 text-[10px] shrink-0" aria-hidden="true">|</span>
                            )}
                            <Link
                                href={link.path}
                                className={`text-[11px] whitespace-nowrap transition-colors shrink-0 ${
                                    router.pathname === link.path 
                                        ? 'text-brand-primary font-medium' 
                                        : 'text-brand-text/70 hover:text-brand-primary'
                                }`}
                            >
                                {link.name}
                            </Link>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            {isOpen && (
                <nav className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-brand-secondary shadow-lg border-t border-brand-border/10 py-6 px-6 flex flex-col gap-4 animate-in slide-in-from-top" aria-label="תפריט נייד">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            onClick={closeMenu}
                            className={`text-base font-light transition-colors ${
                                router.pathname === link.path ? 'text-brand-primary font-normal' : 'text-brand-text'
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    );
}
