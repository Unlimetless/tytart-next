import { client } from '@/sanity/lib/client'
import { postBySlugQuery } from '@/sanity/lib/queries'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const post = await client.fetch(postBySlugQuery, { slug })
    if (!post) return { title: 'Yazı Bulunamadı' }

    return {
        title: post.seo?.metaTitle || `${post.title} | TytArt Blog`,
        description: post.seo?.metaDescription,
        openGraph: {
            images: post.seo?.shareImage ? [urlFor(post.seo.shareImage).url()] : [],
        }
    }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = await client.fetch(postBySlugQuery, { slug })

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-secondary">
                <h1 className="text-2xl text-white font-light tracking-widest uppercase">Yazı bulunamadı.</h1>
            </div>
        )
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        image: post.mainImage ? [urlFor(post.mainImage).url()] : [],
        datePublished: post.publishedAt,
        author: {
            '@type': 'Organization',
            name: 'TytArt',
            url: 'https://www.tytart.com'
        },
        publisher: {
            '@type': 'Organization',
            name: 'TytArt',
            logo: {
                '@type': 'ImageObject',
                url: 'https://www.tytart.com/logo.png' // Placeholder, will be improved if needed
            }
        }
    }

    return (
        <main className="pt-48 pb-32">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="max-w-4xl mx-auto px-6">
                {post.mainImage && (
                    <div className="relative h-[400px] w-full mb-16 rounded-3xl overflow-hidden">
                        <Image
                            src={urlFor(post.mainImage).url()}
                            alt={post.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}

                <div className="mb-12">
                    <div className="flex items-center space-x-4 mb-6">
                        <span className="text-primary text-xs font-bold uppercase tracking-widest">Blog</span>
                        <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
                        <span className="text-zinc-500 text-xs uppercase tracking-widest">
                            {new Date(post.publishedAt).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter leading-tight">{post.title}</h1>
                </div>

                <div className="prose prose-invert prose-lg max-w-none text-zinc-400 font-light leading-relaxed prose-headings:text-white prose-a:text-primary">
                    <PortableText
                        value={post.body}
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
