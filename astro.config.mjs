import react from "@astrojs/react";

import { defineConfig } from 'astro/config';
import vanillaExtract from 'astro-vanilla-extract'; // Keeping temporarily
import pandacss from '@pandacss/dev/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [vanillaExtract(), pandacss(), react()]
});
