// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://amaljithmohan.github.io',
	base: '/amaljith_mohan.github.io',
	integrations: [mdx(), sitemap()],
});
