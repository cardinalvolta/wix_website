# Cardinal Volta Wix replica

Static reconstruction of https://www.cardinalvolta.com/ using the supplied original assets.

Open `index.html` directly in a browser. No build step or package installation is required.

The original website and `web` project are not modified. This folder is independent and can be copied to a static web host as-is.

## Scope

- Published homepage content: header/logo, hero, mission, technology, all 12 industries, four partners, two leaders, funding opportunity, Calendly, footer.
- All original homepage copy is retained, including the original 2025 copyright year.
- Search has been removed as requested: no search box, results view, or search JavaScript. Old `?q=` links simply display the homepage. The old Coming Soon page remains excluded.
- The hiring section is intentionally not part of this baseline replica.

## Files

- `index.html`: complete homepage content, also readable without JavaScript.
- `styles.css`: locally hosted Scandia font, original desktop geometry, narrow-screen styles.
- `assets/`: self-contained images, font and the original site's three small icons.
- `verification.md`: measured reference, checks, and remaining limitations.
- `asset-audit.md`: source mapping, resolution upgrades, and reasons for retaining other assets.

## External service

The contact section uses Calendly's official inline embed and loads `https://assets.calendly.com/assets/external/widget.js` directly. It uses the existing public meeting link, `https://calendly.com/aa001-cardinalvolta/30min`, without Calendly Connector, API keys, or a backend. The official embed automatically resizes the section; a separate "Book a meeting" link remains available if the script is blocked or JavaScript is disabled.

Internet access and Calendly are still required. Calendly handles availability, booking, its cookie preferences, and confirmation messages. No booking data is stored by this static site, no account settings were changed, and no test appointment was submitted.

## Editing

Edit the homepage text directly in `index.html`; replace images in `assets/`. No Node.js, npm, React, Vite, database, or build step is needed. Email links open the visitor's email application.

## Asset provenance

Most files are copied unchanged from `../raw_assets`. The Scandia font and Metal Tubes photograph were downloaded from URLs observed on the public Wix site because these exact resources were not present in the supplied folder. The header's 207 x 56 and 414 x 112 PNG logo variants were also downloaded from the live site's observed image URLs and are served locally through a 1x/2x `srcset`. SVG icons were transcribed from the live site's rendered SVG markup.

An asset audit replaced five low-resolution homepage images with matching higher-resolution originals from `raw_assets`. CSS retains the previous centered crops without altering the original files. The earlier low-resolution copies remain unreferenced in `assets/` for comparison. The search-only backgrounds and icon were removed with the search feature; `raw_assets` is unchanged. The supplied company SVG uses a different wordmark. The matching 3152px logo PNG is retained as a source, but the header uses the display-sized PNG variants to avoid excessive browser downsampling.

The mobile CSS is a readable reflow, not a verified copy of Wix's separately generated mobile layout. Desktop visual geometry was measured against the live site at 1440px and 1920px. See `verification.md` for the precise scope of verification; this is not a claim of universal pixel equality.
