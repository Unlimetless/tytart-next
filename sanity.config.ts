import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './src/sanity/schemaTypes'
import { myStructure } from './src/sanity/deskStructure'

export default defineConfig({
    name: 'default',
    title: 'TytArt Studio',

    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'bjnq8q1b',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

    basePath: '/studio',

    plugins: [
        deskTool({
            structure: myStructure,
        }),
    ],

    schema: {
        types: schemaTypes,
    },
})
