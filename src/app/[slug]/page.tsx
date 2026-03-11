import { client } from '@/sanity/lib/client'
import { pageBySlugQuery } from '@/sanity/lib/queries'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const page = await client.fetch(pageBySlugQuery, { slug })
    if (!page) return { title: 'Sayfa Bulunamadı' }

    return {
        title: page.seo?.metaTitle || `${page.title} | TytArt`,
        description: page.seo?.metaDescription,
        keywords: page.seo?.keywords,
        openGraph: {
            images: page.seo?.shareImage ? [urlFor(page.seo.shareImage).url()] : [],
        }
    }
}

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const page = await client.fetch(pageBySlugQuery, { slug })

    if (!page) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-secondary">
                <h1 className="text-2xl text-white font-light tracking-widest uppercase">Sayfa bulunamadı.</h1>
            </div>
        )
    }

    return (
        <main className="pt-48 pb-32">
            <div className="max-w-4xl mx-auto px-6">
                <div className="mb-20">
                    <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4 block">TytArt Mimarlık</span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none">{page.title}</h1>
                </div>

                <div className="prose prose-invert prose-lg max-w-none text-zinc-400 font-light leading-relaxed prose-headings:text-white prose-a:text-primary">
                    <PortableText
                        value={page.content}
                        components={{
                            types: {
                                image: ({ value }) => (
                                    <div className="relative aspect-video my-12 rounded-3xl overflow-hidden">
                                        <Image
                                            src={urlFor(value).url()}
                                            alt="Görsel"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                )
                            },
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
