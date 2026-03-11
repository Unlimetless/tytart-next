export default {
    name: 'seo',
    title: 'SEO Ayarları',
    type: 'object',
    fields: [
        {
            name: 'metaTitle',
            title: 'Meta Başlığı',
            type: 'string',
            description: 'Arama motorlarında görünecek başlık (önerilen: 50-60 karakter)',
        },
        {
            name: 'metaDescription',
            title: 'Meta Açıklaması',
            type: 'text',
            description: 'Arama motorlarında görünecek açıklama (önerilen: 150-160 karakter)',
        },
        {
            name: 'keywords',
            title: 'Anahtar Kelimeler',
            type: 'array',
            of: [{ type: 'string' }],
            options: { layout: 'tags' }
        },
        {
            name: 'shareImage',
            title: 'Paylaşım Görseli (OG Image)',
            type: 'image',
            description: 'Sosyal medyada paylaşıldığında görünecek görsel.',
        }
    ]
}
