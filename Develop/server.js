//dev dependencies
const express = require('express');
const app = express();
//port
const PORT = process.env.PORT || 8080;
//middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//linking route files for API and HTML routing
require('./routes/routes')(app);
require('./routes/htmlRoute')(app);
//always listening
app.listen(PORT, () => console.log(`App listening on PORT http://localhost:${PORT}`));