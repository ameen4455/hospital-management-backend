const dotenv = require("dotenv");
dotenv.config();
const env = process.env;

module.exports = {
  development: {
    client: env.DB_CONNECTION,
    connection: {
      database: env.DB_DATABASE,
      user:     env.DB_USERNAME,
      password: env.DB_PASSWORD,
      host:     env.DB_HOST,
      port:     env.DB_PORT,
      connectTimeout: 60000
    }
  },
};
