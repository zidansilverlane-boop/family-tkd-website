# Family Taekwondo School Website - Agent Manual

This manual provides essential information for AI agents working on this website project.

---

## Project Overview

**Project:** Family Taekwondo School Website
**Type:** Static HTML/CSS website
**Location:** `/Users/eliashernandez/Projects/virtual-assistant/outputs/family-tkd-website/`
**Original Source:** https://www.familytaekwondoschool.com (Wix platform)

---

## Directory Structure

```
family-tkd-website/
├── index.html              # Homepage
├── about.html              # About Our School
├── programs.html           # Programs overview
├── contact.html            # Contact information
├── schedule.html           # Class schedule
├── pricing.html            # Membership pricing
├── gallery.html            # Photo gallery
├── events.html             # Events and competitions
├── testimonials.html       # Student testimonials
├── special-needs.html      # Special needs program
├── summer-camp.html        # Summer camp information
├── assets/
│   ├── logo.avif           # School logo
│   ├── images/             # Downloaded website images
│   └── IMAGES_DOCUMENTATION.md  # Image catalog with context
└── AGENT_MANUAL.md         # This file
```

---

## Critical Information

### Organization Name
**IMPORTANT:** The organization name is **"Family Taekwondo School"** - always include "School" at the end. Never abbreviate to just "Family Taekwondo" in visible text.

In the logo, we use:
- `Family TKD` (main text)
- `School` (subtext/span)

### CSS Custom Properties (Variables)
All HTML files define these CSS variables:

```css
--primary: #1a365d;       /* Navy blue - main brand color */
--secondary: #c53030;     /* Red - accent color */
--accent: #ffd700;        /* Gold - decorative accent */
--gradient-primary: linear-gradient(135deg, var(--primary), #2d4a7c);
--gradient-secondary: linear-gradient(135deg, var(--secondary), #e53e3e);
```

**Note:** Only `index.html` and `about.html` define `--gradient-blue`. Other files use `--gradient-primary`.

### Common Issues to Avoid

1. **Gold backgrounds with white text** - Poor contrast. Use `var(--gradient-primary)` instead of `var(--accent)` for backgrounds.

2. **CSS Unicode escapes** - Use single backslash: `content: '\2713';` not `content: '\\2713';`

3. **Logo size** - Logo icon is 65x65px. Nav padding is 0.75rem (default) and 0.5rem (scrolled).

---

## Image Assets

### Location
`assets/images/` - Contains 49 images scraped from original website

### Documentation
`assets/IMAGES_DOCUMENTATION.md` - Complete catalog with:
- Friendly filename
- Source page context
- Description
- Original Wix media ID

### Key Images

| Filename | Purpose |
|----------|---------|
| `hero-banner-students.jpg` | Main header banner (all pages) |
| `school-exterior.jpg` | Building/location photo |
| `master-vicente-portrait.jpg` | Head instructor photo |
| `master-vicente-teaching.jpg` | Instructor in action |
| `logo-badge.png` | Logo emblem format |
| `tkd-silhouette.png` | Decorative martial arts silhouette |

### Wix URL Pattern
Original images can be re-downloaded using:
```
https://static.wixstatic.com/media/{ID}.{ext}
https://static.wixstatic.com/media/{ID}~mv2.{ext}
```
Site prefix: `a0173f_`

---

## HTML Structure Conventions

### Page Template
All pages follow this structure:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title | Family Taekwondo School</title>
    <style>/* Inline CSS */</style>
</head>
<body>
    <nav>/* Navigation */</nav>
    <main>/* Page content */</main>
    <footer>/* Footer */</footer>
    <script>/* Inline JS */</script>
</body>
</html>
```

### Navigation Logo Structure
```html
<a href="index.html" class="logo">
    <span class="logo-icon">
        <img src="assets/logo.avif" alt="Family Taekwondo School Logo" width="65" height="65">
    </span>
    <div class="logo-text">Family TKD<span>School</span></div>
</a>
```

### Footer Logo Structure
```html
<a href="index.html" class="footer-logo">
    <span class="logo-icon">
        <img src="assets/logo.avif" alt="Family Taekwondo School Logo" width="65" height="65">
    </span>
    <div class="logo-text">Family TKD<span>School</span></div>
</a>
```

---

## Program Information

### Main Programs
1. **Little Ninja** - Ages 4-6, basic skills and character development
2. **Taekwondo Program** - General curriculum with belt progression
3. **Adult & Teens** - Advanced training and sparring
4. **Black Belt Program** - Advanced testing and achievements
5. **Summer Camp** - Miami-based summer program
6. **After School** - Combines TKD with homework help
7. **Special Needs** - Adaptive martial arts program

### Belt Ranks
White → Yellow → Orange → Green → Blue → Purple → Red → Brown → Black

---

## Contact Information (from original site)

- **Location:** Miami area, Florida
- **Website:** familytaekwondoschool.com
- **Head Instructor:** Master Vicente Albuerne

---

## Editing Guidelines

1. **Read before editing** - Always read relevant files before making changes
2. **Test changes** - Verify in browser after edits
3. **Maintain consistency** - Follow existing patterns across all 11 HTML files
4. **Preserve branding** - Keep color scheme and naming conventions
5. **Check all pages** - Many changes need to be replicated across all files

---

## Files Summary

| File | Description | Special Notes |
|------|-------------|---------------|
| `index.html` | Homepage | Has `--gradient-blue` variable |
| `about.html` | School info | Has `--gradient-blue` variable |
| `programs.html` | Programs | Has checkmark icons |
| `pricing.html` | Pricing | Has checkmark icons, featured card |
| `schedule.html` | Schedule | Complex table structure |
| `contact.html` | Contact form | Form handling |
| `gallery.html` | Photos | Image gallery |
| `events.html` | Events | Results section |
| `testimonials.html` | Reviews | Video section |
| `special-needs.html` | Special program | Details section |
| `summer-camp.html` | Camp info | Details section |

---

*Last updated: January 2026*
