# Adarsh Patil — Portfolio

A modern, responsive personal portfolio website built with plain **HTML, CSS and JavaScript** — no frameworks and no build step.

**Live site:** https://portfolio-hazel-nine-27.vercel.app

---

## Features

- **Dark / light theme** with a toggle; the choice is remembered and follows the visitor's system setting on first visit
- **Responsive layout** with a mobile menu, from phones to large screens
- **Typing animation** that cycles through roles in the hero section
- **Scrolling tech-stack marquee**
- **Scroll progress bar**, active-section highlighting in the nav, and a back-to-top button
- **Animated stat counters** and scroll-reveal animations
- **Filterable projects** — filter by React or HTML & CSS
- **Contact form** that opens the visitor's email app with the message pre-filled
- **Accessibility touches** — keyboard focus styles, ARIA labels, and reduced-motion support
- **Vercel Web Analytics** included

## Pages / sections

The site is a single page made up of six sections. Each section lives in its own file in `pages/` and is loaded into `index.html`.

| File | Section |
|---|---|
| `pages/home.js` | Hero + tech marquee |
| `pages/about.js` | About me and quick facts |
| `pages/services.js` | What I do |
| `pages/skills.js` | Technical skills |
| `pages/projects.js` | Selected projects with filters |
| `pages/contact.js` | Contact links and form |

## Project structure

```
.
├── index.html        # Page shell: navbar, footer, and a slot for each section
├── style.css         # All styles, themes and animations
├── main.js           # Loads the sections, then runs all interactions
└── pages/
    ├── home.js
    ├── about.js
    ├── services.js
    ├── skills.js
    ├── projects.js
    └── contact.js
```

## Run locally

No installation is needed.

1. Clone the repository:
   ```bash
   git clone https://github.com/adars-h2007/Portfolio.git
   cd Portfolio
   ```
2. Open `index.html` in your browser.

Optionally, serve it locally instead:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

> Keep the `pages/` folder next to `index.html`. If a page file is missing, the site shows a notice naming it.

## Customising

- **Edit a section:** open its file in `pages/` and change the HTML between the backticks. It appears on the index page automatically.
- **Add or remove a project:** edit `pages/projects.js`. Each project card has a `data-tags` value that the filter buttons use.
- **Change colours and fonts:** edit the variables at the top of `style.css` (`--violet`, `--pink`, `--amber`, and the light/dark theme blocks).
- **Change the typing roles or marquee items:** edit the `roles` and `techs` arrays in `main.js`.
- **Update contact details:** edit `pages/contact.js` and the hero social icons in `pages/home.js`.
- **Add a section:** create `pages/yourpage.js`, register it with `(window.PAGES = window.PAGES || {}).yourpage = ...`, add a `<div data-page="yourpage"></div>` slot and a matching `<script>` tag in `index.html`, and add a nav link.

## Deploy

The site is static, so it works on any static host.

**Vercel (current setup):** import the repository in Vercel and deploy with the default settings. No build command or output directory is needed.

**GitHub Pages:** go to *Settings → Pages*, choose the branch and the root folder, and save.

> The Vercel Analytics script (`/_vercel/insights/script.js`) only works when the site is deployed on Vercel. On other hosts or when opened locally, the browser will log a harmless "not found" for it.

## Tech used

- HTML5, CSS3 (custom properties, grid, flexbox)
- Vanilla JavaScript (IntersectionObserver, localStorage)
- Google Fonts: Space Grotesk, Inter, JetBrains Mono
- Vercel Web Analytics

## Projects featured on the site

- [Appointment Booking Website](https://github.com/adars-h2007/appointment)
- [Body Builder App](https://github.com/adars-h2007/Body-Builder-App)
- [Electronic Shop](https://github.com/adars-h2007/Electronic-Shop)
- [Developer Portfolio](https://github.com/adars-h2007/Portfolio) (this repo)

## Contact

- GitHub: [@adars-h2007](https://github.com/adars-h2007)
- LinkedIn: [Adarsh Patil](https://www.linkedin.com/in/adarsh-patil-587a65319/)
- Email: adarshpatil6650@gmail.com

---

© Adarsh Patil. All rights reserved.
