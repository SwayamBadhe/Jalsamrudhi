import { CollectionConfig } from 'payload/types';

export const AboutUs: CollectionConfig = {
  slug: 'about_us',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'content',
      label: 'Content',
      type: 'text',
      required: true,
      maxLength: 1000,
    },
  ],
};
