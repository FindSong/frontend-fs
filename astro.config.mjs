// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import clerk from "@clerk/astro";
import { esMX } from "@clerk/localizations";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [
    clerk({
      localization: esMX,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: node({
    mode: "standalone",
  }),
  output: "server",
});
