# React Typing Game ⌨️


This is a simple web-game 👾 where you can test your typing speed.
And also you can see your history of attempts and latest high scores. Enjoy it! 😊

Backend API is deployed on `Render` and Frontend is deployed on `Vercel`. 

I used `Express` for the backend and `Next.js` for the frontend.

This is a [React Typing Game](https://typing-front.vercel.app/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).




## Getting Started

First, run the development server:

```bash
cd /api
npm install 
npm run build && npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses MongoDB Atlas Database, so you need to create a .env file in the root of the project with the following variables:


```bash
DATABASE_URL = "mongodb+srv://sogeking7:dragonHero1f@test.iaqxac2.mongodb.net/?retryWrites=true&w=majority&appName=test"
PORT = 3000                                              
```

## Deploy on Vercel

Frontend is deployed on Vercel. 

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
- https://typing-front.vercel.app
 
## Deploy on Render a Node Express App

Backend API is deployed on Render. 
- https://react-typinggame.onrender.com

## API - Endpoints

### Races:
- **Get All Races**: `GET /races`
- **Get Random Race**: `GET /races/random`

### Attempts:
- **Get Attempt by User Id**: `GET /attempt/:id`
- **Get Latest High Scores**: `GET /attempt`
- **Add Attempt**: `POST /attempt`

### Authentication:
- **Login**: `POST /auth/login`
- **Register**: `POST /auth/register`

## Usage

- To start a race you need click Play button in main page `/`.
- To save your attempt you need to login or register and after finishing race it will automatically saved.
- To show your history of attempts go to `/profile` page
- To show latest high scores go to `/scoreboard` page


## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you encounter any bugs or have suggestions for improvements.

## License

This project is not licensed.
