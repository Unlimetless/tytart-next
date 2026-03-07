"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { HardHat, PaintBucket, Ruler } from 'lucide-react'

const services = [
    {
        title: 'Lüks İnşaat',
        description: 'Hayallerinizdeki yapıyı en kaliteli malzemeler ve kusursuz işçilikle sıfırdan inşa ediyoruz.',
        icon: <HardHat className="text-primary" size={40} />,
    },
    {
        title: 'Premium Tadilat',
        description: 'Mevcut yaşam alanlarınızı modern dokunuşlarla yeniliyor, konfor ve şıklığı bir araya getiriyoruz.',
        icon: <Ruler className="text-primary" size={40} />,
    },
    {
        title: 'İç Mimari & Tasarım',
        description: 'Kişiliğinizi yansıtan, fonksiyonel ve estetik iç mekanlar tasarlıyoruz.',
        icon: <PaintBucket className="text-primary" size={40} />,
    },
]

const Services = () => {
    return (
        <section id="hizmetler" className="py-32 bg-secondary/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-primary text-[10px] font-bold uppercase tracking-[0.3em]"
                    >
                        Neler Yapıyoruz?
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mt-4 text-white"
                    >
                        Uzmanlık Alanlarımız
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-12 rounded-3xl hover:border-primary/30 transition-all duration-500 group"
                        >
                            <div className="absolute -right-4 -top-4 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-all" />

                            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-zinc-400 leading-relaxed font-light">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
