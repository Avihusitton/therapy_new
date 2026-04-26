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
                scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="text-xl font-light text-[#4C4A49] hover:opacity-80 transition-opacity">
                    אביהו סיטון
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className={`text-sm font-light transition-colors hover:text-[#A2673E] ${
                                router.pathname === link.path ? 'text-[#A2673E] font-normal' : 'text-[#4C4A49]'
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <button 
                    className="md:hidden text-[#4C4A49]" 
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "סגור תפריט" : "פתח תפריט"}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            {isOpen && (
                <nav className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 py-6 px-6 flex flex-col gap-4 animate-in slide-in-from-top" aria-label="תפריט נייד">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            onClick={closeMenu}
                            className={`text-base font-light transition-colors ${
                                router.pathname === link.path ? 'text-[#A2673E] font-normal' : 'text-[#4C4A49]'
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
