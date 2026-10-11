# Lesotho Tourism Explorer

A responsive React application for discovering attractions, outdoor activities,
and cultural experiences in Lesotho, the Kingdom in the Sky.

## Run locally

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000). To create a production
build, run `npm run build`. To run the tests once, run
`npm test -- --watchAll=false`.

## Features

- Home page with an introduction to Lesotho, featured destinations, and links
  to explore and plan a visit.
- Eight attractions stored as objects in `src/Data/Attraction.js`, including
  images, locations, categories, descriptions, activities, and estimated costs.
- Attractions page with live name/location search and category filtering.
- Interactive attraction details dialog, dismissible with Escape or by clicking
  outside the dialog, with destination photography, activities, and estimated
  costs.
- Visitor enquiry form with name, email, phone, destination, visitor count,
  preferred date, and message validation. Names support international
  characters, and past visit dates are rejected.
- Responsive layouts for desktop, tablet, and mobile.

Enquiries are validated in the browser and show a confirmation message. They
are not sent to a server because this project does not have a backend service.
Attraction costs are estimates; confirm current prices with local operators.

## Project structure

```text
src/
  Components/   Shared navigation, attraction, search, details, and form UI
  Data/         Attraction data and image imports
  Pages/        Home and attractions pages
  assets/       Attraction photography
  App.js        Application composition and navigation
  App.css       Application styles and responsive layouts
  App.test.js   Discovery and enquiry flow tests
public/         React app metadata and static assets
```

## Screenshots

Add screenshots of the running application here before submitting the project.
No project screenshots are currently included in the repository.
