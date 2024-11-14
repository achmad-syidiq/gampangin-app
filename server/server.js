import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import CONNECTION_DB from "./config/connection.js";

dotenv.config();
const PORT = process.env.PORT || 5000;
const DATABASES = process.env.DATABASES

const app = express();
app.use(cors());
app.use(express.json());
app.listen(PORT, () => {
  CONNECTION_DB(DATABASES);
  console.log(`Server running on port ${PORT}`);
});
