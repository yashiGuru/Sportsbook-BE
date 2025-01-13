require('dotenv').config();

module.exports = {
    development: {
        username: process.env.SPORTS_BOOK_DATABASE_USERNAME,
        password: process.env.SPORTS_BOOK_DATABASE_PASSWORD,
        database: process.env.SPORTS_BOOK_DATABASE_NAME,
        host: process.env.SPORTS_BOOK_DATABASE_HOST,
        dialect: process.env.SPORTS_BOOK_DATABASE_DRIVER,
    },
    sportsBookDatabase: {
        development: {
            username: process.env.SPORTS_BOOK_DATABASE_USERNAME,
            password: process.env.SPORTS_BOOK_DATABASE_PASSWORD,
            database: process.env.SPORTS_BOOK_DATABASE_NAME,
            host: process.env.SPORTS_BOOK_DATABASE_HOST,
            dialect: process.env.SPORTS_BOOK_DATABASE_DRIVER,
        },
        production: {
            username: process.env.SPORTS_BOOK_DATABASE_USERNAME,
            password: process.env.SPORTS_BOOK_DATABASE_PASSWORD,
            database: process.env.SPORTS_BOOK_DATABASE_NAME,
            host: process.env.SPORTS_BOOK_DATABASE_HOST,
            dialect: process.env.SPORTS_BOOK_DATABASE_DRIVER,
        },
    }
};
