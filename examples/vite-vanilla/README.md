# SenangStart CSS + Vite (vanilla)

```bash
npm install
npm run dev     # HMR: edit index.html / src/*.js and the CSS updates in place
npm run build   # dist/ contains a minified CSS asset with only the utilities you use
```

How it works:

- `vite.config.js` registers `senangstart()` from `@bookklik/senangstart-css/vite`.
- `src/main.js` imports `virtual:senangstart.css`.
- `senangstart.config.js` lists the `content` files to scan.

Invalid tokens are logged in dev and **fail** `vite build`
(pass `senangstart({ ignoreInvalid: true })` to downgrade them to warnings).
