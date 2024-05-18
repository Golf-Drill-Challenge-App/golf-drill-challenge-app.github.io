import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://golf-drill-challenge-app.github.io",
  integrations: [
    starlight({
      title: "Golf Drill Challenge",
      social: {
        github: "https://github.com/Golf-Drill-Challenge-App/Golf-App",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/guides/example/" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      components: {
        SocialIcons: "./src/components/SocialIcon.astro",
      },
      favicon: "./src/assets/favicon.ico",
    }),
  ],
});
