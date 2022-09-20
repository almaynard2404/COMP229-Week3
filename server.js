//Third party modules
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));






//import Routes
import indexRouter from './app/routes/index.router.server.js';


//Instantiate Express Application
const app = express();


//Set up middlewares
app.set('views', path.join(__dirname, '/app/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client')))
app.use(session({

    secret: 'MySecret',
    saveUninitialized: false,
    resave: false
}));


app.use('/', indexRouter);


app.listen(3000);