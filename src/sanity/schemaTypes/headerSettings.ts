export default {
    name: 'headerSettings',
    title: 'Header Ayarları',
    type: 'document',
    fields: [
        {
            name: 'backgroundColor',
            title: 'Header Arka Plan Rengi',
            type: 'string',
            description: 'Örn: #ffffff veya rgba(255, 255, 255, 0.8)',
            initialValue: 'rgba(10, 10, 10, 0.8)'
        },
        {
            name: 'stickyBackgroundColor',
            title: 'Sabit Menü Arka Plan Rengi',
            type: 'string',
            description: 'Sayfa aşağı kaydırıldığında görünecek renk.',
            initialValue: 'rgba(0, 0, 0, 0.9)'
        },
        {
            name: 'isTransparent',
            title: 'Başlangıçta Şeffaf Yap',
            type: 'boolean',
            description: 'En üstteyken arka planın şeffaf olup olmayacağı.',
            initialValue: true
        },
        {
            name: 'textColor',
            title: 'Menü Yazı Rengi',
            type: 'string',
            initialValue: '#ffffff'
        },
        {
            name: 'whatsappIcon',
            title: 'WhatsApp İkonu (Özel)',
            type: 'image',
            description: 'Sitedeki WhatsApp ikonu için özel görsel yükleyebilirsiniz. Boş bırakılırsa varsayılan ikon kullanılır.'
        }
    ],
}
