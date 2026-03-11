import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { urlFor } from '@/sanity/lib/image'

const allProjectsQuery = groq`*[_type == "project"] | order(_createdAt desc){
  title,
  slug,
  image,
  category
}`

export default async function PortfolioPage() {
    const projects = await client.fetch(allProjectsQuery)

    return (
        <main className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">Projelerimiz</h1>
                    <p className="text-zinc-500 max-w-2xl mx-auto font-light leading-relaxed">
                        Mekanı sanata dönüştüren, lüks ve estetik detaylarla bezeli portfolyomuz.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects?.map((project: any) => (
                        <Link
                            key={project.slug?.current || Math.random()}
                            href={project.slug?.current ? `/projeler/${project.slug.current}` : '#'}
                            className="group"
                        >
                            <div className="relative aspect-video rounded-3xl overflow-hidden mb-8 border border-white/5">
                                {project.image && (
                                    <Image
                                        src={urlFor(project.image).url()}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                )}
                                <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-all duration-500"></div>
                                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                                    <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-white">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-2 block">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    )
}
