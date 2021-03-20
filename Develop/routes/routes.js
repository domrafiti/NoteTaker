//initializes express router
const router = require('express').Router();
const db = require('./db/db.json');

//HTML routing - GET STATEMENTS
router.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../html/notes.html')));
//asterix is wildcrd that catches all  - goes last
router.get('*', (req, res) => res.sendFile(path.join(__dirname, '../html/index.html')));


//API Routes - request of a get method doesnt have a body
router.get('/api/notes', (req, res) => {
    //taking db array - for each and assinging new id and id value
    db.forEach((note, index) => {
        note.id = index + 1;
    });
    //sending the DB array back
    res.send(db);
});
//post method can have things included in the body - find out how to re-write the file with the Data so that it can be for.
router.post('/api/notes', (req, res) => {

    //getting existing db and pushing in the new data from front. in 'req.body'
    db.push(req.body);

    //if the array is not null - assign an ID
    if (!db) {
        //assign an ID based on current array length and position
        db[db.length].id = db.length
    }

    res.send(db);

});

module.exports = router;


//gap - dom to solve - file systm modififcations to handle persistant requirement
