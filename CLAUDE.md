# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Project:** Hepmad Personal Brand (Website)
**Name Origin:** **H**arry + S**ep**tember + No**mad** = **Hepmad**

**Goal:**
- Personal brand website serving as the core media platform for Harry's online presence
- Three content pillars: Life Story (人生母本), Travel (环球旅行), Solo Dev (独立开发)
- Bilingual website (English default, Chinese supplementary), targeting global users with priority on overseas audiences
- Foundation for independent products (DSP - Digital Skill Products, partnerships)

**Current Phase:** Phase 1 - Infrastructure Building
- Focus: Developing Agent Skills, strengthening core skills (math, coding, AI tools)
- NOT building the actual website yet (that's Phase 2)

**Repository:** https://github.com/harryhmx/hepmad

## Project Structure

```
hepmad/                              # Root directory IS the website (will be Astro project)
├── docs/                            # Local documentation (gitignored)
│   ├── project_roadmap.md           # Overall project roadmap - READ FIRST for context
│   ├── init_website_project.md      # Detailed website requirements and tech stack
│   └── create-*-skill.md            # Agent Skills "plain language" specs (drafts, iterative)
│
├── .claude/
│   └── skills/                      # Hepmad + HarryMath related Skills ONLY (committed to Git)
│
├── demo/                            # Demo files (gitignored)
│
└── [website code...]                # Astro + Tailwind project (Phase 2 - NOT YET CREATED)
```

**Key Directories:**
- `docs/` - Contains all project planning docs. These are "plain language" requirements, not formal specs. Files here are gitignored.
- `.claude/skills/` - Production Agent Skills folders. Each skill is a kebab-case folder with SKILL.md, scripts/, references/, assets/
- `demo/` - Temporary demo/test files

**Related Projects (separate directories):**
- `~/projects/huang/` - HarryMath website (Hexo, reusing harryhmx.github.io)
- `~/projects/rbh-core/` - RBH current site (Vue3 + Django)
- `~/projects/really-brave-hearts/` - RBH refactor (Next.js - Phase 2)
- `~/projects/[ai-agent-system]/` - AI Agent System (Phase 3 - to be created)

## Tech Stack (Planned for Phase 2)

### Hepmad Official Website
```yaml
Framework: Astro (latest version)
Styling: Tailwind CSS
Content: Markdown / MDX
i18n: Astro built-in i18n (English default)
Deployment: Cloudflare Pages (primary) / Netlify (backup)
Domain: hepmad.com
```

**Why Astro:**
- Purpose-built for content sites, zero JS by default
- Built-in i18n support for bilingual content
- Lightweight, pure static output
- Cloudflare Pages: excellent overseas access, good domestic access, unlimited free bandwidth

### Other Projects
- **HarryMath**: Hexo (existing), hosted on GitHub Pages
- **RBH Website**: Next.js + Tailwind + Vercel (refactor target)
- **AI Agent System**: TBD (Phase 3 decision)

## Agent Skills Development Workflow

**Vibe Coding Approach:**

1. Create `docs/create-xxx-skill.md` with "plain language" requirements (casual, iterative)
2. AI Agent reads the file and executes development
3. Test and validate → append new requirements with `---` separator
4. The file itself becomes the requirement evolution record

**Agent Skills Structure:**
```
xxx-skill/
├── SKILL.md          # Required: Core file with metadata and instructions
├── scripts/          # Optional: Executable scripts (Python, Bash, JS, etc.)
├── references/       # Optional: Reference docs, API docs
└── assets/           # Optional: Templates, configs, static resources
```

**SKILL.md Format Standard:**
```yaml
---
name: skill-name          # Required, kebab-case
description: "Clear description of what this skill does"  # Required, MUST use quotes
author: author-name       # Optional
version: "1.0.0"          # Optional
---

# Skill Name (Human Readable)

## Use Cases
- Use case 1
- Use case 2

## Input
- Input description

## Output
- Output description

## How to Use
Usage instructions

## Scripts
- Script descriptions

## Dependencies
- Dependency list

## Notes
- Additional notes
```

**Critical Format Rules:**
- `description` field **MUST be wrapped in quotes** to avoid YAML parsing errors with special characters (colons, commas, etc.)
- `name` should use kebab-case (lowercase with hyphens)
- Separate front matter with `---` on its own line

**Organization Principle:**
- Agent Skills are organized by project
- Hepmad project: `.claude/skills/` contains ONLY Hepmad website + HarryMath related skills
- Other projects have their own `.claude/skills/` directories

## Content Architecture

### Three Content Pillars (Blog)
| Pillar | Content Focus | Example Topics |
|--------|---------------|----------------|
| **Life Story** | Systematic record of growth and daily life | 2006-2026 timeline, personal growth reflections |
| **Travel** | Travel stories, photos, maps, living abroad | Travel memoirs, country experiences, photo collections |
| **Solo Dev** | Development logs, thoughts, behind-the-scenes | Dev journals, technical thoughts, project progress |

**Content Boundary:** Math research and teaching videos are primarily shared on HarryMath sub-brand, not on main Hepmad site.

### Projects Page Structure
| Category | Content | Examples |
|----------|---------|----------|
| **Sub-brands** | Brands Harry created and leads | HarryMath |
| **DSP** | AI Agent System | "Operating system" that runs Agent Skills |
| **Partnerships** | Joint projects with partners | Overseas study/parenting, RBH English education |

## Language Strategy

- **Default: English** - complete content, timely updates
- **Chinese: Supplementary** - serves domestic audience
- **Deployment: Cloudflare Pages / Vercel** - best overseas access, accessible in China
- **Cross-platform:** Chinese content can link to Xiaohongshu, WeChat, etc.

## Development Phases

### Phase 1 (Current): Infrastructure Building
- Focus: Strengthen core skills, develop Agent Skills
- NOT building websites or creating content yet
- Agent Skills for: content layout, video editing, image processing, article creation
- Research: Astro, Next.js, Remotion/Manim tech stacks
- Support partner projects with existing Agent Skills

### Phase 2: Development & Creation
- Build Hepmad official website MVP (Astro + Tailwind)
- Refactor RBH website (Next.js + Tailwind)
- Use Agent Skills for efficient content creation and video production

### Phase 3: AI Agent System Development
- Develop AI Agent System MVP
- After completion: start global travel preparation and content creation

## AI Tools Ecosystem (Learn When Needed)

**Principle:** Don't actively learn MCP, Obsidian, OpenClaw, n8n, etc. until Phase 2/3/4 when actually needed for specific use cases.

| Tool | Potential Use Case Phase |
|------|--------------------------|
| MCP | Phase 2: Claude Code integration; Phase 3: AI Agent System protocol |
| Obsidian | Phase 1/2: Skill/knowledge management; Phase 3: knowledge base RAG |
| OpenClaw | Phase 3: Architecture reference for AI Agent System |
| n8n | Phase 2: Content publishing automation |

## Brand & Sub-brands

### Main Brand: Hepmad
- **Website:** hepmad.com (Phase 2)
- **Content:** Life narrative, global travel, indie dev

### Sub-brand: HarryMath
- **Positioning:** Math education content creator
- **Platforms:** BiliBili, Douyin, Xiaohongshu, harryhmx.github.io
- **Tech Stack:** Remotion/Manim + Agent Skills
- **Relationship:** Independent sub-brand under Hepmad; Hepmad shares occasional dev process, HarryMath site has detailed technical content

### Partnership Projects
- **Overseas Study/Parenting (with Bill):** Content operation (WeChat, Xiaohongshu)
- **RBH English Education (with Bill, Ricky):** Gamified learning website (Next.js refactor in progress)

## Common Development Tasks

### Git Workflow

**IMPORTANT: Always Navigate to Project Root First**

Before running ANY git commands, ALWAYS change to the project root directory. Git commands must be run from the repository root to ensure correct file paths and status detection.

**Solo Developer Workflow (Recommended for Phase 1):**
```bash
# Step 1: Navigate to project root (REQUIRED - prevents path errors)
cd ~/projects/hepmad

# Step 2: Check status
git status

# Step 3: Stage changes
git add .
# Or specific files:
git add README.md .claude/skills/new-skill/

# Step 4: Commit with clear message
git commit -m "type: brief description"

# Step 5: Push to remote
git push
```

**Commit Message Convention:**
| Type | Description | Example |
|------|-------------|---------|
| `feat` | New feature | `feat: brief description of change` |
| `fix` | Bug fix | `fix: brief description of bug` |
| `docs` | Documentation | `docs: brief description of change` |
| `refactor` | Code refactoring | `refactor: brief description of change` |
| `test` | Adding tests | `test: brief description of test` |

**When to Use Branches:**
- Large features (Astro project setup in Phase 2)
- Risky refactoring
- When collaborating with others (Phase 3+)

**For detailed Git workflow guidelines, see:** `docs/execution-log.md`

### Agent Skills Development (Phase 1)

**Running Agent Skill Scripts:**

> **IMPORTANT:** Always activate the virtual environment before running any Python script from Agent Skills.

```bash
# Method 1: Activate venv first, then run script
source ~/venv/hepmad/bin/activate
cd ~/projects/hepmad
python .claude/skills/<skill-name>/scripts/<script>.py <arguments>

# Method 2: One-liner (absolute paths)
source ~/venv/hepmad/bin/activate && python ~/projects/hepmad/.claude/skills/<skill-name>/scripts/<script>.py <arguments>
```

**Creating New Skills:**
```bash
# 1. Create docs/create-xxx-skill.md with plain language requirements
# 2. Ask AI Agent to read and execute
# 3. Iterate by appending with --- separator
```

### Website Development (Phase 2 - NOT YET)
```bash
# Astro + Tailwind setup (when Phase 2 begins)
npm create astro@latest
npx astro add tailwind

# Development
npm run dev

# Build
npm run build

# Preview
npm run preview
```

### Deployment (Phase 2 - Cloudflare Pages)
- Connect GitHub repository
- Auto-deploy on push to main branch
- Build command: `npm run build`
- Output directory: `dist/`

## Important Notes

1. **Phase 1 Focus:** This project is currently in planning/Phase 1. Do NOT start building the actual website yet. Focus on Agent Skills development and research.

2. **Git Workflow:** As a solo developer, keep it simple - develop directly on `main` for most changes. Use branches only for large features or when collaborating. Detailed guidelines in `docs/execution-log.md`.

3. **Content Boundaries:** Hepmad main site focuses on three core pillars. HarryMath content goes to its own channels. DSP (AI Agent System) will have its own site. Partnership projects have independent sites.

4. **Language:** Technical documentation and AI communication in English for precision.

5. **Skills Organization:** Only Hepmad website + HarryMath related skills go in `.claude/skills/`. Other projects have their own skill directories.

6. **Docs are Gitignored:** Files in `docs/` are gitignored - they're for local planning and iterative requirements gathering.

7. **"Vibe Coding":** Requirements in `docs/` are casual "plain language" specs, not formal documents. Let them evolve naturally.

8. **Always Use Absolute Paths for File Operations:** When using Bash tool to perform operations that modify the filesystem (e.g., `rm`, `mv`, file conversion), ALWAYS use absolute paths. Relative paths depend on current working directory and can lead to mistakes.
   - ✓ `rm -rf ~/projects/hepmad/demo/bill-tao/math/images`
   - ✓ `python ~/projects/hepmad/.claude/skills/content-layout-expert/scripts/convert_to_markdown.py /path/to/file.docx`
   - ✗ `rm -rf images tables` (unsafe - depends on cwd)
   - ✗ `python convert.py file.docx` (unsafe - depends on cwd)
   - Exception: Read-only commands like `ls`, `cat`, `grep` may use relative paths for convenience when the context is clear.
