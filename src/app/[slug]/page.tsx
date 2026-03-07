import { client } from '@/sanity/lib/client'
import { pageBySlugQuery } from '@/sanity/lib/queries'
import { PortableText } from '@portabletext/react'

export default async function DynamicPage({ params }: { params: { slug: string } }) {
    const page = await client.fetch(pageBySlugQuery, { slug: params.slug })

    if (!page) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl text-white">Sayfa bulunamadı.</h1>
            </div>
        )
    }

    return (
        <main className="pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-12">{page.title}</h1>
                <div className="prose prose-invert prose-lg max-w-none text-zinc-400 font-light">
                    <PortableText value={page.content} />
                </div>
            </div>
        </main>
    )
}
