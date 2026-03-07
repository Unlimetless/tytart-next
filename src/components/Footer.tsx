"use client";

import Link from "next/link";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-background border-t border-white/5 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-foreground mb-6 block">
                            Tyt<span className="text-accent">Art</span>
                        </Link>
                        <p className="text-foreground/50 leading-relaxed mb-6">
                            Modern mimari ve lüks yaşam alanları inşa ediyoruz. Yarını bugünden tasarlıyoruz.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 glass rounded-lg hover:text-accent transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="p-2 glass rounded-lg hover:text-accent transition-colors">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Hızlı Bağlantılar</h4>
                        <ul className="space-y-4">
                            <li><Link href="#services" className="text-foreground/50 hover:text-accent transition-colors">Hizmetlerimiz</Link></li>
                            <li><Link href="#projects" className="text-foreground/50 hover:text-accent transition-colors">Projeler</Link></li>
                            <li><Link href="#about" className="text-foreground/50 hover:text-accent transition-colors">Hakkımızda</Link></li>
                            <li><Link href="#contact" className="text-foreground/50 hover:text-accent transition-colors">İletişim</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Hizmetlerimiz</h4>
                        <ul className="space-y-4">
                            <li className="text-foreground/50">Anahtar Teslim İnşaat</li>
                            <li className="text-foreground/50">Lüks Tadilat</li>
                            <li className="text-foreground/50">Villa Tasarımı</li>
                            <li className="text-foreground/50">Dekorasyon</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">İletişim</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-foreground/50">
                                <MapPin size={20} className="text-accent shrink-0" />
                                <span>İstanbul, Türkiye</span>
                            </li>
                            <li className="flex items-center space-x-3 text-foreground/50">
                                <Phone size={20} className="text-accent shrink-0" />
                                <span>+90 (500) 000 00 00</span>
                            </li>
                            <li className="flex items-center space-x-3 text-foreground/50">
                                <Mail size={20} className="text-accent shrink-0" />
                                <span>info@tytart.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-10 text-center text-foreground/30 text-sm">
                    <p>© {new Date().getFullYear()} TytArt. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
