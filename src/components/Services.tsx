"use client";

import { motion } from "framer-motion";
import { HardHat, PaintBucket, Ruler, Home, Hammer, Waves } from "lucide-react";

const services = [
    {
        title: "Anahtar Teslim İnşaat",
        desc: "Sıfırdan modern ve lüks yapılar inşa ediyoruz. Projelendirmeden anahtar teslime kadar yanınızdayız.",
        icon: <Home className="w-6 h-6" />,
    },
    {
        title: "Lüks Tadilat & Yenileme",
        desc: "Mevcut mekanlarınızı modern mimari dokunuşlarla yeniden tasarlıyor ve hayata döndürüyoruz.",
        icon: <Hammer className="w-6 h-6" />,
    },
    {
        title: "İç Mimari & Dekorasyon",
        desc: "Estetik ve fonksiyonelliği birleştiren dekorasyon çözümleriyle yaşam alanlarınıza ruh katıyoruz.",
        icon: <PaintBucket className="w-6 h-6" />,
    },
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-5xl font-bold mb-4"
                    >
                        Uzmanlık <span className="text-accent">Alanlarımız</span>
                    </motion.h2>
                    <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-10 glass rounded-[2.5rem] border border-white/5 hover:border-accent/40 transition-all group relative overflow-hidden"
                        >
                            <div className="absolute -right-4 -top-4 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-all" />

                            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-foreground/60 leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
