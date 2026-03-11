import { client } from '@/sanity/lib/client'
import { allPostsQuery } from '@/sanity/lib/queries'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

export default async function BlogPage() {
    const posts = await client.fetch(allPostsQuery)

    return (
        <main className="pt-48 pb-32 bg-secondary/20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-24">
                    <span className="text-primary text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Haberler & Duyurular</span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">Yazılarımız</h1>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {posts?.map((post: any) => (
                        <Link
                            key={post.slug?.current || Math.random()}
                            href={post.slug?.current ? `/yazilar/${post.slug.current}` : '#'}
                            className="group"
                        >
                            <div className="relative aspect-video rounded-[2rem] overflow-hidden mb-8 border border-white/5">
                                {post.mainImage && (
                                    <Image
                                        src={urlFor(post.mainImage).url()}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                )}
                                <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-all duration-500"></div>
                            </div>
                            <div className="flex items-center space-x-3 mb-4">
                                <span className="text-primary text-[10px] font-bold uppercase tracking-widest">Blog</span>
                                <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
                                <span className="text-zinc-500 text-[10px] uppercase tracking-widest font-medium">
                                    {new Date(post.publishedAt).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
                                </span>
                            </div>
                            <h2 className="text-2xl font-bold text-white group-hover:text-primary transition-colors leading-tight tracking-tight">
                                {post.title}
                            </h2>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    )
}
