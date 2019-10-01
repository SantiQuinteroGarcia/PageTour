const express = require('express');
const morgan = require('morgan');
const path = require('path');
const methodOverrride = require('method-override');
const session = require('express-session');

const app = express();

// Db connection
const { mongoose } = require('./database');

// Settings 
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

app.use(express.urlencoded({extended: false}));
app.use(methodOverrride('_method'));
app.use(session({
  secret: 'pagetour',
  resave: true,
  saveUninitialized: true
}));

// Routes
app.use('/api/tasks', require('./routes/task.routes'));
app.use(require('./routes/index'));
app.use(require('./routes/users'));


// Static Files
app.use(express.static(path.join(__dirname, 'public')));;

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
