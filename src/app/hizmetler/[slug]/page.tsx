import { client } from '@/sanity/lib/client'
import { serviceBySlugQuery } from '@/sanity/lib/queries'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'

export default async function ServicePage({ params }: { params: { slug: string } }) {
    const service = await client.fetch(serviceBySlugQuery, { slug: params.slug })

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl text-white">Hizmet bulunamadı.</h1>
            </div>
        )
    }

    return (
        <main className="pt-32 pb-24">
            <div className="max-w-5xl mx-auto px-6">
                {service.image && (
                    <div className="relative h-[400px] w-full mb-12 rounded-3xl overflow-hidden">
                        <Image
                            src={service.image} // Simplification, normally use urlForImage
                            alt={service.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">{service.title}</h1>
                <p className="text-xl text-primary mb-12 font-light">{service.description}</p>
                <div className="prose prose-invert prose-lg max-w-none text-zinc-400 font-light">
                    <PortableText value={service.content} />
                </div>
            </div>
        </main>
    )
}
