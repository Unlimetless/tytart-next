export default {
    name: 'siteSettings',
    title: 'Site Ayarları',
    type: 'document',
    groups: [
        { name: 'general', title: 'Genel' },
        { name: 'logos', title: 'Logolar' },
        { name: 'social', title: 'Sosyal Medya' },
        { name: 'contacts', title: 'İletişim & WhatsApp' },
        { name: 'seo', title: 'Global SEO' },
    ],
    fields: [
        {
            name: 'title',
            title: 'Site Başlığı',
            type: 'string',
            group: 'general'
        },
        // Logo Bölümü
        {
            name: 'logoMain',
            title: 'Ana Logo (Standart)',
            type: 'image',
            group: 'logos',
            options: { hotspot: true }
        },
        {
            name: 'logoRetina',
            title: 'Retina Logo (@2x)',
            type: 'image',
            group: 'logos',
            options: { hotspot: true }
        },
        {
            name: 'logoMobile',
            title: 'Mobil Logo',
            type: 'image',
            group: 'logos',
            options: { hotspot: true }
        },
        {
            name: 'logoSticky',
            title: 'Sabit Menü Logosu (Sticky)',
            type: 'image',
            group: 'logos',
            options: { hotspot: true }
        },
        // İletişim
        {
            name: 'phone',
            title: 'Telefon Numarası',
            type: 'string',
            group: 'contacts'
        },
        {
            name: 'whatsapp',
            title: 'WhatsApp Numarası',
            type: 'string',
            description: 'Örn: 905XXXXXXXXX (Başında + olmadan)',
            group: 'contacts'
        },
        {
            name: 'email',
            title: 'E-posta Adresi',
            type: 'string',
            group: 'contacts'
        },
        {
            name: 'address',
            title: 'Adres',
            type: 'text',
            group: 'contacts'
        },
        {
            name: 'googleMapsIframe',
            title: 'Google Haritalar Iframe Kodu',
            type: 'text',
            description: 'Haritalardan alacağınız <iframe> kodunu buraya yapıştırın.',
            group: 'contacts'
        },
        // Sosyal
        {
            name: 'socialLinks',
            title: 'Sosyal Medya Bağlantıları',
            type: 'array',
            group: 'social',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'platform', title: 'Platform', type: 'string', options: { list: ['Instagram', 'Facebook', 'LinkedIn', 'Twitter', 'YouTube'] } },
                        { name: 'url', title: 'Bağlantı Linki', type: 'url' }
                    ]
                }
            ]
        },
        // SEO
        {
            name: 'seoGlobals',
            title: 'Global SEO Ayarları',
            type: 'seo',
            group: 'seo'
        }
    ],
}
