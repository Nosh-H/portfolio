# Noah Haskell's Portfolio

Welcome to my professional portfolio website! This modern, interactive showcase of my work and skills is built with Vue 3 and TypeScript, leveraging the power of Vite for an optimized development experience. The site features a responsive design, smooth navigation, and a collection of my latest projects.

**[View Live Portfolio](https://Nosh-H.github.io/portfolio/)**

## Tech Stack

- **Frontend Framework**: Vue 3 with TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3 with responsive design
- **Version Control**: Git
- **Deployment**: GitHub Pages

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
### Deploy instructions
1. Make changes. Ensure images are in the images and the public/images folders.
2. Delete the old local dist folder, then build the website in the dist folder:
```sh
npm run build
```
3. Allow dist to be tracked this once by git
```sh
git add dist -f
```
4. Commit to the branch (i.e. main)
```sh
git commit -m "adding dist or some other message"
```
5. Delete the previous website on the Github Pages branch
```sh 
git push origin --delete gh-pages
```
6. Specifically push the updated dist folder to the Github Pages branch
```sh
git subtree push --prefix dist origin gh-pages
``` 
7. To delete the commit with dist from the regular branch, not the gh-pages branch, run:
```sh
git reset --hard HEAD~1
```
Note to self: combine into one command!