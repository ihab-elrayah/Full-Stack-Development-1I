// register handlebars partials
https://www.npmjs.com/package/hbs)
hbs.registerPartials(path.join(__dirname, 'app_server',
'views/partials'));

require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const hbs = require('hbs');
const passport = require('passport');

require('./app_api/models/db');
require('./app_api/config/passport');

const indexRouter = require('./app_server/routes/index');
const usersRouter = require('./app_server/routes/users');
const travelRouter = require('./app_server/routes/travel');
const roomsRouter = require('./app_server/routes/rooms');
const aboutRouter = require('./app_server/routes/about');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

// register handlebars partials (https://www.npmjs.com/package/hbs)
hbs.registerPartials(path.join(__dirname, 'app_server', 'views/partials'));
