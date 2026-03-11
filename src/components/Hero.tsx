'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image'

const Hero = ({ data }: { data?: any }) => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background with CMS Image */}
            <div className="absolute inset-0 z-0">
                {data?.heroImage ? (
                    <div
                        className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-[10s] scale-110"
                        style={{ backgroundImage: `url(${urlFor(data.heroImage).url()})` }}
                    />
                ) : (
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070')] bg-cover bg-center" />
                )}
                <div className="absolute inset-0 bg-secondary/70 backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-transparent to-secondary"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.5em] mb-10 border-b border-primary/20 pb-2">
                        Premium İnşaat & Mimari
                    </span>
                    <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold text-white mb-10 tracking-tighter leading-[0.9]">
                        {data?.heroTitle || "Hayallerinizi Sanata Dönüştürüyoruz"}
                    </h1>
                    <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto mb-14 font-light leading-relaxed">
                        {data?.heroSubtitle || "Modern mimari, lüks dekorasyon ve anahtar teslim tadilat çözümleriyle yaşam alanlarınıza değer katıyoruz."}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="w-full sm:w-auto bg-primary text-secondary px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white hover:scale-105 transition-all duration-500 flex items-center justify-center group shadow-2xl">
                            Projelerimizi Keşfedin
                            <ArrowRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform" />
                        </button>
                        <Link href="#biz-kimiz" className="w-full sm:w-auto glass text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all duration-500 border border-white/10 text-center">
                            Biz Kimiz?
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Micro-animations */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4">
                <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em]">Kaydırın</div>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-px h-12 bg-gradient-to-b from-primary to-transparent"
                />
            </div>
        </section>
    )
}

export default Hero
