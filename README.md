# Freedom Family Electric Website Concept

Static website concept for Freedom Family Electric, a King, NC residential electrical contractor focused on new builds, custom homes, spec homes, and selective service calls.

## Chosen mockup direction

This repo uses the mountain badge concept for now. The mark references the foothills, Pilot Mountain, and Hanging Rock through a simple mountain line. The cross is subtle and integrated into the line art so the faith theme feels grounded rather than overly explicit.

## Folder structure

```text
ffe-website-repo/
  index.html
  about.html
  README.md
  BRAND-DIRECTION.md
  robots.txt
  sitemap.xml
  assets/
    brand/
      palette.css
    css/
      styles.css
    img/
      favicon.svg
      logo-ffe.svg
      pilot-mountain-mark.svg
      hero-custom-home.svg
      rough-in-wiring.svg
      finish-electrical.svg
      service-call.svg
      family-photo-placeholder.svg
    js/
      main.js
```

## How to run locally

No build tools are required.

1. Open `index.html` directly in a browser, or
2. From the repo folder, run a simple local server:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## GitHub Pages deployment

1. Create a new GitHub repository.
2. Upload the files and folders in this repo.
3. Go to Settings, then Pages.
4. Set the source to the `main` branch and root folder.
5. Save and wait for GitHub Pages to publish.

## Items to replace before launch

- Phone number: currently `336-555-0198`
- Email: currently `hello@freedomfamilyelectric.com`
- Domain: currently `https://example.com` in schema and sitemap
- NC license number: currently `NC License # TBD`
- Real family photo on `about.html`
- Real project photos, ideally no faces unless permission is documented
- Contact form backend, such as Formspree, Netlify Forms, or the future CRM
- Testimonials or builder references after owner approval
- Final service area list

## Conversion and SEO notes built into this version

- Sticky header with primary quote CTA
- Click-to-call phone link
- Above-the-fold value proposition
- Service area and project type language
- LocalBusiness schema markup using the `Electrician` type
- Project fit sections for custom homes, spec homes, and large residences
- Contact form at the bottom of the single-page homepage
- Separate About page with placeholder family image area
- Mobile responsive navigation and layout
- Lightweight SVG imagery to keep page speed high

## Recommended next iteration

After owner feedback, add real proof points: years in business, license number, insurance note, builder testimonials, real project photos, and exact service areas. These will strengthen trust and local conversion.
