# Hepmad Personal Brand

> **H**arry + S**ep**tember + No**mad** = **Hepmad**

Serving as the core media platform for online presence.

## Project Status

**Current Phase:** Phase 2 - Website Development ✅ Complete

## Overview

Hepmad is Harry's personal brand platform built on three content pillars:

| Pillar | Content Focus |
|--------|---------------|
| **Life Story** (成长轨迹) | Systematic record of growth and daily life |
| **Global Travel** (环球旅行) | Travel stories, photos, maps, living abroad |
| **Solo Dev** (独立开发) | Development logs, thoughts, behind-the-scenes |

## Project Structure

```
hepmad/
├── src/
│   ├── components/          # Navbar, Footer
│   ├── content/             # Blog posts (Markdown)
│   │   └── blog/            # life-story, global-travel, solo-dev
│   ├── layouts/             # BaseLayout
│   ├── pages/               # Routes
│   │   ├── index.astro      # English home
│   │   ├── blog/            # English blog pages
│   │   └── zh/              # Chinese pages (home, blog)
│   └── styles/              # global.css
├── public/                  # Static assets
├── docs/                    # Local docs (gitignored)
├── CLAUDE.md                # Project guidelines
├── astro.config.mjs         # Astro config (with i18n)
└── tailwind.config.mjs      # Tailwind + theme
```

**Note:** `docs/` directory is gitignored - it contains local planning docs and test files.

## Bilingual System

### Routing Structure
- **English (default):** No prefix (e.g., `/`, `/blog`, `/blog/life-story/slug/`)
- **Chinese:** `/zh` prefix (e.g., `/zh`, `/zh/blog`, `/zh/blog/life-story/slug/`)

### Language Switching
- Navbar includes language switcher ("中文" / "English")
- Home, Blog, and Category pages link to corresponding pages in other language
- Blog post pages link to blog listing in other language

### Content Convention
- English posts: `post-name.md`
- Chinese posts: `post-name-zh.md` (same slug with `-zh` suffix)

## Tech Stack

- **Framework:** Astro 4.16+ (content-first, zero JS by default)
- **Styling:** Tailwind CSS 3.4+ with custom theme
- **Content:** Markdown / MDX with Content Collections
- **i18n:** Astro built-in i18n routing
- **Deployment:** Cloudflare Pages (primary) / Netlify (backup)
- **Domain:** hepmad.com

## Features

### UI/UX
- ✅ **Responsive Design:** Mobile-friendly navigation with hamburger menu
- ✅ **Theme Switching:** Light/dark mode toggle (light mode default)
- ✅ **Bilingual Support:** English/Chinese with language switcher
- ✅ **Custom Color Scheme:**
  - Navbar: Purple (Passion theme-inspired)
  - Footer: Blue-teal
  - Accent colors: Gold and Blue
- ✅ **Sticky Footer:** Footer always fixed at bottom

### Content
- ✅ **Blog System:** Category-based filtering (life-story, global-travel, solo-dev)
- ✅ **Dynamic Routes:** Static generation for all blog categories
- ✅ **Content Collections:** Organized blog structure with Zod schema validation
- ✅ **Language Filtering:** English and Chinese content separated by locale

## Sub-brands

| Brand | Positioning | Platforms |
|-------|-------------|-----------|
| **HarryMath** | Math education content creator | BiliBili, Douyin, Xiaohongshu, [Github Pages](https://harryhmx.github.io/) |

## Phases

| Phase | Focus | Status |
|-------|-------|--------|
| **Phase 1** | Infrastructure - Agent Skills development | ✅ Complete |
| **Phase 2** | Website - Build Hepmad & RBH websites | ✅ Complete |
| **Phase 3** | AI Agent System Development | ⏳ Planned |
| **Phase 4** | Global Travel & Content Creation | ⏳ Planned |
| **Phase 5** | Maturation & Optimization | ⏳ Planned |

## License

© 2026 Hepmad Series. All rights reserved.
