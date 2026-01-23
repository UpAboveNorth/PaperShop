# Paper Shop — Supply & Demand Simulation Game

Paper Shop is a browser‑based economic simulation game where players apply real‑world supply and demand principles to maximize profit over a simulated business week. The project was built to explore how pricing and production decisions compound over time rather than in a single transaction.

## Overview

In Paper Shop, the player runs a small paper business from Monday through Friday. Each day, a market event occurs that affects production costs and customer demand. Using this information, the player must decide:
- how much paper to produce
- what price to set

These decisions directly influence demand, revenue, and profit. Performance is evaluated at the end of the week, where results are compared against prior runs.

The project emphasizes:
- Economic modeling through supply, demand, and profit optimization
- State‑driven UI updates across independent components
- Persistent browser storage for game state and performance tracking
- A clean, component‑based React architecture

## Core Features

- **Supply & Demand Simulation**  
  Market conditions change daily, requiring players to adapt pricing and production strategies.

- **Multi‑Day Game Loop**  
  Decisions carry forward across days, simulating cumulative business outcomes rather than isolated choices.

- **Profit Tracking & High Scores**
  - Temporary game state stored in `sessionStorage`
  - Best performance persisted using `localStorage`

- **End‑of‑Week Summary**
  A modal summary displays final profit and updates the high score at the conclusion of each week.

## Tech Stack

- React (functional components, hooks)
- TypeScript
- Vite (fast build tooling)
- Bootstrap
- Browser Web Storage APIs
  - `sessionStorage` for active game state
  - `localStorage` for persistent highscores

## Design Notes

- Application state is coordinated through a central parent component, allowing sibling components to stay in sync without unnecessary complexity.
- Browser storage is intentionally split between session‑scoped and persistent data to mirror real‑world lifecycle boundaries.
- UI behavior is driven by explicit state changes rather than direct DOM manipulation.

## Running the Project

To run the project locally:

```bash
git clone https://github.com/your-username/paper-shop
cd paper-shop
npm install
npm run dev
```

The application will be available at:
`http://localhost:5173`

## Live Demo

The project is deployed and available at:
`https://kkessens.github.io/PaperShop/`