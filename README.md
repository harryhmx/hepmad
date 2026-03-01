# Hepmad Personal Brand Website

> **H**arry + S**ep**tember + No**mad** = **Hepmad**

Harry's personal brand series - serving as the core media platform for online presence.

## Project Status

**Current Phase:** Phase 1 - Infrastructure Building

Focus: Developing Agent Skills, strengthening core skills (math, coding, AI tools).

NOT building the actual website yet - that's Phase 2.

## Overview

Hepmad is Harry's personal brand platform built on three content pillars:

| Pillar | Content Focus |
|--------|---------------|
| **Life Story** (人生母本) | Systematic record of growth and daily life |
| **Travel** (环球旅行) | Travel stories, photos, maps, living abroad |
| **Indie Dev** (独立开发) | Development logs, thoughts, behind-the-scenes |

## Project Structure

```
hepmad/
├── .claude/
│   └── skills/              # Hepmad + HarryMath related Agent Skills
├── CLAUDE.md                # Project guidelines and persistent memory
├── .gitignore               # Git ignore rules
└── [website code...]        # Astro + Tailwind project (Phase 2 - NOT YET)
```

**Note:** `docs/` and `demo/` directories are gitignored - they contain local planning docs and test files.

## Tech Stack (Planned for Phase 2)

- **Framework:** Astro (latest version)
- **Styling:** Tailwind CSS
- **Content:** Markdown / MDX
- **i18n:** Astro built-in i18n (English default)
- **Deployment:** Cloudflare Pages (primary) / Netlify (backup)
- **Domain:** hepmad.com

## Agent Skills

Agent Skills are reusable skill packages that AI Agents can use out of the box.

### Current Skills

| Skill | Description | Status |
|-------|-------------|--------|
| `content-layout-expert` | DOCX/PDF to Markdown, Markdown to HTML conversion | ✅ Active |

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
| **Hepmad** | Main personal brand | hepmad.com (Phase 2) |
| **HarryMath** | Math education content creator | BiliBili, Douyin, Xiaohongshu, harryhmx.github.io |

## Phases

| Phase | Focus | Status |
|-------|-------|--------|
| **Phase 1** | Infrastructure Building - Agent Skills development | 🔄 Current |
| **Phase 2** | Website Development - Build Hepmad & RBH websites | ⏳ Planned |
| **Phase 3** | AI Agent System Development | ⏳ Planned |
| **Phase 4** | Global Travel & Content Creation | ⏳ Planned |
| **Phase 5** | Maturation & Optimization | ⏳ Planned |

## License

© 2026 Harry. All rights reserved.
