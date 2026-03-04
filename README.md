# Hepmad Personal Brand

> **H**arry + S**ep**tember + No**mad** = **Hepmad**

Serving as the core media platform for online presence.

## Project Status

**Current Phase:** Phase 1 - Infrastructure Building

Focus: MVP Agent Skills complete. Website can now be built using `astro-project-init` and `tailwind-layout-system` skills.

## Overview

Hepmad is Harry's personal brand platform built on three content pillars:

| Pillar | Content Focus |
|--------|---------------|
| **Life Story** (人生母本) | Systematic record of growth and daily life |
| **Travel** (环球旅行) | Travel stories, photos, maps, living abroad |
| **Solo Dev** (独立开发) | Development logs, thoughts, behind-the-scenes |

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

### Hepmad Website Skills (MVP - Created, Awaiting Validation)

| Skill | Description | SKILL.md | Status |
|-------|-------------|----------|--------|
| `astro-project-init` | Initialize Astro project with Tailwind CSS and dark theme | [Link](.claude/skills/astro-project-init/SKILL.md) | 📝 Created |
| `tailwind-layout-system` | Add complete page layouts and blog system | [Link](.claude/skills/tailwind-layout-system/SKILL.md) | 📝 Created |

> **Note:** These skills are created but not yet validated. Validation will occur during actual website development.

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
| **Phase 1** | Infrastructure Building - Agent Skills development | 🔄 Current |
| **Phase 2** | Website Development - Build Hepmad & RBH websites | ⏳ Planned |
| **Phase 3** | AI Agent System Development | ⏳ Planned |
| **Phase 4** | Global Travel & Content Creation | ⏳ Planned |
| **Phase 5** | Maturation & Optimization | ⏳ Planned |

## License

© 2026 Hepmad Series. All rights reserved.
