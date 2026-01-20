# Rolldozer

Small React app for rolling RPG dice using @dice-roller/rpg-dice-roller. Save named favorites for quick re-rolls.

## Features

- Parse and roll RPG dice expressions (d20, 2d6+3, etc.)
- History of recent rolls
- Favorites stored as a Map of name → roll expression
- Quick rerun and delete favorites

## Requirements

- Node.js 16+ (macOS)
- npm

## Setup

1. Install dependencies
   - npm: npm install

2. Run development server
   - npm: npm run dev
     Open http://localhost:5173/

3. Build for production
   - npm: npm run build

## Notes

- Favorites are stored in-memory as a Map keyed by the favorite name with the roll expression as value.
- Prompting for a favorite name happens when adding from history.

## What's next

- favorites to be stored in browser storage
- better favorites organization (tags, tree structure, etc.)

## License

MIT
