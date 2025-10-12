# InboxHero AI Landing Page

This repository contains the source code for the InboxHero AI landing page. The goal of this site is to
communicate the product’s value proposition, collect leads and set the
foundation for a growing AI productivity platform. It is designed to be
deployed to GitHub Pages on the domain specified in the `CNAME` file.

## Structure

```
inboxhero-landing/
├── assets/                # Static images and media
│   └── demo-preview.png    # Illustration used in the demo section (add your own logo, hero and favicon here)
├── components/            # HTML fragments injected into index.html via script.js
│   ├── header.html
│   ├── hero.html
│   ├── demo.html
│   ├── features.html
│   ├── pricing.html
│   ├── faq.html
│   ├── contact.html
│   └── footer.html
├── brand.css              # Colour palette, typography and variables
├── style.css              # Layout and component styling
├── script.js              # Client‑side logic for loading fragments and animations
├── index.html             # Entry point that loads all components
├── robots.txt
├── sitemap.xml
├── CNAME                  # Custom domain configuration for GitHub Pages
├── .gitignore
└── .nojekyll
```

## Customisation

- **Images:** Replace the placeholder assets in the `assets` folder (`logo.svg`, `favicon.ico`, `hero-image.png` and `bg-pattern.png`) with your own graphics. The demo image (`demo-preview.png`) was generated as a dark‑mode dashboard illustration.
- **Form Endpoint:** The contact form posts to a Formspree endpoint. To receive submissions to your own inbox, sign up for a free [Formspree](https://formspree.io/) account and replace the `action` value in `components/contact.html` with your unique form URL.
- **Pricing:** To enable paid plans, modify the pricing section and update the call to action for the Pro plan. Right now the Pro plan is flagged as “Coming Soon” and the button links to the contact form.
- **Demo Animation:** The demo sequence in `script.js` simply types out a few lines of text and advances a progress bar. Feel free to adjust the messages or enhance the animation.

## Deployment

This project is ready to be deployed to GitHub Pages:

1. Push the `inboxhero-landing` directory to a new GitHub repository.
2. Ensure the `CNAME` file contains your desired domain (e.g. `InboxHero.pro`).
3. Enable GitHub Pages in the repository settings, selecting the `main` branch and the `/` root.
4. Configure your DNS to point to GitHub Pages servers.

After deployment, the site will be accessible at your custom domain.
