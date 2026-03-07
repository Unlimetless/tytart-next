import { client } from '@/sanity/lib/client'
import { postBySlugQuery } from '@/sanity/lib/queries'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'

export default async function PostPage({ params }: { params: { slug: string } }) {
    const post = await client.fetch(postBySlugQuery, { slug: params.slug })

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl text-white">Yazı bulunamadı.</h1>
            </div>
        )
    }

    return (
        <main className="pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                {post.mainImage && (
                    <div className="relative h-[500px] w-full mb-12 rounded-3xl overflow-hidden">
                        <Image
                            src={post.mainImage}
                            alt={post.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">{post.title}</h1>
                <div className="flex items-center text-zinc-500 mb-12 text-sm font-light">
                    <span>{new Date(post.publishedAt).toLocaleDateString('tr-TR')}</span>
                </div>
                <div className="prose prose-invert prose-lg max-w-none text-zinc-400 font-light">
                    <PortableText value={post.body} />
                </div>
            </div>
        </main>
    )
}
