import dotenv from "dotenv";
dotenv.config();

export const dbUrl = process.env.DB_URL;
export const PORT = process.env.PORT;
