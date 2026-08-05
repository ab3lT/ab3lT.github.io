# Abel Tadesse — Portfolio

Personal portfolio site for Abel Tadesse, Software Engineer — Backend & Mobile Application Developer. Plain HTML/CSS/JS, served as-is via GitHub Pages. Content (experience, education, skills, projects, awards) is sourced from `assets/Abel_Tadesse_CV.pdf`.

- Live site: https://ab3lT.github.io
- GitHub: https://github.com/ab3lT
- LinkedIn: https://www.linkedin.com/in/abeltadessealemu/
- Telegram: https://t.me/AB3LTA
- Email: se.abel.tadesse@gmail.com

## Running locally

No build step. Open `index.html` directly in a browser, or serve the folder with any static server, e.g.:

```
npx serve .
```

## Structure

- `index.html` — page markup
- `style.css` — all styling, including responsive breakpoints at the bottom of the file
- `script.js` — tab toggles, mobile menu, sticky header, and scroll-reveal behavior
- `assets/` — images, icons, and the downloadable CV

## CV download

The "Download CV" buttons (navbar and hero) point to `assets/Abel_Tadesse_CV.pdf`.
Replace that file whenever the CV is updated — the filename must stay the same, or update both `href` attributes in `index.html` to match.

## Known placeholders / TODO

- "Notes" in the nav currently links to the Awards & Recognition section, since there is no dedicated blog/notes page yet.
- Project cards (Latest Works) currently show text only — no screenshots exist for the real projects listed. Add screenshots to `assets/Projects/` and wire them in if available.
