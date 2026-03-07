import { client } from '@/sanity/lib/client'
import { allPostsQuery } from '@/sanity/lib/queries'
import Link from 'next/link'
import Image from 'next/image'

export default async function BlogPage() {
    const posts = await client.fetch(allPostsQuery)

    return (
        <main className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-24">Yazılar</h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {posts.map((post: any) => (
                        <Link
                            key={post.slug.current}
                            href={`/yazilar/${post.slug.current}`}
                            className="group"
                        >
                            <div className="relative aspect-video rounded-3xl overflow-hidden mb-8">
                                {post.mainImage && (
                                    <Image
                                        src={post.mainImage}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                )}
                            </div>
                            <span className="text-zinc-500 text-xs uppercase tracking-widest mb-4 block">
                                {new Date(post.publishedAt).toLocaleDateString('tr-TR')}
                            </span>
                            <h2 className="text-2xl font-bold text-white group-hover:text-primary transition-colors leading-tight">
                                {post.title}
                            </h2>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    )
}
