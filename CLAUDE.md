# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Project:** Hepmad Personal Brand (Website)
**Name Origin:** **H**arry + S**ep**tember + No**mad** = **Hepmad**

**Goal:**
- Personal brand website serving as the core media platform for Harry's online presence
- Three content pillars: Life Story (成长轨迹), Global Travel (环球旅行), Solo Dev (独立开发)
- Bilingual website (English default, Chinese supplementary), targeting global users with priority on overseas audiences
- Foundation for independent products (DSP - Digital Skill Products, partnerships)

**Current Phase:** Phase 2 - Website Development ✅ Complete
- Focus: Building Hepmad official website (Astro + Tailwind)
- Website MVP complete with full layouts, blog system, responsive design, Passion theme styling, and bilingual support
- Theme system (light/dark mode) implemented
- Bilingual routing (English/Chinese) implemented
- **Live at:** https://hepmad.com
- Content refinement in progress

**Repository:** https://github.com/harryhmx/hepmad

## Project Structure

```
hepmad/                              # Root directory IS the Astro website
├── src/                             # Astro source code
│   ├── components/                  # Components (Navbar, Footer)
│   │   └── Navbar.astro             # Locale-aware navbar with language switcher
│   ├── content/                     # Blog posts (Markdown)
│   │   └── blog/                    # life-story/, global-travel/, solo-dev/
│   ├── layouts/                     # Page layouts (BaseLayout)
│   ├── pages/                       # Routes
│   │   ├── index.astro              # English home page
│   │   ├── blog.astro               # English blog listing (en posts only)
│   │   ├── blog/[category].astro    # English category pages
│   │   ├── blog/[...slug].astro     # English blog posts (en posts only)
│   │   └── zh/                      # Chinese pages
│   │       ├── index.astro          # Chinese home page
│   │       ├── blog.astro           # Chinese blog listing (zh posts only)
│   │       ├── blog/[category].astro # Chinese category pages
│   │       └── blog/[...slug].astro # Chinese blog posts (zh posts only)
│   └── styles/                      # Global styles (global.css)
│
├── public/                          # Static assets (favicon, images)
│
├── docs/                            # Local documentation (gitignored)
│
├── astro.config.mjs                 # Astro configuration (with i18n)
│
└── tailwind.config.mjs              # Tailwind + theme configuration
```

**Key Directories:**
- `docs/` - Contains all project planning docs. These are "plain language" requirements, not formal specs. Files here are gitignored.

**Related Projects (separate directories):**
- `~/projects/harry-math/` - HarryMath website (Hexo, reusing harryhmx.github.io)
- `~/projects/rbh-core/` - RBH current site (Vue3 + Django)
- `~/projects/really-brave-hearts/` - RBH refactor (Next.js - Phase 2)
- `~/projects/huang/` - Collection of Customized Agent Skills
- `~/projects/[ai-agent-system]/` - AI Agent System (Phase 3 - to be created)

## Tech Stack (Phase 2 - Current)

### Hepmad Official Website
```yaml
Framework: Astro 4.16+
Styling: Tailwind CSS 3.4+ with custom theme variables
Content: Markdown / MDX with Content Collections
i18n: Astro built-in i18n routing (en default, zh with prefix)
Deployment: Cloudflare Pages (primary) / Netlify (backup)
Domain: hepmad.com
```

**Why Astro:**
- Purpose-built for content sites, zero JS by default
- Built-in i18n routing for bilingual content
- Lightweight, pure static output
- Cloudflare Pages: excellent overseas access, good domestic access, unlimited free bandwidth

**Implemented Features:**
- ✅ Responsive navigation with hamburger menu (mobile-friendly)
- ✅ Light/dark theme toggle (light mode default, localStorage persistence)
- ✅ Bilingual system with language switcher
- ✅ Custom color scheme:
  - Navbar: Purple (Passion theme-inspired) - `#5d3478` (light) / `#8a4eb1` (dark)
  - Footer: Blue-teal - `#0e7490` (light) / `#164e63` (dark)
  - Blog Card Background: Gold - `#fbd974` (light) / `#5d512c` (dark)
  - Blog Card Title: Blue - `#28407f` (light) / `#7a8bc4` (dark)
  - Category Tags: Pink/gray scheme with enhanced border contrast
- ✅ Blog category filtering with dynamic routes (`/blog/{category}`)
- ✅ Content categories: life-story, global-travel, solo-dev
- ✅ Sticky footer (always fixed at bottom using flexbox)
- ✅ CSS variables for dynamic theme switching

### Other Projects
- **HarryMath**: Hexo (existing), hosted on GitHub Pages
- **RBH Website**: Next.js + Tailwind + Vercel (refactor target)
- **AI Agent System**: TBD (Phase 3 decision)

## Bilingual System

### Routing Structure
- **English (default):** No prefix
  - Home: `/`
  - Blog: `/blog`
  - Category: `/blog/life-story`
  - Post: `/blog/life-story/post-slug/`

- **Chinese:** `/zh` prefix
  - Home: `/zh`
  - Blog: `/zh/blog`
  - Category: `/zh/blog/life-story`
  - Post: `/zh/blog/life-story/post-slug-zh/`

### Language Switching
- Navbar has integrated language switcher (not a separate component)
- Menu items are locale-aware: Home/首页, Blog/博客
- Language link: 中文 (on English pages) / English (on Chinese pages)
- Smart linking:
  - Home ↔ Home (different locale)
  - Blog listing ↔ Blog listing (different locale)
  - Category ↔ Category (different locale)
  - Blog post → Blog listing (different locale)

