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

app.get("/", (req, res) => {
    res.send("Welcome!");
});
app.listen(port, () => console.log(`Listening on ${port}`));