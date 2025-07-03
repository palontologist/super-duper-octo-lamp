# Sustainability Impact Tracking Platform

A modern, responsive web application built with Next.js for tracking personal and organizational sustainability impact metrics.

## Project Overview

This platform enables users to track their sustainability efforts and measure impact across various UN Sustainable Development Goals (SDGs). The application features a clean, minimalist design with interactive elements and optimized performance.

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: 
  - [Shadcn UI](https://ui.shadcn.com/)
  - [Radix UI](https://www.radix-ui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Elements**: [Spline](https://spline.design/)
- **Form Handling**: 
  - [React Hook Form](https://react-hook-form.com/)
  - [Zod](https://zod.dev/) for validation

## Key Features

- **Home Page**: Engaging landing page with animated elements and clear call to action
- **Measure Page**: Impact tracking metrics and onboarding form
- **Vibes Page**: Community engagement through embedded content
- **Start Page**: Waitlist registration and SDG tracking information

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/sustainability-impact-platform.git
   cd sustainability-impact-platform
   ```

2. Install dependencies:
```bash
npm install
# or
   yarn
```

3. Create a `.env.local` file based on the provided `env.example` and add your environment variables.

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                      # Next.js App Router pages
│   ├── api/                  # API endpoints
│   ├── measure/              # Measure impact page
│   ├── start/                # Start page with waitlist form
│   ├── vibes/                # Vibes community page
│   └── waitlist/             # Waitlist components and schema
├── components/               # React components
│   ├── magicui/              # Custom UI components with animations
│   └── ui/                   # Shadcn UI components
├── lib/                      # Utility functions
└── public/                   # Static assets
```

## Performance Optimizations

- **React Server Components**: Used for improved initial load performance
- **Component Memoization**: Optimized rendering with React.memo for expensive components
- **Code Splitting**: Dynamic imports for better chunk management
- **Responsive Images**: Optimized for various viewport sizes
- **CSS Optimizations**: Using Tailwind's JIT compiler

## Development Practices

- **Component Structure**: Modular components with clear separation of concerns
- **TypeScript**: Strong typing for improved developer experience and fewer bugs
- **DRY Principle**: Reusable components for consistency and maintenance
- **Accessibility**: ARIA attributes and keyboard navigation support
- **Performance**: Optimized rendering with React.memo and useCallback

## Deployment

The application is set up for easy deployment on Vercel or similar platforms:

```bash
npm run build
# or
yarn build
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
