// src/sanity/schemaTypes/project.ts
export default {
    name: 'project',
    title: 'Projeler',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Proje Başlığı',
            type: 'string',
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
                    { title: 'İnşaat', value: 'insaat' },
                    { title: 'Tadilat', value: 'tadilat' },
                    { title: 'Dekorasyon', value: 'dekorasyon' },
                ],
            },
        },
    ],
}

// src/sanity/schemaTypes/post.ts
export const post = {
    name: 'post',
    title: 'Blog Yazıları',
    type: 'document',
    fields: [
        { name: 'title', title: 'Başlık', type: 'string' },
        { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
        { name: 'content', title: 'İçerik', type: 'array', of: [{ type: 'block' }] },
        { name: 'mainImage', title: 'Ana Görsel', type: 'image' },
    ],
}
