const dotenv = require("dotenv");
dotenv.config();

export const db = require("knex")({
  client: process.env.DB_CONNECTION,
  connection: {
    database: process.env.DB_DATABASE,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  },
});
