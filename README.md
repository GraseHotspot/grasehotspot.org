# Grase Hotspot Website

Based off https://github.com/rocketseat/gatsby-starter-rocket-docs

Built with [Gatsby 5](https://www.gatsbyjs.com/) and the
[@rocketseat/gatsby-theme-docs](https://github.com/rocketseat/gatsby-theme-docs) v4
theme (MDX v2). The production site is deployed to GitHub Pages from
`.github/workflows/gatsby.yml`.

## Requirements

- **Node.js 18 or 20** (Gatsby 5's supported versions; CI pins Node 22).
- npm. On npm >= 11 install scripts are blocked by default, which breaks the
  native modules Gatsby needs. If the install leaves native modules broken
  (e.g. Parcel/SWC, sharp, lmdb), run `npm approve-scripts --all` and then
  `npm install` again.

## Incus / virtiofs: prepare `.cache` before building

Gatsby and Parcel store caches in LMDB, which requires `mmap(MAP_SHARED)`.
In an Incus container the workspace is usually mounted via **virtiofs**, which
does **not** support shared mmap (returns `ENODEV`). LMDB then segfaults and
`gatsby build` fails with:

```
ERROR #11904 API.TYPESCRIPT.COMPILATION
Expected compiled files not found after compilation ... after 5 retries.
Error: Worker exited before finishing task
```

(Confirmed via strace: `mmap(..., MAP_SHARED, ...) = -1 ENODEV`.)

The fix is to relocate `.cache` onto a filesystem that supports shared mmap
(e.g. ext4) using a bind mount. The bind mount is **not persistent** — it must
be re-created after every container restart.

```sh
cd /path/to/grasehotspot.org

# one-time setup of the backing directory (any writable ext4 dir works)
mkdir -p ~/.cache/grasehotspot-gatsby

# create .cache if it doesn't exist yet (it is gitignored)
mkdir -p .cache

# bind mount ext4 onto .cache
sudo mount --bind ~/.cache/grasehotspot-gatsby .cache
```

Verify it worked — `.cache` should report a real disk filesystem:

```sh
df -h .cache
# Filesystem      ...  Mounted on
# /dev/sda2       ...  /path/to/grasehotspot.org/.cache
```

If you see `virtiofs`, the mount failed and the build will segfault again.
After rebooting the container, re-run the `mount --bind` command above.

## Getting started

1. Clone the repository

   ```sh
   git clone https://github.com/GraseHotspot/grasehotspot.org.git
   cd grasehotspot.org
   ```

2. Install dependencies

   ```sh
   npm install
   ```

3. If building inside an Incus container, prepare `.cache` as described above.

4. Start developing.

   ```sh
   npm run start        # gatsby develop
   ```

   Your site is now running at `http://localhost:8000`.

## Building and deploying

```sh
npm run build    # gatsby build (output in public/)
npm run serve    # gatsby serve (serve the built site locally)
npm run clean    # gatsby clean (wipe .cache and public)
npm run deploy   # gatsby build && gh-pages -d public
```

Production deploys run automatically through the GitHub Actions workflow
`.github/workflows/gatsby.yml` (Node 22, `npm ci`, `PREFIX_PATHS: 'true'`),
which uploads `public/` to GitHub Pages.

## Site structure

- `content/` — all content as Markdown/MDX: `documentation/` for the docs
  sidebar, dated folders for blog posts, plus `about.md`, `development.md`,
  etc.
- `src/home/index.mdx` — the homepage (configured via the theme's
  `homePath` option in `gatsby-config.js`).
- `src/config/sidebar.yml` — sidebar navigation used by the theme.
- `src/pages/blog.js` and `src/pages/pages.js` — listings that query
  `allMdx` for blog posts and static pages.
- `src/@rocketseat/gatsby-theme-docs/components/Logo.js` — shadowed theme
  component (site logo).

## Content notes (MDX v2)

The theme renders Markdown/MDX files with MDX v2, which differs from plain
Markdown:

- **No raw HTML** — inline tags like `<br>` are not supported. Use Markdown
  syntax instead.
- **Bare URLs must be links** — `<https://example.com>` does not work; write
  `[https://example.com](https://example.com)` instead.
- **`title` frontmatter is required** on every file (the theme's schema makes
  `MdxFrontmatter.title` non-nullable). Files without it break GraphQL
  queries and the build.

## Troubleshooting

- **`sharp`/`lmdb`/`@parcel` native module errors on install** — the install
  scripts may have been blocked (npm >= 11). Run
  `npm approve-scripts --all && npm install`.
- **`gatsby-plugin-remove-trailing-slashes` version** — v4 is pinned in
  `package.json` with an `overrides` entry forcing its Gatsby peer dependency
  to the installed Gatsby 5 (`$gatsby`). Do not remove this override.
- **LMDB segfault in an Incus container** — see the `.cache` bind mount
  section above.
