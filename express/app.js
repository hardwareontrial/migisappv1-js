const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes');
const job = require('./jobs');
const cors = require('cors');

const app = express();

app.use(cors({origin: "*"}));
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/', route);

job.AttendanceUser();

module.exports = app;