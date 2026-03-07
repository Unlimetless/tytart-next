"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "Modern Villa Projesi",
        category: "İnşaat",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "Lüks Daire Dekorasyonu",
        category: "Tadilat",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "Ofis Yenileme",
        category: "Tadilat",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    },
];

const Portfolio = () => {
    return (
        <section id="projects" className="py-24 bg-background/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-4 md:space-y-0">
                    <div>
                        <h2 className="text-3xl sm:text-5xl font-bold mb-4">Seçkin <span className="text-accent">Projelerimiz</span></h2>
                        <p className="text-foreground/60 max-w-lg">Mimari vizyonumuzu ve kalite standartlarımızı yansıtan son dönem çalışmalarımız.</p>
                    </div>
                    <button className="text-accent font-bold hover:underline flex items-center space-x-2">
                        Tümünü Gör
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer relative rounded-3xl overflow-hidden aspect-[4/5]"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                            <div className="absolute bottom-0 left-0 p-8 w-full transition-transform duration-500 transform translate-y-4 group-hover:translate-y-0">
                                <span className="text-xs font-bold text-accent uppercase tracking-widest mb-2 block">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {project.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
