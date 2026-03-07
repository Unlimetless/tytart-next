export default {
    name: 'siteSettings',
    title: 'Site Ayarları',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Site Başlığı',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Site Açıklaması (SEO)',
            type: 'text',
        },
        {
            name: 'logo',
            title: 'Site Logosu',
            type: 'image',
            options: { hotspot: true },
        },
        {
            name: 'phone',
            title: 'Telefon Numarası',
            type: 'string',
        },
        {
            name: 'email',
            title: 'E-posta Adresi',
            type: 'string',
        },
        {
            name: 'address',
            title: 'Adres',
            type: 'text',
        },
        {
            name: 'socialLinks',
            title: 'Sosyal Medya Linkleri',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'platform', title: 'Platform', type: 'string' },
                        { name: 'url', title: 'Link', type: 'url' }
                    ]
                }
            ]
        }
    ],
}
