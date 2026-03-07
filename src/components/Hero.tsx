"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')",
                    }}
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-accent uppercase border border-accent/30 rounded-full bg-accent/10">
                        LÜKS İNŞAAT & TADİLAT
                    </span>
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-6">
                        Hayallerinizi <br />
                        <span className="text-accent underline decoration-accent/30 underline-offset-8">Sanata</span> Dönüştürüyoruz
                    </h1>
                    <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
                        Modern mimari, lüks dekorasyon ve anahtar teslim tadilat hizmetlerimizle yaşam alanlarınıza değer katıyoruz. TytArt ile yarını bugünden inşa edin.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <button className="w-full sm:w-auto px-8 py-4 bg-accent text-white font-bold rounded-lg flex items-center justify-center space-x-2 group hover:shadow-2xl hover:shadow-accent/40 transition-all">
                            <span>Projelerimizi İnceleyin</span>
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
