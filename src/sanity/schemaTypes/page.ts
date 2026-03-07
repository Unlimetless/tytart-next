export default {
    name: 'page',
    title: 'Sayfalar',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Sayfa Başlığı',
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
            name: 'content',
            title: 'İçerik',
            type: 'array',
            of: [{ type: 'block' }, { type: 'image' }]
        }
    ]
}
