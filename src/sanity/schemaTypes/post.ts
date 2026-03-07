export default {
    name: 'post',
    title: 'Yazılar',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Başlık',
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
            name: 'mainImage',
            title: 'Ana Görsel',
            type: 'image',
            options: { hotspot: true }
        },
        {
            name: 'publishedAt',
            title: 'Yayınlanma Tarihi',
            type: 'datetime',
            initialValue: (new Date()).toISOString()
        },
        {
            name: 'body',
            title: 'İçerik',
            type: 'array',
            of: [{ type: 'block' }, { type: 'image' }]
        }
    ]
}
