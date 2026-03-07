"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Anasayfa", href: "/" },
        { name: "Hizmetler", href: "#services" },
        { name: "Projeler", href: "#projects" },
        { name: "Hakkımızda", href: "#about" },
        { name: "İletişim", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "glass py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="text-2xl font-bold tracking-tighter text-foreground">
                                Tyt<span className="text-accent">Art</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium hover:text-accent transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="tel:+905000000000"
                            className="flex items-center space-x-2 bg-accent text-white px-4 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
                        >
                            <Phone size={16} />
                            <span>Hemen Ara</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-foreground p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-full left-0 w-full glass shadow-xl"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-4 text-base font-medium hover:bg-accent/10 rounded-lg transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <Link
                                    href="tel:+905000000000"
                                    className="w-full flex justify-center items-center space-x-2 bg-accent text-white px-4 py-4 rounded-xl font-bold"
                                >
                                    <Phone size={18} />
                                    <span>Hemen Ara</span>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
