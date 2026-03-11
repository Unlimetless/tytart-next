import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import { Metadata } from 'next'

const projectBySlugQuery = groq`*[_type == "project" && slug.current == $slug][0]{
  title,
  image,
  category,
  description,
  seo
}`

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const project = await client.fetch(projectBySlugQuery, { slug })
    if (!project) return { title: 'Proje Bulunamadı' }

    return {
        title: project.seo?.metaTitle || `${project.title} | Proje Detayı`,
        description: project.seo?.metaDescription,
        openGraph: {
            images: project.seo?.shareImage ? [urlFor(project.seo.shareImage).url()] : [],
        }
    }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const project = await client.fetch(projectBySlugQuery, { slug })

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-secondary">
                <h1 className="text-2xl text-white font-light tracking-widest uppercase">Proje bulunamadı.</h1>
            </div>
        )
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: project.title,
        description: project.description,
        image: project.image ? [urlFor(project.image).url()] : [],
        author: {
            '@type': 'Organization',
            name: 'TytArt',
            url: 'https://www.tytart.com'
        }
    }

    return (
        <main className="pt-48 pb-32">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-start">
                    <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden">
                        <Image
                            src={urlFor(project.image).url()}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="pt-10">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.5em] mb-6 block">{project.category}</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-10 tracking-tighter leading-none">{project.title}</h1>
                        <div className="h-px w-20 bg-primary/30 mb-10"></div>
                        <p className="text-xl text-zinc-400 font-light leading-relaxed mb-12">
                            {project.description}
                        </p>

                        <div className="p-10 glass rounded-[2rem] border-white/5">
                            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6 border-b border-white/10 pb-4">Proje Detayları</h4>
                            <ul className="space-y-4">
                                <li className="flex justify-between text-sm">
                                    <span className="text-zinc-500 font-light">Kategori:</span>
                                    <span className="text-zinc-300 font-medium">{project.category}</span>
                                </li>
                                <li className="flex justify-between text-sm">
                                    <span className="text-zinc-500 font-light">Lokasyon:</span>
                                    <span className="text-zinc-300 font-medium">İstanbul</span>
                                </li>
                                <li className="flex justify-between text-sm">
                                    <span className="text-zinc-500 font-light">Tamamlanma:</span>
                                    <span className="text-zinc-300 font-medium">2024</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
