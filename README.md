## Getting Started

Follow these steps after setting up a local PostgreSQL database:

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
3. Install dependencies: `npm i`
4. Reset database: `npm run db:reset`

5. Run the server: `npm run local`

- Note: nodemon is used, so you should not have to restart your server
