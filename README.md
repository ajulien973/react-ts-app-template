## Features

- ⚡️ [React 18](https://beta.reactjs.org/)
- 🦾 TypeScript
- 🫀 [Jest](https://jestjs.io/)
- 🎨 [Tailwind with JIT](https://tailwindcss.com/)
- 🪢 [CSS Modules](https://github.com/css-modules/css-modules)
- 👑 [Atomic Design organization](https://www.justinmind.com/blog/atomic-design/)
- 🗂 [Absolute imports](https://github.com/vitejs/vite/issues/88#issuecomment-762415200)
- 😃 [Hero icons](https://heroicons.com/)
- ☁️ Deploy on Netlify, zero-config

### Coding Style

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [Netlify](https://www.netlify.com/)

## Try it

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/ajulien973/react-ts-app-template/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit ajulien973/react-ts-app-template my-app
cd my-app
pnpm install
```

## Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Rename `name` and `author` fields in `package.json`
- [ ] Change the author name in `LICENSE`
- [ ] Change the title in `index.html`
- [ ] Change the favicon in `public`
- [ ] Modify the manifest in `public`
- [ ] Clean up the README's

## Usage

### Development

Just run and visit http://localhost:3000

```bash
pnpm start
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.

### Deploy on Netlify

Go to [Netlify](https://app.netlify.com/start) and select your repository, `OK` along the way, and your App will be live in a minute.

### Issues

#### Husky

If pre-commit hooks are not working be sure that you have installed husky: `husky install`.

By default this command should be triggered after yarn/npm deps are installed.

## Why

I have created several React apps recently. Setting the configs up is kinda the bottleneck for me to make the ideas simply come true within a very short time.

So I made this starter template for myself to create apps more easily, along with some good practices that I have learned from making those apps. Feel free to tweak it or even maintains your own forks.

Props to https://github.com/jvidalv/vital for the initial idea.