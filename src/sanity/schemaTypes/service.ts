export default {
    name: 'service',
    title: 'Hizmetler',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Hizmet Adı',
            type: 'string',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title' },
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'icon',
            title: 'İkon (Lucide adı örn: HardHat)',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Kısa Açıklama',
            type: 'text',
        },
        {
            name: 'image',
            title: 'Hizmet Görseli',
            type: 'image',
            options: { hotspot: true }
        },
        {
            name: 'content',
            title: 'Detaylı İçerik',
            type: 'array',
            of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }]
        },
        {
            name: 'seo',
            title: 'SEO Ayarları',
            type: 'seo'
        }
    ]
}
