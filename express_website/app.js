// App Require
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

// Initialize App
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Route
app.get('/', function(req, res) {
	res.send('Running Express App...');
});

app.listen(3000);
console.log('Server is running on port 3000...');

