import { defineConfig } from 'astro/config';

// CSS Compilers
import vanillaExtract from 'astro-vanilla-extract';
import pandacss from '@pandacss/dev/astro';

// JS Compilers
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    integrations: [
        vanillaExtract(),
        pandacss(),
        react()
    ],
});
