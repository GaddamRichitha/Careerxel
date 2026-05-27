"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    connection: {
        client: env("DATABASE_CLIENT", "mysql"),
        connection: {
            host: env("DATABASE_HOST", "127.0.0.1"),
            port: env.int("DATABASE_PORT", 3306),
            database: env("DATABASE_NAME", "careerxel_db"),
            user: env("DATABASE_USERNAME", "root"),
            password: env("DATABASE_PASSWORD", ""),
            ssl: env.bool("DATABASE_SSL", false)
        },
        pool: {
            min: env.int("DATABASE_POOL_MIN", 2),
            max: env.int("DATABASE_POOL_MAX", 10)
        }
    }
});
