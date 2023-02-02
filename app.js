require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const conn = require('./config/database');
const category_route = require('./routes/category.route');
const product_route = require('./routes/product.route');
const account_route = require('./routes/account.route');

const app = express();

app.use(cors());
app.use(express.static(__dirname + "/public/uploads"));
app.use(express.json());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

category_route(app);
product_route(app);

const server = app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {

    const host = server.address().address;
    const port = server.address().port;

    console.log("API App is Listening at http://%s:%s", host, port);

});
