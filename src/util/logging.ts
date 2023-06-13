import winston, { transport } from "winston";

const logger = winston.createLogger({
    level: 'debug',
    transports: [
        new winston.transports.Console(),
    ]
});

export{ logger };