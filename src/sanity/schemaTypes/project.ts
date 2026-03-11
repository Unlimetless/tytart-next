export default {
    name: 'project',
    title: 'Projeler',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Proje Başlığı',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title' },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'description',
            title: 'Açıklama',
            type: 'text',
        },
        {
            name: 'image',
            title: 'Proje Görseli',
            type: 'image',
            options: { hotspot: true },
        },
        {
            name: 'category',
            title: 'Kategori',
            type: 'string',
            options: {
                list: [
                    { title: 'Tadilat', value: 'Tadilat' },
                    { title: 'İnşaat', value: 'İnşaat' },
                    { title: 'Dekorasyon', value: 'Dekorasyon' },
                    { title: 'Mimari Tasarım', value: 'Mimari Tasarım' },
                ],
            },
        },
        {
            name: 'featured',
            title: 'Öne Çıkan Proje',
            type: 'boolean',
            initialValue: false,
        },
        {
            name: 'seo',
            title: 'SEO Ayarları',
            type: 'seo'
        }
    ],
}
