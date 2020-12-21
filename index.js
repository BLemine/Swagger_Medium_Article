const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = 4000;
//
const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '15MB' }));
app.use(bodyParser.raw());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});
app.get("/", (req, res) => {
    res.send("Welcome!");
});
app.post("/user", (req, res) => {
    if (req.body.login === "gregoire" && req.body.password === "1aq2zs3rF")
        res.status(200).send({ response: "OK" })
    else res.status(405).send({ response: "Bad typed user" })
})
app.listen(port, () => console.log(`Listening on ${port}`));