# React Vite Template

This project is a modern React application template built with Vite, providing a fast and efficient development environment. It includes essential tools and libraries for building scalable, performant, and accessible web applications.

## Features

- **React 18**: Utilizes the latest React features for building dynamic user interfaces.
- **Vite**: A next-generation frontend tooling for fast development and optimized builds.
- **React Router**: Enables client-side routing for seamless navigation.
- **Tailwind CSS**: A utility-first CSS framework for rapid and customizable styling.
- **i18next**: Internationalization framework for multi-language support, with browser language detection and HTTP backend.
- **ESLint & Prettier**: Ensures code quality and consistent formatting with pre-configured linting and formatting rules.
- **Vitest**: A fast unit testing framework for testing React components.
- **Husky & Lint-Staged**: Automates linting and formatting on git commits for consistent code quality.
- **Accessibility**: Includes ESLint plugin for JSX accessibility checks to ensure inclusive applications.

## Project Structure

- `src/`: Contains the source code, including React components, styles.
- `public/`: Static assets like images and favicon, also has translations.
- `tests/`: Unit tests for components and logic using Vitest.

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd react-vite-template
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Available Scripts

- Start the development server:
  ```bash
  npm run dev
  ```
- Build the project for production:
  ```bash
  npm run build
  ```
- Preview the production build locally:
  ```bash
  npm run preview
  ```
- Run linting:
  ```bash
  npm run lint
  ```
- Format code with Prettier:
  ```bash
  npm run format
  ```
- Run tests:
  ```bash
  npm run test
  ```
- Run tests in watch mode:
  ```bash
  npm run test:watch
  ```

## Internationalization

The project uses `i18next` for internationalization. Translation files should be placed in the `public/locales` directory, and the `i18next-http-backend` loads them dynamically. Language detection is handled by `i18next-browser-languagedetector`.

## Testing

Tests are written using Vitest and React Testing Library. Place test files in the `tests/` directory or alongside components with a `.test.js` or `.test.jsx` extension.

## Code Quality

- **ESLint**: Configured with React, accessibility, and Prettier plugins to enforce coding standards.
- **Prettier**: Automatically formats code for consistency.
- **Husky**: Runs linting and formatting checks on staged files before commits via `lint-staged`.

## Deployment

To deploy the application:

1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the contents of the `dist/` directory to your hosting provider (e.g., Netlify, Vercel, or GitHub Pages).

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'feat: add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.
