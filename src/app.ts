import express, {Application} from 'express';
import authRoutes from './routes/auth';
import morgan from 'morgan';

const app: Application = express();
var expres = require('express');
//settings
app.set('port',3000);

//middlewares
app.use(morgan<any>('dev'));
app.use(expres.json());

//routes
app.use('/api/auth', authRoutes)
export default app;