# Asset audit

Source folder: `../raw_assets`. Only identical artwork or photographs qualify as replacements; a larger image of a different scene or a different logo version does not.

## Replaced with originals

| Page asset | Previous pixels | Original pixels | Raw source | Active replica file |
| --- | --- | --- | --- | --- |
| Copper and Nickel | 274 x 158 | 4256 x 2832 | `Copper1.jpg` | `assets/copper-nickel.jpg` |
| Power Generation | 274 x 158 | 5154 x 3547 | `Power meter.jpg` | `assets/power-generation.jpg` |
| Nan Ge | 324 x 329 | 450 x 450 | `Nan Ge_Photo.jpg` | `assets/nan-ge.jpg` |
| Aimy Bazylak | 320 x 329 | 405 x 420 | `Aimy-Bazylak-Photo-768x512_Cropped.jpg` | `assets/aimy-bazylak.jpg` |
| University of Toronto Entrepreneurship | 171 x 131 | 1200 x 900 | `UTE_BlueBackgournd.png` | `assets/uoft.png` |

The originals are copied byte-for-byte. CSS clipping preserves the centered crops used by the previous Wix thumbnails and the existing display-frame sizes. No upscaling or AI reconstruction was used to create new detail. The five originals total approximately 6.44 MiB, so this favors source fidelity over download size. The old small copies are retained but are not referenced by the page. The search background was also upgraded during that audit, but both search background copies and the search icon were subsequently removed when the user requested removal of search. Originals in `raw_assets` are unchanged.

## Deliberately retained

| Asset | Decision |
| --- | --- |
| Company logo | `logo.png` retains the 3152 x 866 `noBgColor (1).png` source. The header now uses the two local display-sized PNGs described below. `Color logo - no background.svg` uses a lighter, mixed-case wordmark, unlike the published uppercase bold logo. Do not substitute it as a format-only change. |
| Foresight | Already uses the transparent 1000 x 401 original. `Foresight-Canada-logo.png` has a different white canvas and substantial padding; its larger canvas does not mean a sharper matching wordmark. |
| NETT | Already uses the 1000 x 239 matching original. `Nett Technologies.jpg` is only 224 x 79 and includes a different tagline layout. |
| MaRS | The supplied matching source is only 216 x 216. No matching SVG or higher-resolution copy was found. |
| Hero | Already uses the matching 2457 x 1310 JPG. Other large background files show different artwork. |
| Chemical, Petrochemical, Pulp and Paper, Petroleum Products, Space Exploration | Already use matching 2048px-wide originals. Other photos with related subject names show different scenes. |
| Iron and Steel | Matching source is 640 x 427. `Steel1.jpg` is larger but shows different steel products. |
| Pipeline | Matching source is 612 x 408. Other pipeline thumbnails show different scenes. |
| Cement and Lime, Glass | Matching supplied copies are 274 x 158. The larger cement and glass-industry photos show different scenes. |
| Aluminum | Current downloaded 636 x 504 Metal Tubes photograph has no matching original in this folder; `Aluminium1.jpg` shows a can instead. |
| Funding | The matching 1423 x 794 source is already used. No larger matching original was found. |
| Arrow, address, email icons | Already SVG. The additional industrial SVGs in `raw_assets` are unrelated icons, not higher-quality versions of these. |

## Header logo downsampling fix

The live Wix header uses a 207 x 56 CSS-pixel frame and 1x/2x variants, not the full-size source directly. The replica now follows that same delivery pattern, with no external image dependency:

| Local file | Actual format | Pixel dimensions | Usage |
| --- | --- | --- | --- |
| `assets/logo-1x.png` | RGBA PNG | 207 x 56 | `src` fallback and `1x` candidate |
| `assets/logo-2x.png` | RGBA PNG | 414 x 112 | `2x` candidate |
| `assets/logo.png` | RGBA PNG | 3152 x 866 | Preserved original; no longer rendered in the header |

Both display variants were downloaded without alteration from the image URLs observed in the published homepage's `src` and `srcset`, requesting `image/png`. Their file formats and pixel dimensions were verified after downloading. Wix's observed transformation includes center-fill resizing and sharpening. The source URL templates are:

```text
https://static.wixstatic.com/media/397ad1_0c03d86c37e744faa90a8dc7470b6249~mv2.png/v1/fill/w_207,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/397ad1_0c03d86c37e744faa90a8dc7470b6249~mv2.png
https://static.wixstatic.com/media/397ad1_0c03d86c37e744faa90a8dc7470b6249~mv2.png/v1/fill/w_414,h_112,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/397ad1_0c03d86c37e744faa90a8dc7470b6249~mv2.png
```

## Still useful to obtain

The highest-priority missing matching originals are the Cement and Lime and Glass photographs, the MaRS vector logo, and an SVG of the current uppercase-bold Cardinal Volta wordmark. Larger matching Iron and Steel, Pipeline, Aluminum and Funding photos could also improve high-density or large-screen rendering. No replacements with different artwork were made.
