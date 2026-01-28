# PDF Assets

This directory contains PDF documentation files for the ABB Process Automation website.

## Current Files

**Note:** These files are not directly referenced in the codebase (brochure downloads point to S3). They are kept as local backups.

- `abb-compact-product-suite-brochure.pdf` (5.7MB) - Compact Product Suite brochure
- `abb-product-catalog.pdf` (5.1MB) - ABB product catalog
- `abb-compact-product-suite-presentation.pdf` (2.8MB) - Compact Product Suite presentation
- `abb-symphony-plus-overview.pdf` (1.3MB) - Symphony Plus overview
- `abb-process-automation-general.pdf` (8.0MB) - General process automation documentation

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
