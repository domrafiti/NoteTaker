//requiring path to assist with routing
const path = require('path');

//allows the get statements to be use by other files
module.exports = (app) => {
    //HTML routing - GET STATEMENTS
    app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../public/notes.html')));
    //asterix is wildcrd that catches all  - goes last
    app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
}