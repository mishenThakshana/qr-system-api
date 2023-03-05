import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connection from "./database/config";
// routes
import QrRouter from "./routes/qr.route";

dotenv.config();

const app = express();

connection
  .sync()
  .then(() => console.log("Database synced successfully"))
  .catch((error) => console.log(error));

app.use(cors());
app.use(express.json());

//v1 routes
app.use("/api/v1", QrRouter);

app.listen(process.env.APP_PORT, () =>
  console.log(`Server running on PORT ${process.env.APP_PORT}`)
);
