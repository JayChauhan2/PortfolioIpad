# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Deployment

### Vercel

To deploy this project to Vercel:

1.  Push your changes to a GitHub repository.
2.  Connect your repository to [Vercel](https://vercel.com).
3.  Vercel will automatically detect Vite. Ensure the following settings are used:
    -   **Build Command:** `npm run build`
    -   **Output Directory:** `dist`
    -   **Install Command:** `npm install`
4.  The `vercel.json` file handles Single Page Application (SPA) routing to ensure deep links work correctly.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
