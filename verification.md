# Replica verification

Reference: https://www.cardinalvolta.com/ as inspected during this task.

## Desktop measurements

At a 1440px viewport, with the same browser, font and scrollbar, these baseline positions and heights matched the live site. The same section measurements were also compared at 1920px. Values are in CSS pixels and rounded here for readability. The contact section and footer position now vary with the official Calendly embed's automatic height, as requested in a subsequent update; other sections retain their baseline layout.

| Section | Top | Height |
| --- | ---: | ---: |
| Header | 0 | 96 |
| Hero | 96 | 740 |
| Mission | 836 | 407.167 |
| Technology | 1243.167 | 409.771 |
| Offerings | 1652.938 | 1722.583 |
| Partners | 3374.521 | 343 |
| Leadership | 3717.521 | 538 |
| Funding | 4254.521 | 914 |
| Contact | 5168.521 | 782.5 |
| Footer | 5951.021 | 260.6 |

The 1px overlaps between Offerings/Partners and Leadership/Funding are present in the source site and intentionally retained.

## Content and interaction checks

- Compared all rendered homepage heading/paragraph text against local content after whitespace normalization: no missing text.
- Compared every named homepage image's displayed dimensions and coordinates: matched within 0.1 CSS px at 1440px, excluding the sticky header's scroll-dependent absolute Y coordinate.
- Inspected screenshots of the hero, technical description, industry grid, partner marks, founder portraits and contact section.
- Confirmed all local image resources load successfully.
- Retained the original contact email and inquiry subject.
- Copied the original Contact Us hover colours and transition duration.
- Initially confirmed that the original Calendly Connector iframe loaded the live month, available days, and meeting details; it has since been replaced by the official embed below.

## Follow-up checks

### High-resolution asset update

- Verified six replacement files against the supplied originals; source files were copied without recompression.
- Compared low-resolution images with center-cropped originals to confirm scene, version, and crop before replacement.
- Rechecked the 1440px desktop section, industry-item, partner-frame, and leadership-item geometry against the pre-update replica: unchanged. Sticky header scroll position and hidden search section coordinates were excluded.
- Confirmed all homepage images loaded, and inspected updated industry crops, partner logos, and portraits in the browser.
- Inspected the 390px partner/leadership layout. Search was also tested at that stage, before its subsequent removal.
- These checks do not change the mobile-parity and pixel-diff limitations below.

### Header logo fix checks

- Confirmed `logo-1x.png` and `logo-2x.png` are genuine RGBA PNGs measuring 207 x 56 and 414 x 112, respectively.
- Confirmed the desktop browser at device pixel ratio 1.5 selects the local `logo-2x.png` through `srcset`; the rendered frame remains 207 x 56 at its pre-fix coordinates.
- Visually compared the previous full-size PNG and new display variants at 100%, 80%, 67%, and 50% CSS display sizes. This is a reduced-size raster comparison, not an automated browser-toolbar zoom test.
- Checked the 390px and 320px mobile layouts: logo frames remain 166 x 45 and 145 x 39, respectively, with no horizontal page overflow.
- Preserved the original logo file. No SVG substitution, font replacement, CSS transform, or `image-rendering` workaround was added.

### Search removal checks

- Removed the header search form, results section, `app.js`, search-only CSS, search icon, and both search background copies. The original assets folder was not changed.
- Opened `index.html?q=energy` after removal: the normal homepage and title are displayed, with all eight homepage sections present and zero search controls or local scripts.
- Inspected desktop (1440px) and mobile (390px) screenshots: header logo position and dimensions are unchanged, the search box is absent, and neither layout has horizontal overflow.

### Official Calendly embed

- Replaced the third-party connector with the official `calendly-inline-widget` and `widget.js`, using the existing public 30-minute event URL and color parameters.
- Enabled `data-resize="true"` and changed only the contact section from absolute positioning to normal flow, so heading, booking widget, fallback link, and footer do not overlap as booking steps change.
- Confirmed the rendered iframe points directly to `calendly.com`, and the parent page loads only the official Calendly script.
- Verified the event name, live available days, and available time slots. Advanced to the empty Name/Email booking form on desktop, then returned without entering information or submitting a booking.
- Verified the mobile date-to-time selection view. Checked 1440px, 390px, and 320px widths with no horizontal page overflow. Observed automatic widget heights of 659px for the desktop calendar, 648px for its details form, and 864px for the mobile calendar; the footer remained below the contact section.
- Retained a direct public booking link outside the widget for script-blocked or JavaScript-disabled visitors. No credentials or account changes were needed.
- No live appointment was created, so final booking submission and confirmation-email delivery were intentionally not tested.

### General limitations

- No complete automated pixel-diff score is claimed. Wix's image resizing/recompression can produce subtle raster differences even when the same original source and crop are used.
- Narrow desktop viewports on Wix retained a 980px minimum canvas. This replica uses a responsive reflow below 1050px to avoid clipping. The 390px mobile layout was inspected, but the distinct Wix mobile-user-agent layout was not available in this browser session. Mobile visual parity is therefore not certified.
- Calendly is an external live widget. The event URL is unchanged, but the official embed replaces the original connector. Network latency and Calendly's current UI can change its appearance. No appointment was booked during verification.
- Browser testing used a temporary loopback HTTP server restricted to this folder, because the browser tool does not allow the file protocol. The deliverable itself has no server dependency.
