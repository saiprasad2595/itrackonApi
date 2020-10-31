import express = require('express');
var calendarRoute = require('./routes/calendar.ts');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors')
const app: express.Application = express();
app.use(cors());
mongoose.connect('mongodb://localhost/itrackon',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/v1/calendar", calendarRoute)
// Create a new express app instance
app.get('/', function (req, res) {
    res.send('Hello World');
});

app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});

