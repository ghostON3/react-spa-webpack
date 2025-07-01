# ReactTS Webpack

This project demonstrates building a scalable web app with modern tools and best practices based on a provided example.

## Getting Started

### Prerequisites

- Node.js v18.18.0 and above
- Node.js v20.9.0 and above
- Node.js v21 and above

> _Note:_ Older versions (v18.18.0 to v19) are no longer supported by ESLint.  
> For details, see [ESLint migration guide](https://eslint.org/docs/latest/use/migrate-to-9.0.0#-nodejs--v1818-v19-are-no-longer-supported).

### Installation

```bash
yarn  install
```

## Development

Create `.env` file from `.env.template` file (e.g. `cp .env.template .env`)

### Running the app locally

```bash
yarn start
```

This will start the development server at [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
yarn build
```

## 🛠️ Tech Stack

### Core Dependencies

- React 19.1.0 - UI library
- React DOM 19.1.0 - React rendering
- TypeScript 5.8.3 - Type-safe JavaScript
- Webpack 5 - Module bundler

### UI & Styling

- Material-UI
- Emotion

### State Management

- Redux Toolkit
- React Redux

### HTTP Client

- Axios

### Transpiling & Bundling

- Babel – JavaScript transpiler to convert modern JS/TS code into browser-compatible code

### Linting & Formatting

- ESLint – Static code analysis tool to identify problematic patterns
- Prettier – Automated code formatter for consistent style

### Testing

- Jest – JavaScript testing framework for unit and integration tests
- Testing Library – Utilities for testing React components with best practices
- MSW (Mock Service Worker) – API mocking tool for testing and development

### Code Quality & Maintenance

- Husky – Git hooks to enforce code quality workflows
- Knip – Tool to detect unused files and dependencies
