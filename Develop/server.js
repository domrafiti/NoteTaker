const fs = require('fs');
const express = require('express');
const app = express();
const routes = require("./routes/routes.js");


const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
//makes public folder available for front end.
app.use(express.static("public"));
app.use(express.json());
//defining routes
app.use(routes);

app.listen(PORT, () => console.log(`App listening on PORT http://localhost:${PORT}`));
