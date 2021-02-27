const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const assets = require('./config/assets.json')

const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const bannersRouter = require('./routes/banners');
const coursesRouter = require('./routes/courses');
const eventsRouter = require('./routes/events');
const membersRouter = require('./routes/members');
const publicationsRouter = require('./routes/publications');
const researchRouter = require('./routes/research');

const app = express();
app.use(cors());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/banner', express.static(path.join(__dirname, assets.banner)));
app.use('/pdf', express.static(path.join(__dirname, assets.pdf)));
app.use('/profile', express.static(path.join(__dirname, assets.profile)));
app.use('/teaser', express.static(path.join(__dirname, assets.teaser)));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/banners', bannersRouter);
app.use('/courses', coursesRouter);
app.use('/events', eventsRouter);
app.use('/members', membersRouter);
app.use('/publications', publicationsRouter);
app.use('/research', researchRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