### Content Convention
- **English posts:** Use slug directly (e.g., `my-post.md`)
- **Chinese posts:** Add `-zh` suffix to filename (e.g., `my-post-zh.md`)
- Content schema has `lang` field: `z.enum(['en', 'zh']).default('en')`
- Each language generates routes only for its own content

### Adding Bilingual Content

When creating a new blog post in both languages:

1. **English version:**
   ```bash
   # Create: src/content/blog/category/my-post.md
   ---
   title: "My Post Title"
   description: "Post description"
   date: 2026-01-01
   lang: en
   category: life-story
   ---
   ```

2. **Chinese version:**
   ```bash
   # Create: src/content/blog/category/my-post-zh.md
   ---
   title: "我的文章标题"
   description: "文章描述"
   date: 2026-01-01
   lang: zh
   category: life-story
   ---
   ```

## Content Architecture

### Three Content Pillars (Blog)
| Pillar | Content Focus | Example Topics |
|--------|---------------|----------------|
| **Life Story** | Systematic record of growth and daily life | 2006-2026 timeline, personal growth reflections |
| **Global Travel** | Travel stories, photos, maps, living abroad | Travel memoirs, country experiences, photo collections |
| **Solo Dev** | Development logs, thoughts, behind-the-scenes | Dev journals, technical thoughts, project progress |

**Content Boundary:** Math research and teaching videos are primarily shared on HarryMath sub-brand, not on main Hepmad site.

### Projects Page Structure
| Category | Content | Examples |
|----------|---------|----------|
| **Sub-brands** | Brands Harry created and leads | HarryMath |
| **DSP** | AI Agent System | "Operating system" for AI capabilities |
| **Partnerships** | Joint projects with partners | Overseas study/parenting, RBH English education |

## Language Strategy

- **Default: English** - complete content, timely updates
- **Chinese: Supplementary** - serves domestic audience
- **Routing:** English (no prefix), Chinese (`/zh` prefix)
- **Deployment:** Cloudflare Pages / Vercel - best overseas access, accessible in China
- **Cross-platform:** Chinese content can link to Xiaohongshu, WeChat, etc.

## Development Phases

### Phase 1 (Complete): Infrastructure Building
- ✅ MVP development infrastructure completed
- ✅ Development workflow established

### Phase 2 (Current): Development & Creation
- ✅ Hepmad website MVP complete (Astro + Tailwind)
  - Full layouts: Home, Blog listing, Blog detail
  - Content Collections with 3 pillars: life-story, global-travel, solo-dev
  - "Late Night Flight" dark theme
  - Bilingual routing system (English/Chinese)
- 🔄 Content refinement in progress
- ⏳ Refactor RBH website (Next.js + Tailwind)

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
- **Tech Stack:** Remotion/Manim
- **Relationship:** Independent sub-brand under Hepmad; Hepmad shares occasional dev process, HarryMath site has detailed technical content

### Partnership Projects
- **Overseas Study/Parenting (with Bill):** Content operation (WeChat, Xiaohongshu)
- **RBH English Education (with Bill, Ricky):** Gamified learning website (Next.js refactor in progress)

## Common Development Tasks

### Git Workflow

**IMPORTANT: Always Navigate to Project Root First**

Before running ANY git commands, ALWAYS change to the project root directory. Git commands must be run from the repository root to ensure correct file paths and status detection.

**Solo Developer Workflow (Recommended for Phase 2):**
```bash
# Step 1: Navigate to project root (REQUIRED - prevents path errors)
cd ~/projects/hepmad

# Step 2: Check status
git status

# Step 3: Stage changes
git add .
# Or specific files:
git add README.md src/pages/index.astro

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

### Website Development (Phase 2)

**Development:**
```bash
npm run dev
```

**Build:**
```bash
npm run build
```

**Preview:**
```bash
npm run preview
```

### Deployment (Phase 2 - Cloudflare Pages)
- Connect GitHub repository
- Auto-deploy on push to main branch
- Build command: `npm run build`
- Output directory: `dist/`

## Important Notes

1. **Git Workflow:** As a solo developer, keep it simple - develop directly on `main` for most changes. Use branches only for large features or when collaborating. Detailed guidelines in `docs/execution-log.md`.

2. **Content Boundaries:** Hepmad main site focuses on three core pillars. HarryMath content goes to its own channels. DSP (AI Agent System) will have its own site. Partnership projects have independent sites.

3. **Language:** Technical documentation and AI communication in English for precision.

4. **Docs are Gitignored:** Files in `docs/` are gitignored - they're for local planning and iterative requirements gathering.

5. **"Vibe Coding":** Requirements in `docs/` are casual "plain language" specs, not formal documents. Let them evolve naturally.

6. **Always Use Absolute Paths for File Operations:** When using Bash tool to perform operations that modify the filesystem (e.g., `rm`, `mv`, file conversion), ALWAYS use absolute paths. Relative paths depend on current working directory and can lead to mistakes.
   - ✓ `rm -rf ~/projects/hepmad/docs`
   - ✓ `python ~/projects/hepmad/scripts/convert.py /path/to/file.docx`
   - ✗ `rm -rf images tables` (unsafe - depends on cwd)
   - ✗ `python convert.py file.docx` (unsafe - depends on cwd)
   - Exception: Read-only commands like `ls`, `cat`, `grep` may use relative paths for convenience when the context is clear.
