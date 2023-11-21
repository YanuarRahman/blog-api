import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./config/database.js";
import PostRouter from "./routes/PostRoutes.js";

// running function
dotenv.config();
const app = express();
// agar bisa membaca req body json nya
app.use(express.json());

const port = process.env.PORT
const api = process.env.API_URL

// middleware

// conect database
ConnectDB();

// route
app.use(`${api}/`, PostRouter)

// server
app.listen(port, ()=>{
    console.log(`Server Running At ${port}`);
});