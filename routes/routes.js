//dependencies used for file system and accessing the DB file
const fs = require('fs');
let db = require('../db/db.json');

module.exports = (app) => {
    //get statement used for retrieving notes in the db.json file
    app.get('/api/notes', (req, res) => {
        db.forEach((note, index) => {
            note.id = index + 1;
        });

        res.json(db);
    });
    //used for adding new notes to db.json file
    app.post('/api/notes', (req, res) => {
        let newNote = req.body;

        newNote.id = db.length + 1;

        db.push(newNote);


        fs.writeFileSync('./db/db.json', JSON.stringify(db));


        res.json(db);
    });
    //filter function not working - delete is not functioning
    app.delete(`/api/notes/:id`, (req, res) => {
        const deleteNote = req.params.id;

        let newDb = db.filter(note => note.id !== deleteNote);

        fs.writeFileSync('./db/db.json', JSON.stringify(newDb));

        res.json(db);
    });
};
