import { client } from '@/sanity/lib/client'
import { allServicesQuery } from '@/sanity/lib/queries'
import Link from 'next/link'
import Image from 'next/image'
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
                                key={service.slug.current}
                                href={`/hizmetler/${service.slug.current}`}
                                className="glass p-12 rounded-3xl hover:border-primary/30 transition-all duration-500 group"
                            >
                                <div className="mb-8 p-4 bg-white/5 w-fit rounded-2xl group-hover:bg-primary/10 transition-colors">
                                    <Icon className="text-primary" size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">{service.title}</h3>
                                <p className="text-zinc-400 leading-relaxed font-light">{service.description}</p>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}
