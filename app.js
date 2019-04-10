// Modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


// Server
var app = express();

app.locals.storage = require('./storage.json');

// custom MiddleWare
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// view Engine MiddleWare
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body Parser MiddleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set Static Path
app.use(express.static(path.join(__dirname, 'Public')));

// MySQL Routes
app.get('/posts', (req, res) => {
    res.render('posts');
});

app.post('/savePost', urlencodedParser, (req, res) => {
});

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

// Start Server
app.listen(3000, () => {
    console.log('Server Started on Port 3000...');
});