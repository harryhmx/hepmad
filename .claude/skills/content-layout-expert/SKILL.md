---
name: content-layout-expert
description: "Convert article drafts between formats. DOCX/PDF to Markdown with image/table extraction, Markdown to HTML for WeChat/Xiumi. Features: auto-heading (#), image extraction ({dir}-image-{seq}.{ext}), table export to xlsx with styling, HTML output. Handles corrupted docx files via mammoth fallback."
---

# Content Layout Expert Skill

## Use Cases
- Convert article drafts (docx/pdf) to Markdown
- Extract all images from documents to images/ directory
- Extract all tables from documents to tables/ directory (xlsx format with styling)
- Convert Markdown to HTML for WeChat Official Account / Xiumi
- Preserve text styling (bold, italic) in standard mode
- Auto-convert first line to heading (#)
- Handle corrupted docx files with mammoth fallback

## Input
- File path to a .docx, .pdf, or .md document

## Output
| Input Format | Output Format | Description |
|--------------|---------------|-------------|
| .docx, .pdf | .md | Markdown without image links (images extracted separately) |
| .docx | images/ | Extracted images: `{directory-name}-image-{sequence}.{ext}` |
| .docx | tables/ | Extracted tables: `{directory-name}-table-{sequence}.xlsx` (styled) |
| .md | .html | Styled HTML for copy-paste to WeChat/Xiumi |

## How to Use
Run the conversion script:
```bash
python .claude/skills/content-layout-expert/scripts/convert_to_markdown.py <path-to-file>
```

Smart mode detection:
- `.docx` / `.pdf` input → converts to Markdown
- `.md` input → converts to HTML

## Scripts
- `scripts/convert_to_markdown.py` - Main conversion script (smart mode)
- `scripts/convert_to_html.py` - Markdown to HTML converter

## Dependencies
- python-docx: For reading .docx files
- pypdf: For reading .pdf files
- Pillow: For image handling
- openpyxl: For writing .xlsx table files
- markdown: For Markdown to HTML conversion
- mammoth: Fallback for corrupted docx files

Install with:
```bash
pip install python-docx pypdf Pillow openpyxl markdown mammoth
```

## Notes
- First line is automatically converted to a heading (#)
- Markdown files do NOT include image links (images are extracted separately)
- Images are saved as `{directory-name}-image-{sequence}.{ext}`
- Tables are exported with styling: header (gray bg, bold), zebra striping, centered
- Invalid/corrupted images (less than 100 bytes) are skipped automatically
- Corrupted docx files are handled with mammoth fallback (text + images + tables)
- HTML output includes embedded styles for WeChat compatibility
