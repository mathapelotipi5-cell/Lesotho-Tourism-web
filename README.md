# Lesotho Tourism Explorer

A responsive React website for exploring attractions, activities, and cultural destinations in Lesotho. Visitors can search and filter destinations, view attraction details, and fill out a visitor enquiry form.

## Project information

- **Course:** Diploma in Software Engineering and Multimedia
- **Institution:** Limkokwing University of Creative Technology, Faculty of Information and Communication Technology
- **Assignment:** Individual Assignment 2b
- **Instructor:** Liteboho Molaoa

## Features

- Responsive home and attractions pages with navigation and section links.
- Eight attractions with location, category, description, activities, estimated cost, and local images.
- Search by attraction name, location, or activity, and filter by category.
- Featured activity shortcuts on the home page.
- Attraction detail dialog that can be closed with its close button, the Escape key, or a click outside the dialog.
- Visitor enquiry form with required-field, email, phone, visitor-count, and date validation.

The enquiry form currently validates input in the browser and displays a confirmation message. It does not send or save enquiries to a server.

## Requirements

- Node.js and npm.

## Project structure

- **`src/` — Application source**
  - **`assets/`** — High-resolution local destination images.
  - **`Components/`** — Reusable UI components, including the header, hero, cards, search, modal, form, and footer.
  - **`Data/`** — Centralized attraction dataset in `Attraction.js`.
  - **`Pages/`** — Primary view containers in `Home.js` and `Attraction.js`.
  - **`App.js`** — Application root, location state, and navigation router.
  - **`App.css`** — Global styles, Highland color palette variables, and media queries.
  - **`App.test.js`** — Automated component and flow tests.
- **`public/`** — HTML metadata and static assets.
- **`screenShort/`** — Project documentation screenshots.

Other project files and generated folders:

- `build/` — generated production build.
- `node_modules/` — installed project dependencies.
- `package.json` — project dependencies and npm scripts.
- `package-lock.json` — locked dependency versions.
- `README.md` — project documentation.

Attraction content is maintained in `src/Data/Attraction.js`. Each attraction's image is imported from `src/assets/`.
