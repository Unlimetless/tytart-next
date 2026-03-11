'use client'

import React from 'react'
import Link from 'next/link'
import { Instagram, Facebook, Linkedin, Twitter, Youtube, MapPin, Phone, Mail, ArrowRight } from 'lucide-react'
import { usePathname } from 'next/navigation'

const Footer = ({ settings }: { settings?: any }) => {
    const pathname = usePathname()
    const isStudio = pathname?.startsWith('/studio')

    if (isStudio) return null

    const socialIcons: { [key: string]: any } = {
        Instagram,
        Facebook,
        LinkedIn: Linkedin,
        Twitter,
        YouTube: Youtube,
    }

    return (
        <footer className="pt-24 pb-12 bg-secondary border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    {/* Brand & Map */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="text-3xl font-bold tracking-tighter text-white mb-8 block">
                            Tyt<span className="text-primary">Art</span>
                        </Link>
                        <p className="text-zinc-500 font-light leading-relaxed mb-8">
                            {settings?.description || "Mekanı sanata, hayalleri gerçeğe dönüştüren butik inşaat ve tadilat çözümleri."}
                        </p>
                        <div className="flex space-x-5">
                            {settings?.socialLinks?.map((social: any) => {
                                const Icon = socialIcons[social.platform]
                                return (
                                    <a
                                        key={social.platform}
                                        href={social.url}
                                        target="_blank"
                                        className="w-12 h-12 glass rounded-full flex items-center justify-center text-zinc-400 hover:text-primary transition-all hover:scale-110"
                                    >
                                        {Icon && <Icon size={20} />}
                                    </a>
                                )
                            })}
                        </div>
                    </div>

                    {/* Quick Navigation - Could also be dynamic, but keeping it standard for now or using a separate footer menu */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Hızlı Menü</h4>
                        <ul className="space-y-4">
                            {['Ana Sayfa', 'Hizmetlerimiz', 'Projelerimiz', 'Yazılar', 'İletişim'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-zinc-500 hover:text-primary transition-colors font-light text-sm flex items-center group">
                                        <ArrowRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">İletişim</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start space-x-4">
                                <MapPin size={20} className="text-primary mt-1 shrink-0" />
                                <span className="text-zinc-500 font-light text-sm leading-relaxed">
                                    {settings?.address || "İstanbul, Türkiye"}
                                </span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <Phone size={20} className="text-primary shrink-0" />
                                <span className="text-zinc-500 font-light text-sm">
                                    {settings?.phone || "+90 (5xx) xxx xx xx"}
                                </span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <Mail size={20} className="text-primary shrink-0" />
                                <span className="text-zinc-500 font-light text-sm">
                                    {settings?.email || "info@tytart.com"}
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Google Maps Embed */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Konumumuz</h4>
                        <div className="rounded-2xl overflow-hidden grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700 h-48 border border-white/5">
                            {settings?.googleMapsIframe ? (
                                <div dangerouslySetInnerHTML={{ __html: settings.googleMapsIframe }} className="w-full h-full" />
                            ) : (
                                <div className="w-full h-full bg-zinc-900 flex items-center justify-center text-zinc-700 text-xs">
                                    Harita Ayarı Yapılmadı
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-zinc-600 text-[10px] font-bold uppercase tracking-widest">
                    <p>© {new Date().getFullYear()} TytArt. Tüm hakları saklıdır.</p>
                    <div className="flex space-x-8">
                        <Link href="/gizlilik-politikasi" className="hover:text-primary transition-colors">Gizlilik Politikası</Link>
                        <Link href="/kullanim-kosullari" className="hover:text-primary transition-colors">Kullanım Koşulları</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
