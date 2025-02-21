# Charles E. Amyx, III Portfolio

Personal portfolio site showcasing my work as a Designer and Frontend Developer. Built with modern web technologies and a focus on performance and accessibility.

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Interactivity**: [Alpine.js](https://alpinejs.dev)
- **Content**: MDX
- **Type Safety**: TypeScript

## 📂 Project Structure

```text
/
├── public/
│   └── images/        # Static images and assets
├── src/
│   ├── components/    # Reusable Astro components
│   ├── content/       # MDX content for projects and resume
│   │   ├── projects/
│   │   ├── resume/
│   │   └── side-projects/
│   ├── layouts/       # Base layouts
│   ├── pages/        # Route pages
│   └── styles/       # Global styles
└── package.json
```

## 🛠️ Development

```sh
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌟 Features

- Responsive design optimized for all devices
- Fast page transitions with View Transitions API
- MDX-powered content management
- Dynamic project galleries
- Optimized image loading
- Accessibility-focused development
- SEO optimization with structured data
- Dark mode support

## 🧪 Performance

- Optimized asset loading
- Minimal JavaScript footprint
- Static site generation for fast page loads
- Efficient caching strategies
- Image optimization

## 📝 License

All rights reserved © Charles E. Amyx, III

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
