# Researchity.net

A modern website exploring the possibilities of research in the age of AI. This platform serves as a companion to [edutools.fyi](https://edutools.fyi) and [semanticmachines.fyi](https://semanticmachines.fyi), focusing on the methodologies and roles AI plays in the research process based on the framework by Dominik Lukes.

## Features

- **Educational Content**: Detailed explanations of AI roles (Assistant, Analyst, Toolmaker).
- **Interactive Playground**: A "Tools" section where users can experiment with AI prompts using the Gemini API.
- **Resource Directory**: Lists of examples and external projects.
- **Responsive Design**: Built with Tailwind CSS for mobile and desktop.

## Architecture

This project is built as a lightweight, modern Single Page Application (SPA).

### Tech Stack
- **Framework**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **AI**: Google Gemini API (`@google/genai` SDK)

### File Structure
- **`/components`**: Reusable UI elements (Navbar, Footer, Button).
- **`/pages`**: Main view components corresponding to routes.
- **`/data`**: Static content separation (`content.ts`) to allow easy updates to text and lists without modifying UI logic.
- **`/services`**: External API integration logic (`geminiService.ts`).
- **`index.html`**: Entry point using ES Modules and Import Maps.

## Data Management

Content is decoupled from the display logic. All textual content, lists, and configuration for the pages are located in `data/content.ts`. This allows for easy maintenance and scalability as new resources or companion sites are added.

## AI Integration

The application uses the Google Gemini API to power the "AI Research Playground" in the Tools section.
- **Model**: `gemini-2.5-flash`
- **Logic**: Located in `services/geminiService.ts`.
- **System Instructions**: defined per role (Assistant, Analyst, Toolmaker) to guide the model's behavior.

## Deployment

### Prerequisites
- A Google Cloud Project with the Gemini API enabled.
- An API Key from Google AI Studio.

### Environment Variables
The application requires the following environment variable to function:
- `API_KEY`: Your Google Gemini API key.

### Hosting
This is a static application. It can be deployed to any static site hosting provider (Vercel, Netlify, Cloudflare Pages, etc.).

1. **Build/Transpile**: Ensure your build pipeline handles TypeScript and JSX transpilation (e.g., using Vite).
2. **Environment**: Inject the `API_KEY` into the build or runtime environment depending on your hosting solution.

## History

This project is a spiritual successor to the original Researchity.net blog by Dominik Lukes, which explored the social web and Web 2.0 in research.