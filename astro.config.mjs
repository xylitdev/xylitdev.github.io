import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://xylit.dev',
  integrations: [
    starlight({
      favicon: '/logo.svg',
      title: 'Xylit',
      editLink: {
        baseUrl: 'https://github.com/xylitdev/xylitdev.github.io/edit/main/',
      },
      logo: {
        src: './public/logo.svg'
      },
      social: {
        github: 'https://github.com/xylitdev',
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Example Guide', link: '/guides/example/' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});
