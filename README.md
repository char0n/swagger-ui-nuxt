# swagger-ui + Nuxt@3

This repo serves as POC of integrating [swagger-ui-react](https://github.com/swagger-api/swagger-ui) with [Nuxt@3](https://nuxt.com/).

As Nuxt@3 works with React@18 by default, and SwaggerUI is still on React@17, we need to provide aliases for React@17 in `nuxt.config.js`:

```ts
  alias: {
    react: fileURLToPath(new URL('./node_modules/swagger-ui/node_modules/react/umd/react.production.min.js', import.meta.url)),
    'react-dom': fileURLToPath(new URL('./node_modules/swagger-ui/node_modules/react-dom/umd/react-dom.production.min.js', import.meta.url)),
  }
```

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
