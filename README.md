# Cardinal Volta Website

Static homepage with local images and fonts, a recruiting dialog, email application links, and the official Calendly embed.

## Files

- `index.html`: homepage and recruiting dialog.
- `styles.css`: desktop and responsive styles.
- `hiring.js`: full job description and dialog interactions.
- `assets/`: only referenced images, icons and font.
- `tests/hiring.test.mjs`: email link and dialog regression tests.
- `build.mjs`: copies only website files and referenced assets into `dist/`.
- `wrangler.jsonc`: Cloudflare Workers Static Assets deployment configuration.

## Applications

Candidates email their resume directly to `nan.ge@cardinalvolta.com`. Links prefill the position in the subject and open the candidate's email client. Candidates attach the resume and send the email themselves. Clicking does not submit an application or send a message automatically.

The general contact email remains `info@cardinalvolta.com`. No application backend, Turnstile, form provider, storage or email service credentials are required.

## Preview and Deploy

Open `index.html` directly in a browser. No build step is needed. Calendly requires an internet connection.

The Wrangler name is `wix-replica`, matching the existing Cloudflare Worker. This name is not the Git repository name or custom domain.

Deploy from this directory:

```powershell
npx wrangler deploy
```

Wrangler automatically runs `node build.mjs` before deploying. Only `dist/` is uploaded; README, tests, Git files and credentials are excluded. Do not commit `dist/`.

For Cloudflare Workers Git builds:

- Build command: leave empty (Wrangler runs the configured build).
- Deploy command: `npx wrangler deploy`.
- Preview command, if shown: `npx wrangler preview`.
- Root directory: `/` when this website is the repository root.
- Production branch: `main`.

To generate the deployment files separately, run `node build.mjs`. No Jekyll, framework installation, Worker script or Pages configuration is required.

## Test

```powershell
node --test tests/hiring.test.mjs
```

## Assets and Scope

Original homepage content and the 2025 copyright are retained. Search and the old Coming Soon page are excluded. Original source material outside this directory is unchanged. The matching logo uses display-sized PNG variants with a 1x/2x srcset; unused alternate assets have been removed.

The mobile layout is a responsive reflow, not a verified copy of Wix's separate mobile layout. Calendly handles scheduling and booking data.
