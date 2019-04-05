var express = require('express');
var router = express.Router();
var myDBHelper= require('../db/dbhelper');

/* GET all categories. */
router.get('/', async (req, res, next)=> {
let results= await myDBHelper.pool.query('SELECT * from categories');
res.json(results);
});

module.exports = router;
