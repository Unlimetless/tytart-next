'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

interface NavLink {
    label: string;
    link?: string;
    slug?: string;
}

const Navbar = ({ menuItems }: { menuItems?: NavLink[] }) => {
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const defaultLinks = [
        { label: 'Hizmetlerimiz', link: '/hizmetler' },
        { label: 'Projelerimiz', link: '/#projeler' },
        { label: 'Yazılar', link: '/yazilar' },
        { label: 'İletişim', link: '/#iletisim' },
    ]

    const links = menuItems && menuItems.length > 0 ? menuItems : defaultLinks

    const getLinkHref = (link: NavLink) => {
        if (link.slug) return `/${link.slug}`
        return link.link || '#'
    }

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
        >
            <div className={`max-w-7xl mx-auto flex justify-between items-center transition-all duration-300 rounded-2xl px-8 py-4 ${scrolled ? 'glass' : 'bg-transparent'}`}>
                <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
                    Tyt<span className="text-primary">Art</span>
                </Link>

                <div className="hidden md:flex items-center space-x-10 text-xs font-medium uppercase tracking-widest text-zinc-400">
                    {links.map((link) => (
                        <Link key={link.label} href={getLinkHref(link)} className="hover:text-primary transition-colors">
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center space-x-6">
                    <button className="hidden sm:block bg-primary text-secondary px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white transition-all duration-300">
                        Teklif Al
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden mt-4 glass rounded-2xl overflow-hidden"
                    >
                        <div className="p-8 flex flex-col space-y-6 text-center">
                            {links.map((link) => (
                                <Link
                                    key={link.label}
                                    href={getLinkHref(link)}
                                    onClick={() => setIsOpen(false)}
                                    className="text-sm font-medium uppercase tracking-widest text-zinc-300 hover:text-primary"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <button className="bg-primary text-secondary px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-wider">
                                Teklif Al
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default Navbar
