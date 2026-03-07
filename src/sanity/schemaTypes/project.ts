export default {
    name: 'project',
    title: 'Projeler',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Proje Başlığı',
            type: 'string',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title' }
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
                    { title: 'Lüks İnşaat', value: 'insaat' },
                    { title: 'Premium Tadilat', value: 'tadilat' },
                    { title: 'İç Mimari & Dekorasyon', value: 'dekorasyon' },
                ],
            },
        },
        {
            name: 'featured',
            title: 'Öne Çıkan Proje',
            type: 'boolean',
            initialValue: false
        }
    ],
}
