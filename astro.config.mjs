// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: "Cli-Aware Docs",
            social: [
                {
                    icon: "github",
                    label: "Library",
                    href: "https://github.com/Pre1ude0/cli-aware",
                },
                {
                    icon: "document",
                    label: "Docs",
                    href: "https://github.com/Pre1ude0/cli-aware-docs",
                },
            ],
            sidebar: [
                {
                    label: "Guides",
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: "Introduction", slug: "guides/introduction" },
                        {
                            label: "Getting started",
                            slug: "guides/getting-started",
                        },
                    ],
                },
                {
                    label: "Reference",
                    items: [{ autogenerate: { directory: "reference" } }],
                },
            ],
        }),
    ],
});
