import { StructureResolver } from 'sanity/desk'
import {
    Settings,
    Home,
    Layers,
    FileText,
    Briefcase,
    Hammer,
    Navigation,
    Share2
} from 'lucide-react'

export const myStructure: StructureResolver = (S) =>
    S.list()
        .title('İçerik Yönetimi')
        .items([
            // Sayfalar Bölümü (Singletonlar ve Normal Sayfalar Bir Arada)
            S.listItem()
                .title('Sayfa Yönetimi')
                .icon(Layers)
                .child(
                    S.list()
                        .title('Sayfalar')
                        .items([
                            S.listItem()
                                .title('Ana Sayfa Düzenle')
                                .icon(Home)
                                .child(S.document().schemaType('homePage').documentId('homePage')),
                            S.divider(),
                            // Normal Sayfalar
                            ...S.documentTypeListItems().filter(
                                (listItem) => listItem.getId() === 'page'
                            ),
                        ])
                ),

            S.divider(),

            // Branşlara Göre İçerikler
            S.listItem()
                .title('Hizmetlerimiz')
                .icon(Hammer)
                .child(S.documentTypeList('service').title('Hizmetler')),

            S.listItem()
                .title('Projeler / Portfolyo')
                .icon(Briefcase)
                .child(S.documentTypeList('project').title('Projeler')),

            S.listItem()
                .title('Yazılar / Blog')
                .icon(FileText)
                .child(S.documentTypeList('post').title('Tüm Yazılar')),

            S.divider(),

            // Ayarlar ve Görünüm
            S.listItem()
                .title('Menü Yapılandırması')
                .icon(Navigation)
                .child(S.document().schemaType('navigation').documentId('mainNavigation')),

            S.listItem()
                .title('Header Ayarları')
                .icon(Layers)
                .child(S.document().schemaType('headerSettings').documentId('headerSettings')),

            S.listItem()
                .title('Site Genel Ayarları')
                .icon(Settings)
                .child(S.document().schemaType('siteSettings').documentId('siteSettings')),

            // Geri kalan her şey (Eğer unutulan varsa)
            ...S.documentTypeListItems().filter(
                (listItem) => !['siteSettings', 'homePage', 'page', 'service', 'project', 'post', 'navigation'].includes(listItem.getId() as string)
            ),
        ])
