import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import QrCode from "../models/QrCode.model";

dotenv.config();

const connection = new Sequelize({
  host: process.env.MYSQL_HOST,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  dialect: "mysql",
  logging: false,
  models: [QrCode],
});

export default connection;
