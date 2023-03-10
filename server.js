require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const conn = require('./config/database');
const account_route = require('./routes/account.route');

const app = express();

app.use(cors());
app.use(express.static(__dirname + "/public/uploads"));
app.use(express.json());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

account_route(app);

app.listen(process.env.SERVER_PORT, () => {
    console.log("Server Auth is Listening at http://%s:%s", process.env.SERVER_HOST, process.env.SERVER_PORT);
});