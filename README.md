# Pope Leo XIV - Tribute Website

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<!-- Add other badges if applicable (e.g., build status, deployment) -->
<!-- [![Vercel Deployment](https://img.shields.io/badge/Vercel-deployed-brightgreen?logo=vercel)](YOUR_DEPLOYMENT_URL) -->

A digital tribute website dedicated to His Holiness Pope Leo XIV (Robert Francis Prevost), elected on May 8, 2025.

## Overview

This repository hosts the code for a tribute website dedicated to **Pope Leo XIV (Robert Francis Prevost)**. Elected on May 8, 2025, he is the first American Pope and holds dual citizenship with the United States and Peru. His pontificate represents a unique bridge between North and South America and signifies the global nature of the Catholic Church in the 21st century.

This project aims to provide an accessible and informative resource for people worldwide to learn about his life, ministry, teachings, and the historic significance of his election. It was initiated by collaborators from Peru and Poland, leveraging modern web technologies to share this important story.

<!-- Optional: Add a link to the live site if deployed -->
<!-- **Live Site:** [popeleo.example.com](https://popeleo.example.com) -->

## Features

The website includes (or will include) the following sections:

*   **Home Page:** Introduction, key facts, and highlights of his historic pontificate.
*   **Biography:** A detailed account of his life, from his upbringing in Chicago, education, Augustinian formation, to his service leading up to the papacy.
*   **Papal Election:** Information about the 2025 conclave, the election process, and the significance of choosing the name "Leo XIV".
*   **Teachings & Priorities:** An exploration of his theological views, pastoral approach, and expected focus areas based on his background and previous statements.
*   **Ministry in Peru:** A dedicated section detailing his extensive service and deep connection to Peru, including his time as Bishop of Chiclayo and acquisition of Peruvian citizenship.
*   **Gallery:** A collection of photos highlighting key moments from his life and ministry (currently placeholders).

## Technology Stack

This project is built using the following core technologies:

*   **[Next.js](https://nextjs.org/)**: React framework for server-side rendering, static site generation, and routing.
*   **[React](https://reactjs.org/)**: JavaScript library for building user interfaces.
*   **[TypeScript](https://www.typescriptlang.org/)**: Typed superset of JavaScript for enhanced code quality and maintainability.
*   **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for rapid UI development.
*   **[Lucide React](https://lucide.dev/)**: Icon library.
*   **(Potential Future)** tRPC, Drizzle ORM, NextAuth.js (based on initial T3 template structure, currently simplified).

## Getting Started

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/dontriskit/pope-leo-xiv.git
    cd pope-leo-xiv
    ```

2.  **Install dependencies:**
    This project uses `pnpm` as the package manager.
    ```bash
    pnpm install
    ```

3.  **Set up environment variables:**
    Copy the example environment file and populate it if necessary (especially if database/auth features are added later).
    ```bash
    cp .env.example .env
    ```
    *Note: Currently, the core functionality does not rely heavily on environment variables.*

4.  **Run the development server:**
    ```bash
    pnpm dev
    ```

5.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000).

## Project Structure

*   `src/app/`: Contains the main application code, including:
    *   Page routes (e.g., `/`, `/biography`, `/peru`)
    *   `_components/`: Reusable React components (Navbar, Footer).
    *   `layout.tsx`: Root layout component.
*   `src/styles/`: Global CSS styles (`globals.css`).
*   `public/`: Static assets like images and favicons.
*   `ai_contexts/`: Contains AI-generated source material used for content creation.
*   `src/server/`: Backend code (currently minimal, contains setup for tRPC, DB, Auth if used).

## Contributing

Contributions are welcome! If you find issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.