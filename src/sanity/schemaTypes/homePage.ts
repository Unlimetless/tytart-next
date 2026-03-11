export default {
    name: 'homePage',
    title: 'Ana Sayfa Yönetimi',
    type: 'document',
    groups: [
        { name: 'hero', title: 'Hero Bölümü' },
        { name: 'about', title: 'Hakkımızda Bölümü' },
        { name: 'featured', title: 'Öne Çıkanlar' },
        { name: 'cta', title: 'CTA (Eylem) Bölümü' },
    ],
    fields: [
        {
            name: 'heroTitle',
            title: 'Hero Başlığı',
            type: 'string',
            group: 'hero'
        },
        {
            name: 'heroSubtitle',
            title: 'Hero Alt Başlığı',
            type: 'text',
            group: 'hero'
        },
        {
            name: 'heroImage',
            title: 'Hero Arka Plan Görseli',
            type: 'image',
            options: { hotspot: true },
            group: 'hero'
        },
        // Hakkımızda Bölümü
        {
            name: 'aboutTitle',
            title: 'Hakkımızda Başlık',
            type: 'string',
            group: 'about'
        },
        {
            name: 'aboutText',
            title: 'Hakkımızda Yazısı',
            type: 'text',
            group: 'about'
        },
        {
            name: 'aboutImage',
            title: 'Hakkımızda Görseli',
            type: 'image',
            group: 'about'
        },
        // Öne Çıkanlar
        {
            name: 'featuredServices',
            title: 'Öne Çıkan Hizmetler',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'service' }] }],
            group: 'featured'
        },
        {
            name: 'featuredProjects',
            title: 'Öne Çıkan Projeler',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'project' }] }],
            group: 'featured'
        },
        // CTA
        {
            name: 'ctaTitle',
            title: 'CTA Başlığı',
            type: 'string',
            group: 'cta'
        },
        {
            name: 'ctaButtonText',
            title: 'Buton Yazısı',
            type: 'string',
            group: 'cta'
        }
    ]
}
