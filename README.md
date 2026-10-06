# favour-ajaye-site

My personal site. Astro, static output, plain CSS.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Adding content

- **Security entry**: add a Markdown file to `src/content/security/`. Front matter fields are defined in `src/content.config.ts`.
- **Company**: add a JSON file to `src/content/companies/`. The file name is the URL slug.
- **Project**: add a JSON file to `src/content/work/<company>/` and put its SVG diagrams in `src/diagrams/<company>/<project>/`.
- **Now block**: edit `src/data/now.json`.
- **Links, email, CV**: `src/data/site.json`.
- **Repos shown on /projects**: `src/data/projects.json`.
- **Feeds and writing topics**: `src/data/feeds.json`. If a feed can't be reached at build time, articles come from `src/data/writing-fallback.json`.

Set `site` in `astro.config.mjs` to the real domain before deploying. A `GITHUB_TOKEN` env var is optional and only raises the GitHub API rate limit.
