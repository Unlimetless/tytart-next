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
            of: [
                {
                    type: 'block',
                    marks: {
                        annotations: [
                            {
                                name: 'link',
                                type: 'object',
                                title: 'Link',
                                fields: [
                                    {
                                        name: 'href',
                                        type: 'url',
                                        title: 'URL'
                                    }
                                ]
                            }
                        ]
                    }
                },
                { type: 'image', options: { hotspot: true } }
            ]
        },
        {
            name: 'seo',
            title: 'SEO Ayarları',
            type: 'seo'
        }
    ]
}
