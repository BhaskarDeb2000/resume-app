# My Personal Resume

Build with React + TypeScript + Vite and fueled by lots of ☕ (or even 🍺 sometimes).

Data are loaded from `.json` files, with one for each language to support multilingual resume content.

The app features a responsive design, providing a one-page layout with dimensions similar to an A4 paper, ensuring compatibility on both desktop and PDF files.

## Key Features 🎛️

- [x] **Light and Dark Mode** 🌞/🌕: Seamlessly switch between light and dark themes for optimal readability.
- [x] **Multilingual Support** 🇬🇷/🇺🇸: Available in Greek and English languages.
- [x] **PDF Downloads** 📄: Easily download resume in pdf format in two variations (colored and grayscale) for each supported language.
- [x] **Quick Print** 🖨️: Conveniently print the resume with a single click.
- [x] **Mobile Tweaks** 🎛️ : Conditionally change render order of components on mobile devices.
- [x] **Local Google Fonts** ℹ️ : We load Google Fonts locally to improve page loading times and avoid flashes of unstyled text (FOUT).
- [x] **Expanded View** ℹ️ : Menu button that enable or disable the Expanded View (EV). During EV, we reveal more information regarding projects in a particular work and also for personal projects. We also reveal Hobbies section. Furthermore, we make the profile as sticky when EV is enabled and we are on desktop. Finally, EV is not available when printing.
- [x] **Routing** 🔖 Added second locale (en-US) to it's own route `/en` and introduced 404 error documents for non specified routes. With separate routes by locale we can now share and/or bookmark the resume to specific locale. As a side note here, we are using react-router's HashRouter because the default Router is not working on github pages where we host the app.
- [x] **SEO & Meta Tags** 🔍: Implemented **social media meta tags** for Facebook and Twitter, improving shareability and visibility. Additionally, included **canonical** and **hreflang** meta tags to enhance search engine optimization and ensure proper language recognition.


## Todo 📝

- [ ] Make it offline ready (PWA).
- [ ] Add test coverage by implementing Vitest for comprehensive testing of the application.


## Getting Started 🏁


### Build with 🧰

#### Frameworks and Libraries

- [React](https://github.com/facebook/react#readme): A JavaScript library for building user interfaces.
- [React Icons](https://react-icons.github.io/react-icons/): A library for including popular icons in React projects.
- [country-flag-icons](https://gitlab.com/catamphetamine/country-flag-icons#readme): A set of SVG country flag icons for use in web projects.
- [Fontsource](https://github.com/fontsource/fontsource#readme): An updating monorepo full of self-hostable Open Source fonts bundled into individual NPM packages!
- [React Router DOM](https://github.com/remix-run/react-router#readme): React Router is a lightweight, fully-featured routing library for the React JavaScript library.


#### Automation

- [Playwright](https://playwright.dev/docs/library): A Node library for automating browsers.
- [@playwright/browser-chromium](https://playwright.dev/docs/library#key-differences): Chromium-specific Playwright library for browser automation.


#### Build Tools and Utilities

- [Vite](https://github.com/vitejs/vite#readme): A fast build tool for modern web development.
- [TypeScript](https://github.com/microsoft/TypeScript/#readme): A superset of JavaScript that adds static types to the language.
- [ESLint](https://github.com/eslint/eslint#readme): A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- [PostCSS](https://github.com/postcss/postcss#readme): A tool for transforming CSS with JavaScript plugins.
- [Autoprefixer](https://github.com/postcss/autoprefixer#readme): A PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use.
- [Prettier](https://github.com/prettier/prettier#readme): A tool for automatically formatting code to ensure consistent style and formatting.
- [gh-pages](https://github.com/tschaub/gh-pages#readme): A convenient tool for deploying your project to GitHub Pages with minimal configuration. With `gh-pages`, you can seamlessly publish your static websites, React applications, or any other web projects directly from your GitHub repository to a dedicated GitHub Pages branch, making it accessible to the world with just a few simple commands.
- [vite-plugin-svgr]: Vite plugin to transform SVGs into React components. Uses [svgr](https://github.com/gregberge/svgr) under the hood.


### Installation 🚧

1. Clone this repo.
2. Navigate to the project directory and install dependencies:
  ```shell
  cd ./resume
  npm install
  ```
3. Modify the `.json` files located in `./src/Data` with your personal information.

> Some sections/entries in the data files are omitted from rendering. **This is by design as I wanted to fit the basic information on one page**. However, we can display all `non-hidden` entries upon request, via the Expanded-View, for online view*. The PDFs remain in the one-page version.


### Running the app 🚀

To run the app locally, use the following command:

```shell
npm run dev

```

The app will be accessible at: `http://localhost:5174/` by default.

