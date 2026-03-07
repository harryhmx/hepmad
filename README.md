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
├── .claude/
│   └── skills/              # Agent Skills
├── src/
│   ├── components/          # Navbar, Footer
│   ├── content/             # Blog posts (Markdown)
│   │   └── blog/            # life-story, global-travel, solo-dev
│   ├── layouts/             # BaseLayout
│   ├── pages/               # index.astro, blog.astro, blog/[...slug].astro
│   └── styles/              # global.css
├── public/                  # Static assets
├── docs/                    # Local docs (gitignored)
├── demo/                    # Demo files (gitignored)
├── CLAUDE.md                # Project guidelines
├── astro.config.mjs         # Astro config
└── tailwind.config.mjs      # Tailwind + theme
```

**Note:** `docs/` and `demo/` directories are gitignored - they contain local planning docs and test files.

## Tech Stack

- **Framework:** Astro 4.16+ (content-first, zero JS by default)
- **Styling:** Tailwind CSS 3.4+ with custom theme
- **Content:** Markdown / MDX
- **i18n:** Astro built-in i18n (English default, Chinese supplementary)
- **Deployment:** Cloudflare Pages (primary) / Netlify (backup)
- **Domain:** hepmad.com

## Features

### UI/UX
- ✅ **Responsive Design:** Mobile-friendly navigation with hamburger menu
- ✅ **Theme Switching:** Light/dark mode toggle (light mode default)
- ✅ **Custom Color Scheme:**
  - Navbar: Purple (Passion theme-inspired)
  - Footer: Blue-teal
  - Accent colors: Gold and Blue
- ✅ **Sticky Footer:** Footer always fixed at bottom

### Content
- ✅ **Blog System:** Category-based filtering (life-story, global-travel, solo-dev)
- ✅ **Dynamic Routes:** Static generation for all blog categories
- ✅ **Content Collections:** Organized blog structure with Zod schema validation
- ✅ **Category Tags:** Styled with pink/gray color scheme and enhanced border contrast

## Agent Skills

Agent Skills are reusable skill packages that AI Agents can use out of the box.

### Hepmad Website Skills

| Skill | Description | SKILL.md | Status |
|-------|-------------|----------|--------|
| `astro-project-init` | Initialize Astro project with Tailwind CSS + dark theme | [Link](.claude/skills/astro-project-init/SKILL.md) | ✅ Active |
| `tailwind-layout-system` | Add complete page layouts + blog system | [Link](.claude/skills/tailwind-layout-system/SKILL.md) | ✅ Active |

### Content Skills

| Skill | Description | SKILL.md | Status |
|-------|-------------|----------|--------|
| `content-layout-expert` | DOCX/PDF -> Markdown -> HTML conversion | [Link](.claude/skills/content-layout-expert/SKILL.md) | ✅ Active |
| `md-to-pdf` | Markdown -> PDF with Chinese font support | [Link](.claude/skills/md-to-pdf/SKILL.md) | ✅ Active |

### Skill Structure

```
xxx-skill/
├── SKILL.md          # Required: Core file with metadata and instructions
├── scripts/          # Optional: Executable scripts
├── references/       # Optional: Reference docs, API docs
└── assets/           # Optional: Templates, configs, static resources
```

## Sub-brands

| Brand | Positioning | Platforms |
|-------|-------------|-----------|
| **HarryMath** | Math education content creator | BiliBili, Douyin, Xiaohongshu, [Github Pages](https://harryhmx.github.io/) |

## Phases

| Phase | Focus | Status |
|-------|-------|--------|
| **Phase 1** | Infrastructure - Agent Skills development | ✅ Complete |
| **Phase 2** | Website - Build Hepmad & RBH websites | 🔄 Current |
| **Phase 3** | AI Agent System Development | ⏳ Planned |
| **Phase 4** | Global Travel & Content Creation | ⏳ Planned |
| **Phase 5** | Maturation & Optimization | ⏳ Planned |

## License

© 2026 Hepmad Series. All rights reserved.
