import "reflect-metadata";
import { DataSource } from "typeorm";
import { Post } from "../entities/post.entity";
import config from "../../../../config/default.json";

export const AppDataSource = new DataSource({
  type: "postgres", // pending: get from config file or env variables
  host: config.dbHost,
  port: config.dbPort,
  username: config.dbUsername,
  password: config.dbPassword,
  database: config.dbDatabase,
  synchronize: true,
  logging: false,
  entities: [Post],
  migrations: ['src/infrastructure/database/migrations/*'],
  subscribers: [],
  migrationsTableName: "_migrations",
});

AppDataSource.initialize()
  .then(async () => {
    console.log("Database connection running OK.")
  })
  .catch((error) => console.log(error))
