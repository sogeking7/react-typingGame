import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./router";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});

const DATABASE_URL = "mongodb+srv://sogeking7:dragonHero1f@test.iaqxac2.mongodb.net/?retryWrites=true&w=majority&appName=test"
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(DATABASE_URL);
    console.log(`MongoDB connected to ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

connectDB();

app.use("/", router());

app.use('/hello', (req, res) => res.send('Hello World'))

export default app;