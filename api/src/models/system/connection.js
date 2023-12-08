import chalk from 'chalk';
import { Sequelize } from 'sequelize';

const connection = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,
    {
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        dialect: 'mysql',
        dialectOptions: {
            decimalNumbers: true,
            timezone: 'local',
        },
        logQueryParameters: process.env.APPENV === 'development',
        logging: process.env.APPENV === 'development'
            ? args => console.log(chalk.blue(args))
            : false,
        timezone: 'UTC',
        define: {
            underscored: true,
            timestamps: false,
            charset: 'utf8'
        }
    }
);

export default connection;
