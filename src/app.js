import express from 'express';
import config from './config';

import rutasHistorial from './routes/historial.routes';

const app = express();

//settings
app.set('port', config.port);

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(rutasHistorial);

export default app;