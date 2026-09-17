# Gōster landing

Static commercial landing in Spanish (`index.html`), English (`en.html`) and Portuguese (`pt.html`).

## Preview

```sh
python3 -m http.server 4180 --bind 127.0.0.1
```

Open http://127.0.0.1:4180/.

## Edit

- Copy and page structure: `scripts/build_landing.py`. Run `python3 scripts/build_landing.py` after changes.
- Every visit starts in dark mode, including links with an old theme preference. The theme toggle works within the current visit.
- Shared design and responsive styles: `landing.css`.
- The guide's ghost cursor and trailing dot are purple in dark mode and green in light mode. They activate on mouse movement, hide for touch/keyboard use, and respect the animation controls.
- Interactive demo, navigation, language/theme continuity and animation controls: `landing.js`.
- Supplied original logo: `assets/goster-logo-original.png`; isolated ghost: `assets/goster-ghost-original.png`.
- The hero animates only the ghost; the Poppins wordmark and trademark remain static.

The pages are rendered HTML and work without a runtime framework. The generator uses only the Python standard library. Existing user guides are preserved. Trial and sign-in CTAs link to `app.goster.ai`; Base/Pro use the public Stripe Payment Links in `PAYMENT_LINKS` in the generator. Payment links remain unchanged when switching themes. Enterprise and resident requests use the existing contact email.

## Review notes

- Prices are retained from the existing landing and the supplied reference: Base MXN 249/month; Pro MXN 499/month.
- Paid plans also show approximate USD equivalents using the Banco de México FIX determined on September 15, 2026: 17.1527 MXN/USD ([source](https://www.banxico.org.mx/SieInternet/consultarDirectorioInternetAction.do?accion=consultarCuadro&idCuadro=CF102&locale=en&sector=7)). Update `USD_MXN_RATE` and `USD_REFERENCE_DATE` in the generator together when refreshing this reference. The displayed note dates the estimate and clarifies that billing is in MXN; these are static estimates, not separate USD prices.
- The 15-day trial matches `TRIAL_DURATION_DAYS` in the application source reviewed for this redesign.
- The report demonstration is illustrative, with predefined examples. It does not record audio or call an AI service.
- Reduced-motion preferences and the pause control stop ambient animation. Demo tabs support arrow keys, Home and End; the mobile menu supports Escape.
- Pushes may trigger the deployment configured by the hosting provider. This repository does not include a separate deployment command.
