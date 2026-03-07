'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

// Mock projects for design preview
const mockProjects = [
    {
        title: 'Modern Villa Tadilatı',
        category: 'Premium Tadilat',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    },
    {
        title: 'Lüks Rezidans Dekorasyon',
        category: 'İç Mimari',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
    },
    {
        title: 'Konsept Mağaza İnşaatı',
        category: 'Lüks İnşaat',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    },
]

const Portfolio = () => {
    return (
        <section id="projeler" className="py-32">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div className="max-w-xl">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-primary text-[10px] font-bold uppercase tracking-[0.3em]"
                        >
                            Portfolyomuz
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-bold mt-4 text-white"
                        >
                            Sanat İle Şekillenen <br /> Mekanlar
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-zinc-500 max-w-sm font-light leading-relaxed"
                    >
                        Her projemizde estetik, fonksiyonellik ve lüksü harmanlayarak
                        yaşam kalitenizi zirveye taşıyoruz.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {mockProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative cursor-pointer"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/40 transition-colors duration-500"></div>

                                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-white">
                                        <ArrowUpRight size={24} />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <span className="text-primary text-[10px] font-bold uppercase tracking-widest mb-2 block">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio
