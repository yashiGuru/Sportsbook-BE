import { Sequelize } from 'sequelize';
import config from './config';

export const sportsBookDatabase = new Sequelize(
    config.sportsBookDatabase.development.database,
    config.sportsBookDatabase.development.username,
    config.sportsBookDatabase.development.password,
    {
        host: config.sportsBookDatabase.development.host,
        dialect: config.sportsBookDatabase.development.dialect,
        dialectOptions: {
            connectTimeout: 60000,
            // socketPath: '/var/lib/mysql/mysql.sock',
        },
        // disable logging; default: console.log
        pool: {
            max: 15, // Increase this number to handle more concurrent requests
            min: 5, // Set an appropriate minimum number of connections
            idle: 10000, // Maximum time, in milliseconds, that a connection can be idle before being released
            acquire: 60000, // Maximum time, in milliseconds, that pool will try to get the connection before throwing error
        },
        logging: false,
    }
);

