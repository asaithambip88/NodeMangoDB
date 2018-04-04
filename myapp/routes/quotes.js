var express = require('express');
var router = express.Router();
var db;
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://asaithambi:asaithambi123@ds163418.mlab.com:63418/asaimangodb', (err, client) => {
    if (err) return console.log(err);
    db = client.db('asaimangodb');
    console.log("database connected");
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
    db.collection('quotes').save(req.body, (err, result) => {
        if (err) return console.log(err)
    
        console.log('saved to database');
        res.sendStatus(200);
    });
});
module.exports = router;
