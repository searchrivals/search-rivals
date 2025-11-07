import { defineType } from 'sanity'

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
    },
    {
      name: 'subheadline',
      title: 'Subheadline',
      type: 'text',
    },
    {
      name: 'ctaPrimary',
      title: 'Primary Button Text',
      type: 'string',
    },
    {
      name: 'ctaSecondary',
      title: 'Secondary Button Text',
      type: 'string',
    },
  ],
})
