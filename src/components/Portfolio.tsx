'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'

const Portfolio = ({ projects }: { projects?: any[] }) => {
    const defaultProjects = [
        { title: 'Modern Villa Restorasyonu', category: 'Tadilat', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071' },
        { title: 'Lüks Rezidans Tasarımı', category: 'Mimari Tasarım', image: 'https://images.unsplash.com/photo-1600585154340-be6199fbfd00?q=80&w=2070' },
        { title: 'Kurumsal Ofis Projesi', category: 'Dekorasyon', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069' },
    ]

    const items = projects && projects.length > 0 ? projects : defaultProjects;

    return (
        <section id="projeler" className="py-32 bg-background-soft relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24">
                    <div className="max-w-2xl">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Portfolyomuz</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight">
                            İmza Attığımız <br />Eşsiz Projeler
                        </h2>
                    </div>
                    <Link href="/projeler" className="hidden md:flex items-center text-xs font-bold text-white uppercase tracking-widest hover:text-primary transition-colors group">
                        Tüm Projeleri İncele
                        <ArrowUpRight size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {items.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative cursor-pointer"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem]">
                                <Image
                                    src={typeof project.image === 'string' ? project.image : urlFor(project.image).url()}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/40 transition-colors duration-500"></div>

                                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                                    <div className="w-16 h-16 glass rounded-full flex items-center justify-center text-white border-white/20">
                                        <ArrowUpRight size={28} />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 px-4">
                                <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-3 block">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 md:hidden flex justify-center">
                    <Link href="/projeler" className="bg-primary text-secondary px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest">
                        Tüm Projeleri İncele
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
