# Abel Tadesse — Portfolio

Personal portfolio for **Abel Tadesse**, Software Engineer — Backend & Mobile Application Developer.
Plain HTML/CSS/JS, no build step, served via GitHub Pages. Content (experience, education, skills,
projects, awards) is sourced from the CV.

- Live site: https://ab3lt.github.io
- GitHub: https://github.com/ab3lT
- LinkedIn: https://www.linkedin.com/in/abeltadessealemu/
- Email: se.abel.tadesse@gmail.com

## Design system

The site is built on a CSS design-token layer declared in `:root` (see the top of `style.css`):

- **Colour** — surfaces, ink, borders and a brand accent, with a full `[data-theme="light"]` override.
- **Spacing / radius / shadow** — consistent scales used across every component.
- **Typography** — Space Grotesk for display headings, Source Code Pro for body, on a fluid `clamp()` scale.

A persisted **light/dark theme toggle** lives in the header; it respects `prefers-color-scheme`
on first visit and remembers the choice in `localStorage`.

## Features

- Sticky header with scroll-spy active-section highlighting and an animated mobile menu
- Hero with a typing role line, availability badges and a masked grid backdrop
- Timeline-style experience & education, token-based skills, projects and awards
- Contact form with inline validation that opens a prefilled email
- Reading scroll-progress bar, back-to-top button and scroll-reveal animations
- Accessibility: skip link, focus-visible rings, reduced-motion support, ARIA labelling
- SEO/PWA: JSON-LD Person data, Open Graph/Twitter cards, canonical URL, sitemap, robots, web manifest and a branded 404

## Running locally

No build step. Open `index.html` directly, or serve the folder with any static server:

```
python -m http.server 8000
# or
npx serve .
```

## Structure

- `index.html` — page markup and metadata
- `style.css` — design tokens, components and responsive rules
- `script.js` — theme toggle, scroll-spy, typing effect, contact validation, scroll-progress, back-to-top, reveals
- `assets/` — images and icons
- `404.html`, `robots.txt`, `sitemap.xml`, `site.webmanifest` — hosting / SEO helpers

## CV download

The "Download CV" buttons point to `assets/Abel_Tadesse_CV.pdf`. Replace that file when the CV is
updated — keep the filename, or update both `href` attributes in `index.html`.

> The download buttons and `assets/Abel_Tadesse_CV.pdf` are temporarily removed while the CV is being
> updated. To restore, add the updated PDF back at that path and re-add the two links. The `.navbar-cv-btn` /
> `.download-cv-btn` styles are still in `style.css`.
