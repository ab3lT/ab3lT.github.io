# Changelog

All notable changes to this portfolio are documented here.
This project does not follow semantic versioning; entries are grouped by the rebrand milestone.

## [Rebrand] — 2026-10-11

A full visual and technical refresh of the portfolio.

### Added
- CSS design-token system (colour, spacing, radius, shadow, typography, layout)
- Persisted light/dark theme toggle honouring `prefers-color-scheme`
- Space Grotesk display font and a fluid `clamp()` type scale
- Scroll-spy navigation, animated mobile menu and brand monogram
- Hero typing role line, availability badges, masked grid backdrop and accent glow
- Timeline treatment for experience & education with node markers and date badges
- Reading scroll-progress bar, back-to-top button and staggered scroll reveals
- Contact form validation with prefilled mailto
- JSON-LD Person data, Open Graph/Twitter cards, canonical URL, sitemap, robots, web manifest, SVG favicon and a branded 404 page
- Accessibility: skip link, focus-visible rings, ARIA labelling and reduced-motion support

### Changed
- Repainted every section, card and chip onto the token palette for a cohesive dark theme
- Unified project cards, skill chips and tech-stack chips into one visual language
- Rebuilt the footer with a dynamic copyright year and icon-button social links

### Fixed
- Scoped the hero grid backdrop so its radial mask no longer dimmed hero text
- Numerous responsive refinements across hero, timeline, skills, projects and footer

### Removed
- Dead `button.normal` rules and stale commented-out CSS from the original template
