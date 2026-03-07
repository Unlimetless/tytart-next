import { groq } from 'next-sanity'

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  title,
  description,
  logo,
  phone,
  email,
  address,
  mainMenu[]{
    label,
    link,
    "slug": pageReference->slug.current
  },
  socialLinks
}`

export const pageBySlugQuery = groq`*[_type == "page" && slug.current == $slug][0]{
  title,
  content
}`

export const serviceBySlugQuery = groq`*[_type == "service" && slug.current == $slug][0]{
  title,
  content,
  image,
  description
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
  body
}`
