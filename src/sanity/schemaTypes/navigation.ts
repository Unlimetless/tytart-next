export default {
    name: 'navigation',
    title: 'Menü Yönetimi',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Menü Başlığı',
            type: 'string',
            initialValue: 'Ana Menü'
        },
        {
            name: 'items',
            title: 'Menü Elemanları',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'navItem',
                    title: 'Menü Öğesi',
                    fields: [
                        { name: 'label', title: 'Görünen İsim', type: 'string' },
                        {
                            name: 'type',
                            title: 'Öğe Tipi',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Sayfa Bağlantısı', value: 'reference' },
                                    { title: 'Dış Bağlantı (URL)', value: 'external' },
                                    { title: 'Alt Menü (Dropdown)', value: 'dropdown' }
                                ]
                            },
                            initialValue: 'reference'
                        },
                        {
                            name: 'reference',
                            title: 'Sayfa Seçin',
                            type: 'reference',
                            to: [{ type: 'page' }, { type: 'service' }, { type: 'project' }],
                            hidden: ({ parent }: any) => parent?.type !== 'reference'
                        },
                        {
                            name: 'url',
                            title: 'URL',
                            type: 'string',
                            hidden: ({ parent }: any) => parent?.type !== 'external'
                        },
                        {
                            name: 'children',
                            title: 'Alt Menü Öğeleri',
                            type: 'array',
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        { name: 'label', title: 'Görünen İsim', type: 'string' },
                                        { name: 'reference', title: 'Sayfa Seçin', type: 'reference', to: [{ type: 'page' }, { type: 'service' }] }
                                    ]
                                }
                            ],
                            hidden: ({ parent }: any) => parent?.type !== 'dropdown'
                        },
                        {
                            name: 'isButton',
                            title: 'Buton Olarak Göster',
                            type: 'boolean',
                            initialValue: false
                        },
                        {
                            name: 'buttonStyle',
                            title: 'Buton Stili',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Yuvarlak (Rounded)', value: 'rounded' },
                                    { title: 'Dikdörtgen (Square)', value: 'square' }
                                ]
                            },
                            hidden: ({ parent }: any) => !parent?.isButton
                        }
                    ]
                }
            ]
        },
        {
            name: 'styling',
            title: 'Menü Görünüm Ayarları',
            type: 'object',
            fields: [
                { name: 'fontSize', title: 'Yazı Büyüklüğü (px)', type: 'number', initialValue: 14 },
                { name: 'textColor', title: 'Yazı Rengi (Hex)', type: 'string', initialValue: '#ffffff' },
                { name: 'activeColor', title: 'Aktif Menü Rengi', type: 'string', initialValue: '#ecb613' }
            ]
        }
    ]
}
