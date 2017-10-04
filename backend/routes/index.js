var express = require('express');
var router = express.Router();
var mongodb =require('mongodb');

var url ="mongodb://165.227.187.208:4536/agenda";

function getagenda(callback){
  mongodb.connect(url, (err,db) => {
    if (err) throw err;

    var agenda =  db.collection("agenda");
    agenda.find({}).toArray((err2, agenda)=>{
      if (err2) throw err2;

      callback(agenda);

    });
  });
}

/* GET agenda */
router.get('/agenda', function(req, res) {
  getagenda((agenda) => {
    res.json(agenda);
  });
});

module.exports = router;
