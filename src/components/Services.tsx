'use client'

import React from 'react'
import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'

const Services = ({ services }: { services?: any[] }) => {
    // Default mock data if none provided
    const defaultServices = [
        { title: 'Lüks İnşaat', icon: 'HardHat', description: 'En üst segment malzemeler ve titiz işçilik ile hayalinizdeki yapıyı inşa ediyoruz.' },
        { title: 'Premium Tadilat', icon: 'Hammer', description: 'Mevcut mekanlarınızı modern dokunuşlarla yeniden canlandırıyor, fonksiyonel ve estetik alanlar yaratıyoruz.' },
        { title: 'İç Mimari & Tasarım', icon: 'Palette', description: 'Karakterinizi yansıtan, konfor ve lüksün birleştiği özgün iç mekan tasarımları imzalıyoruz.' },
    ]

    const items = services && services.length > 0 ? services : defaultServices;

    return (
        <section id="hizmetler" className="py-32 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 space-y-8 md:space-y-0">
                    <div className="max-w-2xl">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Hizmetlerimiz</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight">
                            Mekanı Sanata <br />Dönüştüren Çözümler
                        </h2>
                    </div>
                    <p className="text-zinc-500 font-light text-lg max-w-sm border-l border-primary/20 pl-8">
                        Her projemizde estetik ve mühendisliği harmanlayarak benzersiz yaşam alanları sunuyoruz.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {items.map((service, index) => {
                        const Icon = (LucideIcons as any)[service.icon] || LucideIcons.HardHat;
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass group p-12 rounded-[2.5rem] hover:border-primary/40 transition-all duration-700 relative overflow-hidden"
                            >
                                {/* Background Image Preview if available */}
                                {service.image && (
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                                        <Image
                                            src={urlFor(service.image).url()}
                                            alt={service.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                )}

                                <div className="mb-10 w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center group-hover:bg-primary/20 group-hover:rotate-12 transition-all duration-500">
                                    <Icon className="text-primary" size={40} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-6 tracking-tight group-hover:text-primary transition-colors">{service.title}</h3>
                                <p className="text-zinc-400 font-light leading-relaxed mb-10">{service.description}</p>

                                <Link
                                    href={service.slug?.current ? `/hizmetler/${service.slug.current}` : "#"}
                                    className="text-xs font-bold text-white uppercase tracking-[0.2em] flex items-center group-hover:text-primary transition-colors"
                                >
                                    Detayları İnceleyin
                                    <LucideIcons.ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services
