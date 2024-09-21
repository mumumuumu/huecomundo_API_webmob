import express from 'express';
import espadaRoutes from './routes/espadaRoute';
import capitaoRoutes from './routes/capitaoRoute';
import healthCheckRoute from './routes/healthcheckRout';
import { AppDataSource } from './routes/data-source';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());


AppDataSource.initialize().then(() => {
    console.log('Conexão com o banco de dados inicializada ------ hogyoko está nas mãos de Aizen...');
}).catch(error => console.log('Erro ao inicializar o banco de dados:', error));


app.use('/webmob', espadaRoutes);
app.use('/webmob', capitaoRoutes); 
app.use('/webmob', healthCheckRoute); 


export { app };
