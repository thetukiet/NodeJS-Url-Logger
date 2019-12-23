/* Load modules */
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const appConfig = require("./config");
const database = require('./app/init/dbInit');

/* Init database */
database.init();

/* Init server listening */
const port = process.argv[2] || appConfig.api.port;
app.listen(port, function () {
    console.log("Server listening on port : " + port);
});


/* Express configuration */
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/", require('./app/routes/router'));