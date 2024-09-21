import "reflect-metadata"
import { DataSource } from "typeorm"
import dotenv from "dotenv"
import { Espada } from '../entity/Espada'; 
import { Capitão } from '../entity/Capitães'; 

dotenv.config()

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [Espada, Capitão],
    migrations: [],
    subscribers: [],
})

