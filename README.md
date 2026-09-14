# Gōster landing

Static commercial landing in Spanish (`index.html`), English (`en.html`) and Portuguese (`pt.html`).

## Preview

```sh
python3 -m http.server 4180 --bind 127.0.0.1
```

Open http://127.0.0.1:4180/.

## Edit

- Copy and page structure: `scripts/build_landing.py`. Run `python3 scripts/build_landing.py` after changes.
- Shared design and responsive styles: `landing.css`.
- Interactive demo, navigation, language/theme continuity and animation controls: `landing.js`.
- Supplied original logo: `assets/goster-logo-original.png`; isolated ghost: `assets/goster-ghost-original.png`.
- The hero animates only the ghost; the Poppins wordmark and trademark remain static.

The pages are rendered HTML and work without a runtime framework. The generator uses only the Python standard library. Existing user guides are preserved. Product CTAs link to `app.goster.ai`; Base/Pro use the application's `upgrade` flow rather than stored Stripe checkout sessions. Enterprise and resident requests use the existing contact email.

## Review notes

- Prices are retained from the existing landing and the supplied reference: Base MXN 249/month; Pro MXN 499/month.
- The 15-day trial matches `TRIAL_DURATION_DAYS` in the application source reviewed for this redesign.
- The report demonstration is illustrative, with predefined examples. It does not record audio or call an AI service.
- Reduced-motion preferences and the pause control stop ambient animation. Demo tabs support arrow keys, Home and End; the mobile menu supports Escape.
- Pushes may trigger the deployment configured by the hosting provider. This repository does not include a separate deployment command.
