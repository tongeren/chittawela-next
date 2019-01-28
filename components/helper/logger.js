import { createLogger, transports, format } from 'winston';

const { combine, splat, simple, align, printf, timestamp } = format;

export const logger = createLogger({
    format: combine(
        splat(),
        simple(),
        align(),
        timestamp(),
        printf(info => `${info.timestamp}: ${info.message}`)
    ),
    transports: [ new transports.Console({
        name: 'debug-console',
        handleExceptions: true,
        json: false,
        colorize: true,
        exitOnError: false,
        silent: false
    })]
});