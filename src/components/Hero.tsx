'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop"
                    alt="Lüks Mimari Tasarım"
                    fill
                    className="object-cover scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-secondary/60 backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-transparent to-secondary"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                        Lüks İnşaat & Tadilat
                    </span>

                    <h1 className="text-5xl md:text-8xl font-bold leading-[1.1] tracking-tighter text-white mb-8">
                        Hayallerinizi <br />
                        <span className="text-gradient">Sanate Dönüştürüyoruz</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl font-light leading-relaxed mb-12">
                        Modern mimari, lüks dekorasyon ve anahtar teslim tadilat hizmetlerimizle
                        yaşam alanlarınıza değer katıyoruz. TytArt ile yarını bugünden inşa edin.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="group bg-primary text-secondary px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white transition-all duration-500 flex items-center gap-3">
                            Projelerimizi İnceleyin
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 glass text-white font-bold rounded-lg hover:bg-white/10 transition-all">
                            Ücretsiz Teklif Alın
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
        </section>
    );
};

export default Hero;
