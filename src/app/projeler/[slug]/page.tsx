import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'

const projectBySlugQuery = groq`*[_type == "project" && slug.current == $slug][0]{
  title,
  image,
  category,
  description
}`

export default async function ProjectPage({ params }: { params: { slug: string } }) {
    const project = await client.fetch(projectBySlugQuery, { slug: params.slug })

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl text-white">Proje bulunamadı.</h1>
            </div>
        )
    }

    return (
        <main className="pt-32 pb-24">
            <div className="max-w-5xl mx-auto px-6">
                {project.image && (
                    <div className="relative h-[500px] w-full mb-12 rounded-3xl overflow-hidden">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">{project.title}</h1>
                <p className="text-xl text-primary mb-12 font-light">{project.category}</p>
                <div className="prose prose-invert prose-lg max-w-none text-zinc-400 font-light text-justify">
                    {project.description}
                </div>
            </div>
        </main>
    )
}
