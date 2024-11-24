import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";


export default defineConfig({
  site: "https://omniversify.com/",
  integrations: [tailwind(), icon()],
});
