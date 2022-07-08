require('dotenv').config();

module.exports = {
  "development": {
    // "username": "root",
    "username": process.env.DB_USER,
    // "password": null,
    "password": process.env.DB_PASSWORD,
    // "database": "colmex_db",
    "database": process.env.DB_NAME,
    // "host": "127.0.0.1",
    "host": process.env.DB_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
