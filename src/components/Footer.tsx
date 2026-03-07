'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
    return (
        <footer id="iletisim" className="bg-secondary pt-24 pb-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    {/* Brand */}
                    <div className="space-y-8">
                        <Link href="/" className="text-3xl font-bold tracking-tighter text-white">
                            Tyt<span className="text-primary">Art</span>
                        </Link>
                        <p className="text-zinc-500 font-light leading-relaxed">
                            Mekanı sanata, hayalleri gerçeğe dönüştüren butik inşaat ve tadilat çözümleri.
                        </p>
                        <div className="flex space-x-5">
                            <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center text-zinc-400 hover:text-primary transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center text-zinc-400 hover:text-primary transition-colors">
                                <Facebook size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Hızlı Linkler</h4>
                        <ul className="space-y-4">
                            <li><Link href="#hizmetler" className="text-zinc-500 hover:text-primary transition-all font-light">Hizmetlerimiz</Link></li>
                            <li><Link href="#projeler" className="text-zinc-500 hover:text-primary transition-all font-light">Projelerimiz</Link></li>
                            <li><Link href="#" className="text-zinc-500 hover:text-primary transition-all font-light">Hakkımızda</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">İletişim</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start space-x-4">
                                <MapPin size={20} className="text-primary mt-1 shrink-0" />
                                <span className="text-zinc-500 font-light">İstanbul, Türkiye</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <Phone size={20} className="text-primary shrink-0" />
                                <span className="text-zinc-500 font-light">+90 (5xx) xxx xx xx</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <Mail size={20} className="text-primary shrink-0" />
                                <span className="text-zinc-500 font-light">info@tytart.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Bize Katılın</h4>
                        <p className="text-zinc-500 font-light mb-6 text-sm">En yeni projelerimizden haberdar olun.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="E-posta adresiniz"
                                className="w-full glass rounded-xl py-4 px-6 text-white text-sm outline-none focus:border-primary/50 transition-colors"
                            />
                            <button className="absolute right-2 top-2 bg-primary text-secondary p-2 rounded-lg hover:bg-white transition-colors">
                                <ArrowUpRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-zinc-600 text-xs font-light">
                        © {new Date().getFullYear()} TytArt. Tüm hakları saklıdır.
                    </p>
                    <div className="flex space-x-8 text-zinc-600 text-xs font-light">
                        <Link href="#" className="hover:text-primary">Gizlilik Politikası</Link>
                        <Link href="#" className="hover:text-primary">Kullanım Koşulları</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

const ArrowUpRight = ({ size }: { size: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
)

export default Footer
