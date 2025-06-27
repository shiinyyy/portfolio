# Portfolio

A responsive portfolio website built with Next.js, TypeScript, and TailwindCSS. Easily customisable and deployable to static hosts like Firebase Hosting.

---

## Tech Stack
- **Framework:** Next.js 14+
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Animation:** Lottie, Framer Motion
- **3D/Graphics:** Spline, Three.js)
- **Hosting:** Firebase Hosting

---

### Clone the Repository
```bash
git clone <your-repo-url>
cd <your-repo-directory>
```

### Install Dependencies
```bash
npm install
```

### Development Server
Start the local development server:
```bash
npm run dev
```

---


### Ensure `next.config.mjs` Contains:
```js
export default {
  output: 'export',
  // ...other config
}
```

### Build for Static Export
```bash
npm run build
```
- The static site will be generated in the `out` directory.

---

## Deployment

### Firebase Hosting
Install Firebase CLI (if not already):
   ```bash
   npm install -g firebase-tools
   ```
Login and initialise (if first time):
   ```bash
   firebase login
   firebase init hosting
   ```
Set `public` directory to `out` when prompted.

Deploy:
   ```bash
   firebase deploy
   ```

### Other Static Hosts
- Upload the contents of the `out` directory to your preferred static host.

---

## Troubleshooting
- **Preloader or assets not updating?**
  - Delete `.next` and `out` folders, then rebuild:
    ```bash
    rm -rf .next out
    npm run build
    ```
- **Static export not working?**
  - Ensure `output: 'export'` is set in `next.config.mjs`.
  - Use only `npm run build` (not `npm run export`).
- **Node.js version issues?**
  - Use Node.js 18.x or newer for best compatibility with Next.js 14+.

---

## License
MIT

Copyright (c) 2025 Minh Duc Do

Permission is hereby granted, free of charge, to any person obtaining a copy...