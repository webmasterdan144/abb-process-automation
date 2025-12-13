# PDF Assets

This directory contains PDF documentation files for the ABB Process Automation website.

## Current Files

**Note:** The following files are currently not referenced in the codebase and may be candidates for removal or proper naming:

- `1726519165804file (1).pdf` (5.8MB) - Unused
- `1726519278617file.pdf` (5.2MB) - Unused
- `1731607775046file.pdf` (2.8MB) - Unused
- `1731611305723file (1).pdf` (1.4MB) - Unused
- `dfa67ca8-1952-4142-b462-ee9c380c3e8e.pdf` (8.0MB) - Unused

**Total size:** ~23MB

## Recommendations

1. **Identify and rename** - Determine the content of each PDF and rename with descriptive names
2. **Compress** - Use PDF compression tools to reduce file sizes
3. **Remove unused** - Delete any PDFs that are not needed
4. **Document** - Add entries below for any PDFs that should be kept

## Naming Convention

Use descriptive names that indicate the content:
- `abb-freelance-dcs-brochure.pdf`
- `system-800xa-datasheet.pdf`
- `control-builder-manual.pdf`
- etc.

## Usage in Code

To reference a PDF in the codebase:
```tsx
<a href="/pdfs/filename.pdf" target="_blank" rel="noopener noreferrer">
  Download PDF
</a>
```

## Optimization Tips

1. Compress PDFs using tools like Ghostscript or online compressors
2. Consider hosting large files on a CDN
3. Add appropriate cache headers for PDF files
4. Provide file size information to users before download
