# Cardinal Volta Website

Static homepage with local images and fonts, a recruiting dialog, email application links, and the official Calendly embed.

## Files

- `index.html`: homepage and recruiting dialog.
- `styles.css`: desktop and responsive styles.
- `hiring.js`: full job description and dialog interactions.
- `assets/`: only referenced images, icons and font.
- `tests/hiring.test.mjs`: email link and dialog regression tests.
- `wrangler.jsonc`: Cloudflare Pages deployment configuration.

## Applications

Candidates email their resume directly to `nan.ge@cardinalvolta.com`. Links prefill the position in the subject and open the candidate's email client. Candidates attach the resume and send the email themselves. Clicking does not submit an application or send a message automatically.

The general contact email remains `info@cardinalvolta.com`. No application backend, Turnstile, form provider, storage or email service credentials are required.

## Preview and Deploy

Open `index.html` directly in a browser. No build step is needed. Calendly requires an internet connection.

Deploy from this directory, replacing the project name with the actual Cloudflare Pages project:

```powershell
npx wrangler pages deploy . --project-name YOUR_PAGES_PROJECT
```

For Git-connected Pages, use no build command and `.` as the output directory.

## Test

```powershell
node --test tests/hiring.test.mjs
```

## Assets and Scope

Original homepage content and the 2025 copyright are retained. Search and the old Coming Soon page are excluded. Original source material outside this directory is unchanged. The matching logo uses display-sized PNG variants with a 1x/2x srcset; unused alternate assets have been removed.

The mobile layout is a responsive reflow, not a verified copy of Wix's separate mobile layout. Calendly handles scheduling and booking data.
