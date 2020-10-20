var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource1');
});

router.get('/list', function(req, res, next) {
    res.send(`i'm a list page`);
});

module.exports = router;