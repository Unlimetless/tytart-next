import { client } from '@/sanity/lib/client'
import { allServicesQuery } from '@/sanity/lib/queries'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'

export default async function ServicesPage() {
    const services = await client.fetch(allServicesQuery)

    return (
        <main className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Hizmetlerimiz</h1>
                    <p className="text-zinc-500 max-w-2xl mx-auto font-light leading-relaxed">
                        TytArt olarak inşaat, tadilat ve dekorasyon alanlarında premium çözümler sunuyoruz.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service: any) => {
                        const Icon = (LucideIcons as any)[service.icon] || LucideIcons.HardHat;
                        return (
                            <Link
                                key={service.slug?.current || Math.random()}
                                href={service.slug?.current ? `/hizmetler/${service.slug.current}` : '#'}
                                className="glass p-10 rounded-[2.5rem] hover:border-primary/40 transition-all duration-500 group"
                            >
                                <div className="mb-8 w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-all">
                                    <Icon className="text-primary" size={32} />
                                </div>
                                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{service.title}</h2>
                                <p className="text-zinc-400 font-light leading-relaxed mb-8">{service.description}</p>
                                <div className="text-xs font-bold text-white uppercase tracking-widest flex items-center group-hover:translate-x-2 transition-transform">
                                    Detaylar <LucideIcons.ArrowRight size={14} className="ml-2" />
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}
