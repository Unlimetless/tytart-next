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
            name: 'mainMenu',
            title: 'Ana Menü',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'label', title: 'Menü Adı', type: 'string' },
                        { name: 'link', title: 'Link (veya Sayfa Seçin)', type: 'string' },
                        {
                            name: 'pageReference',
                            title: 'Sayfa Bağlantısı',
                            type: 'reference',
                            to: [{ type: 'page' }, { type: 'service' }]
                        }
                    ]
                }
            ]
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
