import { groq } from 'next-sanity'

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  title,
  logoMain,
  logoRetina,
  logoMobile,
  logoSticky,
  phone,
  whatsapp,
  email,
  address,
  googleMapsIframe,
  socialLinks,
  seoGlobals
}`

export const headerSettingsQuery = groq`*[_type == "headerSettings"][0]{
  backgroundColor,
  stickyBackgroundColor,
  isTransparent,
  textColor,
  stickyTextColor,
  "whatsappIcon": whatsappIcon.asset->url
}`

export const navigationQuery = groq`*[_type == "navigation" && _id == "mainNavigation"][0]{
  items[]{
    label,
    type,
    "slug": reference->slug.current,
    url,
    children[]{
      label,
      "slug": reference->slug.current
    },
    isButton,
    buttonStyle
  },
  styling
}`

export const homePageQuery = groq`*[_type == "homePage"][0]{
  ...,
  heroImage,
  aboutImage,
  featuredServices[]->{
    title,
    slug,
    description,
    icon,
    image
  },
  featuredProjects[]->{
    title,
    slug,
    image,
    category
  }
}`

export const pageBySlugQuery = groq`*[_type == "page" && slug.current == $slug][0]{
  title,
  content,
  seo
}`

export const serviceBySlugQuery = groq`*[_type == "service" && slug.current == $slug][0]{
  title,
  content,
  image,
  description,
  seo
}`

export const allServicesQuery = groq`*[_type == "service"]{
  title,
  slug,
  description,
  icon,
  image
}`

export const allPostsQuery = groq`*[_type == "post"] | order(publishedAt desc){
  title,
  slug,
  mainImage,
  publishedAt,
  body
}`

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  mainImage,
  publishedAt,
  body,
  seo
}`
