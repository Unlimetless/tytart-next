import { client } from '@/sanity/lib/client'
import { serviceBySlugQuery } from '@/sanity/lib/queries'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const service = await client.fetch(serviceBySlugQuery, { slug })
    if (!service) return { title: 'Hizmet Bulunamadı' }

    return {
        title: service.seo?.metaTitle || `${service.title} | Premium Hizmetlerimiz`,
        description: service.seo?.metaDescription,
        openGraph: {
            images: service.seo?.shareImage ? [urlFor(service.seo.shareImage).url()] : [],
        }
    }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const service = await client.fetch(serviceBySlugQuery, { slug })

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-secondary">
                <h1 className="text-2xl text-white font-light tracking-widest uppercase">Hizmet bulunamadı.</h1>
            </div>
        )
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.title,
        description: service.description,
        provider: {
            '@type': 'LocalBusiness',
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
            <div className="max-w-5xl mx-auto px-6">
                {service.image && (
                    <div className="relative h-[500px] w-full mb-16 rounded-[2.5rem] overflow-hidden">
                        <Image
                            src={urlFor(service.image).url()}
                            alt={service.title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent"></div>
                    </div>
                )}

                <div className="mb-16">
                    <span className="text-primary text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Hizmetlerimiz</span>
                    <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-none">{service.title}</h1>
                    <p className="text-2xl text-zinc-400 font-light max-w-3xl leading-relaxed">{service.description}</p>
                </div>

                <div className="prose prose-invert prose-lg max-w-none text-zinc-400 font-light leading-relaxed prose-headings:text-white prose-a:text-primary">
                    <PortableText
                        value={service.content}
                        components={{
                            marks: {
                                link: ({ children, value }) => {
                                    const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
                                    return (
                                        <Link href={value.href} rel={rel} className="text-primary hover:underline underline-offset-4">
                                            {children}
                                        </Link>
                                    )
                                }
                            }
                        }}
                    />
                </div>
            </div>
        </main>
    )
}
