# Animex: A Next.js Anime Showcase
![thumbnail](./public/assets/landingPage-1e7a82de-d4fa-409e-b43d-846f1e40b265)

## 🗂️ Description

Animex is a Next.js-based web application designed to showcase a curated list of anime cards, complete with images, descriptions, and details. This project aims to provide a visually appealing and user-friendly interface for anime enthusiasts to discover and explore their favorite shows. Built with modern web technologies, Animex offers a seamless and performant browsing experience.

## ✨ Key Features

### Core Features

* **Anime Card Grid**: A responsive grid displaying a list of anime cards, each featuring an image, title, and details.
* **Load More Button**: A load more button that fetches additional anime data, allowing users to explore more shows.
* **Hero Section**: A prominent hero section showcasing a featured anime image, text, and logo.

### Technical Features

* **Server-side Rendering**: Next.js-powered server-side rendering for improved SEO and performance.
* **TypeScript**: TypeScript-based development for enhanced code maintainability and scalability.
* **Tailwind CSS**: Tailwind CSS for streamlined styling and a consistent design language.

## 🗂️ Folder Structure

```mermaid
graph TD;
  src-->components;
  src-->app;
  components-->AnimeCard.tsx;
  components-->Hero.tsx;
  components-->Footer.tsx;
  components-->Motiondiv.tsx;
  components-->LoadMore.tsx;
  app-->page.tsx;
  app-->action.tsx;
  app-->layout.tsx;
  app-->_data.ts;
```

## 🛠️ Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-000?logo=next.js&logoColor=white&style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=white&style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white&style=for-the-badge)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?logo=framer&logoColor=white&style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4ea94b?logo=mongodb&logoColor=white&style=for-the-badge)

## ⚙️ Setup Instructions

To run the project locally, follow these steps:

* Git clone the repository: `https://github.com/Xeven777/Animex.git`
* Install dependencies: `npm install` or `yarn install`
* Start the development server: `npm run dev` or `yarn dev`

## 📁 Configuration Files

The project uses the following configuration files:

* `.eslintrc.json`: ESLint configuration file that extends the Next.js core web vitals configuration.
* `postcss.config.js`: PostCSS configuration file that uses Tailwind CSS and Autoprefixer plugins.
* `next.config.js`: Next.js configuration file that specifies settings for image optimization and remote patterns.
* `tailwind.config.ts`: Tailwind CSS configuration file that specifies settings for content, theme, and plugins.
* `tsconfig.json`: TypeScript configuration file that specifies compiler options, include and exclude files, and paths for the project.

## 🤖 GitHub Actions

This repository uses GitHub Actions for automated workflows. The current workflow includes:

* **Lint and Build**: A workflow that runs ESLint and builds the project on push events.

No additional workflow configurations are currently set up.



<br><br>
<div align="center">
<img src="https://avatars.githubusercontent.com/u/115650165?v=4" width="120" />
<h3>Anish</h3>
<p>Passionate developer with a love for problem-solving, efficient and creative thinking.</p>
</div>
<br>
<p align="right">
<img src="https://gitfull.vercel.app/appLogo.png" width="20"/>  <a href="https://gitfull.vercel.app">Made by GitFull</a>
</p>
    